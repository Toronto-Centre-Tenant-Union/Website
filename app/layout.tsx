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
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="The official website for the Toronto Centre Tenant Union Organization. Help us make Toronto a better place to live together!"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
