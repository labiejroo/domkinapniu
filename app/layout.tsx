import { getLocale } from 'next-intl/server';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { SITE_URL } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

// Strona ma tylko jasny wygląd. "only light" zabrania przeglądarkom na Androidzie
// (Samsung Internet, Chrome, przeglądarki w Messengerze/Instagramie) przyciemniać
// ją w trybie ciemnym, co zmieniało kolory marki.
export const viewport: Viewport = {
  colorScheme: 'only light',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body>{children}</body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="19d4cee6-397b-4c8d-8ba0-063d3871e6c9"
        strategy="afterInteractive"
      />
    </html>
  );
}
