'use client';

import { Plus, Send, Smile } from 'lucide-react';
// import { Gift, ImagePlus } from 'lucide-react';
import { CHANNELS } from '@/constants/chat';

type MessageInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isSending: boolean;
  activeChannel: string;
};

export function MessageInput({
  value,
  onChange,
  onSend,
  isSending,
  activeChannel,
}: MessageInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  const channelName = CHANNELS.find((c) => c.id === activeChannel)?.name;

  return (
    <div className="px-4 pb-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 bg-[#383a40] rounded-lg px-4 py-2">
          <button className="p-1 rounded hover:bg-[#404249] text-[#b5bac1] hover:text-[#f2f3f5]">
            <Plus className="w-5 h-5" />
          </button>

          <input
            type="text"
            placeholder={`Message #${channelName}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-[#dbdee1] placeholder-[#6d6f78] focus:outline-none"
          />

          <div className="flex items-center gap-1">
            {/* TODO: Implement attachment features */}
            {/* <button className="p-1 rounded hover:bg-[#404249] text-[#b5bac1] hover:text-[#f2f3f5]">
              <Gift className="w-5 h-5" />
            </button>
            <button className="p-1 rounded hover:bg-[#404249] text-[#b5bac1] hover:text-[#f2f3f5]">
              <ImagePlus className="w-5 h-5" />
            </button> */}
            <button className="p-1 rounded hover:bg-[#404249] text-[#b5bac1] hover:text-[#f2f3f5]">
              <Smile className="w-5 h-5" />
            </button>
            <button
              onClick={onSend}
              disabled={!value.trim() || isSending}
              className={`p-1.5 rounded transition-colors ${
                value.trim()
                  ? 'bg-[#5865f2] hover:bg-[#4752c4] text-white'
                  : 'text-[#949ba4] cursor-not-allowed'
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
