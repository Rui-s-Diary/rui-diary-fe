'use client';

import { useState } from 'react';
import { Message } from '@/types/chat';
import { GIRLFRIEND_RESPONSES, WELCOME_MESSAGE } from '@/constants/chat';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'bot',
      content: WELCOME_MESSAGE,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsSending(true);

    // TODO: Replace with actual API call
    setTimeout(() => {
      const randomResponse =
        GIRLFRIEND_RESPONSES[
          Math.floor(Math.random() * GIRLFRIEND_RESPONSES.length)
        ];

      const botMessage: Message = {
        id: Date.now() + 1,
        role: 'bot',
        content: randomResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsSending(false);
    }, 800);
  };

  return {
    messages,
    input,
    setInput,
    isSending,
    sendMessage,
  };
}
