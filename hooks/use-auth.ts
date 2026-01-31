'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type UseAuthOptions = {
  redirectTo?: string;
  redirectIfFound?: boolean; 
};

export function useAuth(options: UseAuthOptions = {}) {
  const { redirectTo = '/', redirectIfFound = false } = options;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const hasToken = !!token;

    setIsAuthenticated(hasToken);
    
    if (redirectIfFound && hasToken) {
      router.replace(redirectTo);
    } else if (!redirectIfFound && !hasToken) {
      router.replace(redirectTo);
    } else {
      setIsLoading(false);
    }
  }, [router, redirectTo, redirectIfFound]);

  return { isLoading, isAuthenticated };
}
