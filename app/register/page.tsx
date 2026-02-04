'use client';

import { RegisterForm } from '@/components/register-form';
import { LoginIllustration } from '@/components/login-illustration';
import { useAuth } from '@/hooks/use-auth';
import { Loader2 } from 'lucide-react';

export default function RegisterPage() {
  const { isLoading } = useAuth({
    redirectTo: '/chat',
    redirectIfFound: true,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-8 h-8 animate-spin text-violet-500" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="flex h-screen">
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-violet-100 via-purple-50 to-pink-50 items-center justify-center rounded-tr-3xl rounded-br-3xl overflow-hidden">
          <LoginIllustration />
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 lg:px-12">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}
