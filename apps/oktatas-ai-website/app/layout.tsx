import { PosthogProvider } from "@/components/posthog-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <PosthogProvider>
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Analytics />
            </ThemeProvider>
          </SessionProvider>
        </PosthogProvider>
      </body>
    </html>
  );
}

export { metadata } from "./metadata";
