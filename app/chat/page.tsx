'use client';

export const dynamic = 'force-dynamic';

import { Loader2 } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { useChat } from '@/hooks/use-chat';
import { ChatHeader, ChatMessageList, ChatInput } from '@/components/chat';

export default function ChatPage() {
  const { isLoading } = useAuth({
    redirectTo: '/',
    redirectIfFound: false,
  });

  const { messages, input, setInput, isSending, sendMessage } = useChat();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/';
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-violet-500" />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <ChatHeader onLogout={handleLogout} />

      <ChatMessageList messages={messages} isTyping={isSending} />

      <ChatInput
        value={input}
        onChange={setInput}
        onSend={sendMessage}
        disabled={isSending}
      />
    </div>
  );
}
