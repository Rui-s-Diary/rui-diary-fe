'use client';

import { useRef, useEffect } from 'react';
import { Message } from '@/types/chat';
import { formatTime } from '@/lib/format';

type MessageListProps = {
  messages: Message[];
  isSending: boolean;
};

export function MessageList({ messages, isSending }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4">
      <div className="max-w-4xl mx-auto space-y-4">
        {messages.map((m, index) => {
          const showAvatar = index === 0 || messages[index - 1].role !== m.role;

          return (
            <div
              key={m.id}
              className={`group flex gap-4 py-0.5 px-2 -mx-2 rounded hover:bg-[#2e3035] transition-colors ${
                !showAvatar ? 'mt-0' : 'mt-4'
              }`}
            >
              {/* Avatar column */}
              <div className="w-10 flex-shrink-0">
                {showAvatar && (
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      m.role === 'bot'
                        ? 'bg-gradient-to-br from-pink-400 to-rose-500'
                        : 'bg-[#747f8d]'
                    }`}
                  >
                    {m.role === 'bot' ? '💗' : 'A'}
                  </div>
                )}
              </div>

              {/* Message content */}
              <div className="flex-1 min-w-0">
                {showAvatar && (
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`font-medium hover:underline cursor-pointer ${
                        m.role === 'bot' ? 'text-pink-400' : 'text-[#f2f3f5]'
                      }`}
                    >
                      {m.role === 'bot' ? 'Rui' : 'Anh'}
                    </span>
                    <span className="text-xs text-[#949ba4]">
                      {formatTime(m.timestamp)}
                    </span>
                  </div>
                )}
                <p className="text-[#dbdee1] leading-relaxed break-words">
                  {m.content}
                </p>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {isSending && <TypingIndicator />}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-4 px-2 -mx-2">
      <div className="w-10 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-sm font-medium">
          💗
        </div>
      </div>
      <div className="flex items-center gap-1 py-2">
        <div className="flex gap-1">
          <span
            className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
            style={{ animationDelay: '0ms' }}
          />
          <span
            className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
            style={{ animationDelay: '150ms' }}
          />
          <span
            className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
            style={{ animationDelay: '300ms' }}
          />
        </div>
        <span className="text-xs text-pink-300 ml-2">Em yêu đang nhập...</span>
      </div>
    </div>
  );
}
