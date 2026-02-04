import { API_BASE_URL } from '@/lib/config';
import {
  LoginPayload,
  RegisterPayload,
  TokenResponse,
  UserResponse,
  GoogleOAuthResponse,
} from '@/types/auth';

export async function register(payload: RegisterPayload): Promise<UserResponse> {
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error((error as { detail?: string }).detail || 'Registration failed');
  }

  return res.json();
}

export async function login(payload: LoginPayload): Promise<TokenResponse> {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error((error as { detail?: string }).detail || 'Login failed');
  }

  return res.json();
}


export async function getGoogleOAuthUrl(): Promise<GoogleOAuthResponse> {
  const res = await fetch(`${API_BASE_URL}/auth/oauth/google/url`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(
      (error as { detail?: string }).detail || 'Failed to get Google OAuth URL'
    );
  }

  return res.json();
}


export async function handleGoogleCallback(
  code: string,
  state: string | null
): Promise<TokenResponse> {
  const params = new URLSearchParams({
    code,
  });
  if (state) {
    params.append('state', state);
  }

  const res = await fetch(
    `${API_BASE_URL}/auth/oauth/google/callback?${params.toString()}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(
      (error as { detail?: string }).detail || 'Google login failed'
    );
  }

  return res.json();
}

export async function loginWithGoogle() {
  try {
    const response = await getGoogleOAuthUrl();
    const redirectUrl = response.auth_url || (response as any).redirectUrl;
    if (!redirectUrl) {
      throw new Error('No redirect URL received from backend');
    }
    window.location.href = redirectUrl;
  } catch (error) {
    console.error('Google login error:', error);
    throw error;
  }
}

export async function getCurrentUser(accessToken: string): Promise<UserResponse> {
  const res = await fetch(`${API_BASE_URL}/auth/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(
      (error as { detail?: string }).detail || 'Failed to get user info'
    );
  }

  return res.json();
}
