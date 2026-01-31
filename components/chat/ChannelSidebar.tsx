'use client';

import { Plus, Hash, ChevronDown, Mic, Headphones, LogOut } from 'lucide-react';
import { Channel } from '@/types/chat';
import { CHANNELS } from '@/constants/chat';

type ChannelSidebarProps = {
  activeChannel: string;
  onChannelSelect: (channelId: string) => void;
  onLogout: () => void;
};

export function ChannelSidebar({
  activeChannel,
  onChannelSelect,
  onLogout,
}: ChannelSidebarProps) {
  return (
    <div className="w-60 bg-[#2b2d31] flex flex-col">
      {/* Server header */}
      <button className="h-12 px-4 flex items-center justify-between border-b border-[#1f2023] hover:bg-[#35373c] transition-colors">
        <span className="font-semibold truncate">RUI</span>
        <ChevronDown className="w-4 h-4 text-[#b5bac1]" />
      </button>

      {/* Channel list */}
      <div className="flex-1 overflow-y-auto px-2 py-3">
        <div className="flex items-center justify-between px-1 mb-1">
          <span className="text-xs font-semibold text-[#949ba4] uppercase tracking-wide">
            Text Channels
          </span>
          <Plus className="w-4 h-4 text-[#949ba4] hover:text-[#f2f3f5] cursor-pointer" />
        </div>

        {CHANNELS.filter((c) => c.type === 'text').map((channel) => (
          <button
            key={channel.id}
            onClick={() => onChannelSelect(channel.id)}
            className={`w-full flex items-center gap-1.5 px-2 py-1.5 rounded text-sm transition-colors ${
              activeChannel === channel.id
                ? 'bg-[#404249] text-white'
                : 'text-[#949ba4] hover:text-[#dbdee1] hover:bg-[#35373c]'
            }`}
          >
            <Hash className="w-5 h-5 text-[#80848e]" />
            <span>{channel.name}</span>
          </button>
        ))}
      </div>

      {/* User panel */}
      <div className="h-[52px] bg-[#232428] px-2 flex items-center gap-2">
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-[#5865f2] flex items-center justify-center text-sm font-medium">
            U
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#23a559] rounded-full border-2 border-[#232428]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium truncate">User</div>
          <div className="text-xs text-[#949ba4] truncate">Online</div>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1.5 rounded hover:bg-[#404249] text-[#b5bac1] hover:text-[#f2f3f5]">
            <Mic className="w-4 h-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-[#404249] text-[#b5bac1] hover:text-[#f2f3f5]">
            <Headphones className="w-4 h-4" />
          </button>
          <button
            onClick={onLogout}
            className="p-1.5 rounded hover:bg-[#404249] text-[#b5bac1] hover:text-[#ed4245]"
            title="Đăng xuất"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
