export type LoginPayload = {
  email: string;
  password: string;
};

export type TokenResponse = {
  access_token: string;
  refresh_token: string;
};

export type LoginResponse = TokenResponse;

export type GoogleOAuthResponse = {
  auth_url: string;
  state?: string;
};
