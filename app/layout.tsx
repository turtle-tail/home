import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'turtle-tail | 사이드 프로젝트 모음',
  description: '다양한 사이드 프로젝트들을 소개합니다',
  keywords: ['프로젝트', '포트폴리오', 'side project'],
  openGraph: {
    title: 'turtle-tail',
    description: '사이드 프로젝트 모음',
    url: 'https://turtle-tail.com',
    siteName: 'turtle-tail',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'turtle-tail',
    description: '사이드 프로젝트 모음',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R9ZYC26CFJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R9ZYC26CFJ');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
