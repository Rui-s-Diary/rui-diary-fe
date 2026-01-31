'use client';

import { useRef, useEffect } from 'react';
import { Message } from '@/types/chat';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';

type ChatMessageListProps = {
  messages: Message[];
  isTyping: boolean;
};

export function ChatMessageList({ messages, isTyping }: ChatMessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      <div className="max-w-2xl mx-auto space-y-4">
        {messages.map((message, index) => {
          const showAvatar =
            index === 0 || messages[index - 1].role !== message.role;

          return (
            <ChatMessage
              key={message.id}
              message={message}
              showAvatar={showAvatar}
            />
          );
        })}

        {isTyping && <TypingIndicator />}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
