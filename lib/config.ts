const NODE_ENV = process.env.NODE_ENV;

export const isProd = NODE_ENV === 'production';
export const isDev = NODE_ENV === 'development';

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  (isProd ? 'https://api.example.com' : 'http://localhost:8000');

export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';
export const FRONTEND_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL ??
  (isProd ? 'https://yourdomain.com' : 'http://localhost:3000');
