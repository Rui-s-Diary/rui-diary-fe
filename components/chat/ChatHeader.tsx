'use client';

import { LogOut } from 'lucide-react';

type ChatHeaderProps = {
  onLogout: () => void;
};

export function ChatHeader({ onLogout }: ChatHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-lg">
          👩‍💻
        </div>
        <div>
          <h1 className="font-semibold text-gray-900">Rui</h1>
          <p className="text-xs text-gray-500">Online</p>
        </div>
      </div>
      <button
        onClick={onLogout}
        className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
        title="Đăng xuất"
      >
        <LogOut className="w-5 h-5" />
      </button>
    </header>
  );
}
