'use client';

import { LoginForm } from '@/components/login-form';
import { LoginIllustration } from '@/components/login-illustration';
import { useAuth } from '@/hooks/use-auth';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const { isLoading } = useAuth({
    redirectTo: '/chat',
    redirectIfFound: true,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="flex h-screen">
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-yellow-100 via-yellow-50 to-orange-50 items-center justify-center rounded-tr-3xl rounded-br-3xl overflow-hidden">
          <LoginIllustration />
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 lg:px-12">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
