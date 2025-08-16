import type { ReactNode } from 'react';

export const metadata = {
  title: 'Webflow Cloud Next.js App',
  description: 'Basic Next.js 15 + React 19 app scaffold',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

