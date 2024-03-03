// app/layout.tsx
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Toronto Centre Tenant Union</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
