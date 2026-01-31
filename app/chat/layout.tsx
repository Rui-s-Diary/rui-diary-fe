import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat - Rui',
  description: 'Chat with Rui AI',
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
