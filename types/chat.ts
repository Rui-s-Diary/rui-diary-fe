export type Message = {
  id: number;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
};

export type Channel = {
  id: string;
  name: string;
  type: 'text' | 'voice';
};
