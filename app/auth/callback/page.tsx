'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hash = window.location.hash.startsWith('#')
      ? window.location.hash.substring(1)
      : window.location.hash;

    const hashParams = new URLSearchParams(hash);
    const accessTokenFromHash = hashParams.get('access_token');
    const refreshTokenFromHash = hashParams.get('refresh_token');

    const errorParam = searchParams.get('error');

    if (errorParam) {
      setError('Đăng nhập Google thất bại. Vui lòng thử lại.');
      setIsLoading(false);
      return;
    }

    if (accessTokenFromHash || refreshTokenFromHash) {
      if (accessTokenFromHash) {
        localStorage.setItem('access_token', accessTokenFromHash);
      }
      if (refreshTokenFromHash) {
        localStorage.setItem('refresh_token', refreshTokenFromHash);
      }

      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);

      router.push('/chat');
      return;
    }

    setError('Không tìm thấy thông tin đăng nhập từ Google.');
    setIsLoading(false);
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        {isLoading ? (
          <>
            <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-purple-600" />
            <p className="text-gray-600">Đang xử lý đăng nhập...</p>
          </>
        ) : error ? (
          <>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={() => router.push('/')}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Quay lại trang đăng nhập
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

