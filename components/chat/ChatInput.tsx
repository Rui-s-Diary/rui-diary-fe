'use client';

import { Send } from 'lucide-react';

type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled: boolean;
};

export function ChatInput({ value, onChange, onSend, disabled }: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 px-4 py-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Nhập tin nhắn..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-sm"
          />
          <button
            onClick={onSend}
            disabled={!value.trim() || disabled}
            className={`p-2 rounded-full transition-colors ${
              value.trim()
                ? 'bg-violet-500 hover:bg-violet-600 text-white'
                : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
