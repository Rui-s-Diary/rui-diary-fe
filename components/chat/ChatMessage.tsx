'use client';

import { Message } from '@/types/chat';
import { formatTime } from '@/lib/format';

type ChatMessageProps = {
  message: Message;
  showAvatar: boolean;
};

export function ChatMessage({ message, showAvatar }: ChatMessageProps) {
  const isBot = message.role === 'bot';

  return (
    <div className={`flex gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && showAvatar && (
        <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-sm flex-shrink-0">
          👩‍💻
        </div>
      )}
      {isBot && !showAvatar && <div className="w-8 flex-shrink-0" />}

      <div className={`max-w-[75%] ${!showAvatar ? 'mt-1' : ''}`}>
        {showAvatar && (
          <div className={`flex items-center gap-2 mb-1 ${isBot ? '' : 'justify-end'}`}>
            <span className="text-xs font-medium text-gray-700">
              {isBot ? 'Rui' : 'Bạn'}
            </span>
            <span className="text-xs text-gray-400">
              {formatTime(message.timestamp)}
            </span>
          </div>
        )}
        <div
          className={`px-4 py-2 rounded-2xl text-sm leading-relaxed ${
            isBot
              ? 'bg-white border border-gray-200 text-gray-800 rounded-tl-md'
              : 'bg-violet-500 text-white rounded-tr-md'
          }`}
        >
          {message.content}
        </div>
      </div>

      {!isBot && showAvatar && (
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-medium flex-shrink-0">
          U
        </div>
      )}
      {!isBot && !showAvatar && <div className="w-8 flex-shrink-0" />}
    </div>
  );
}
