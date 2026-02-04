import { API_BASE_URL } from '@/lib/config';

export type ChatRequest = {
  user_message: string;
};

export type ChatResponse = {
  ai_messages: string[];
};

export type SendMessageRequest = {
  message: string;
  character_id: number;
};

export type MessageResponse = {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
};

export type SendMessageResponse = {
  user_message: MessageResponse;
  ai_response: MessageResponse;
  conversation_id: number;
};

export type ConversationResponse = {
  id: number;
  character_id: number;
  messages: MessageResponse[];
  created_at: string;
  updated_at: string;
};

export async function sendChatMessage(
  payload: ChatRequest,
  headers: {
    user_id: number;
    user_name: string;
    character_id: number;
    request_id: string;
    access_token: string;
  }
): Promise<ChatResponse> {
  const res = await fetch(`${API_BASE_URL}/chat/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${headers.access_token}`,
      'user-id': headers.user_id.toString(),
      'user-name': headers.user_name,
      'character-id': headers.character_id.toString(),
      'request-id': headers.request_id,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    let errorMessage = 'Failed to send message';
    
    if (error.detail) {
      if (Array.isArray(error.detail)) {
        errorMessage = error.detail
          .map((e: any) => {
            if (typeof e === 'string') return e;
            return e.msg || e.message || `${e.loc?.join('.')}: ${e.msg || e.type || 'validation error'}`;
          })
          .join(', ');
      } else if (typeof error.detail === 'string') {
        errorMessage = error.detail;
      } else {
        errorMessage = JSON.stringify(error.detail);
      }
    }
    
    throw new Error(errorMessage);
  }

  return res.json();
}

export async function sendMessage(
  payload: SendMessageRequest,
  accessToken: string
): Promise<SendMessageResponse> {
  const res = await fetch(`${API_BASE_URL}/chat/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(
      (error as { detail?: string }).detail || 'Failed to send message'
    );
  }

  return res.json();
}

export async function getConversation(
  conversationId: number,
  accessToken: string
): Promise<ConversationResponse> {
  const res = await fetch(`${API_BASE_URL}/chat/conversation/${conversationId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(
      (error as { detail?: string }).detail || 'Failed to get conversation'
    );
  }

  return res.json();
}

export async function getLatestConversation(
  characterId: number,
  accessToken: string
): Promise<ConversationResponse | null> {
  const res = await fetch(`${API_BASE_URL}/chat/latest?character_id=${characterId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(
      (error as { detail?: string }).detail || 'Failed to get latest conversation'
    );
  }

  if (res.status === 204) {
    return null;
  }

  return res.json();
}
