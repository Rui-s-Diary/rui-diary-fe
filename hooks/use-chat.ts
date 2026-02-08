'use client';

import { useState, useEffect } from 'react';
import { Message } from '@/types/chat';
import { sendMessage as sendMessageAPI, getLatestConversation } from '@/lib/api/chat';
import { getCurrentUser } from '@/lib/api/auth';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [conversationId, setConversationId] = useState<number | null>(null);
  const [userInfo, setUserInfo] = useState<{
    user_id: number;
    user_name: string;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setIsLoadingHistory(false);
        return;
      }

      try {
        const user = await getCurrentUser(token);
        setUserInfo({
          user_id: user.id,
          user_name: user.name,
        });

        const characterId = 1;
        const conversation = await getLatestConversation(characterId, token);
        
        if (conversation && conversation.messages.length > 0) {
          const historyMessages: Message[] = conversation.messages.map((msg) => {
            const msgAny = msg as any;
            const role = msgAny.sender_type === 'user' ? 'user' : 'bot';
            return {
              id: msg.id,
              role: role as 'user' | 'bot',
              content: msg.content,
              timestamp: new Date(msg.created_at),
            };
          });
          setMessages(historyMessages);
          setConversationId(conversation.id);
        } else {
          setMessages([]);
        }
      } catch (error: any) {
        if (error.message?.includes('401') || error.message?.includes('Unauthorized')) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
        }
      } finally {
        setIsLoadingHistory(false);
      }
    };

    loadData();
  }, []);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isSending || !userInfo) return;

    const token = localStorage.getItem('access_token');
    if (!token) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsSending(true);

    try {
      const response = await sendMessageAPI(
        {
          message: trimmed,
          character_id: 1,
        },
        token
      );

      if (!conversationId && response.conversation_id) {
        setConversationId(response.conversation_id);
      }

      const botMessages: Message[] = response.ai_responses.map((aiResponse) => ({
        id: aiResponse.id,
        role: 'bot',
        content: aiResponse.content,
        timestamp: new Date(aiResponse.created_at),
      }));
      setMessages((prev) => [...prev, ...botMessages]);
    } catch (error: any) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        role: 'bot',
        content: 'Sorry, an error occurred. Please try again later.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsSending(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    isSending,
    isLoadingHistory,
    sendMessage,
  };
}
