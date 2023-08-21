'use client';
import React from 'react';
import { Roboto } from 'next/font/google';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body suppressHydrationWarning className={roboto.className}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>{children}</ChakraProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
