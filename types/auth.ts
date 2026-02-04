export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

export type TokenResponse = {
  access_token: string;
  refresh_token: string;
};

export type LoginResponse = TokenResponse;

export type UserResponse = {
  id: number;
  name: string;
  email: string;
  avatar_url?: string;
  created_at?: string;
};

export type GoogleOAuthResponse = {
  auth_url: string;
  state?: string;
};
