import type { Metadata } from 'next';
import './globals.css';
import { GoogleAnalytics, GoogleAds, MicrosoftClarity } from '@/components/analytics';

export const metadata: Metadata = {
  title: 'turtle tail',
  description: '다양한 사이드 프로젝트들을 소개합니다',
  keywords: ['프로젝트', '포트폴리오', 'side project'],
  verification: {
    other: {
      'naver-site-verification': '1af20bdbf7014b6b782e50988646ac232c32ca80',
    },
  },
  openGraph: {
    title: 'turtle tail',
    description: '',
    url: 'https://turtle-tail.com',
    siteName: 'turtle-tail',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'turtle tail',
    description: '',
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
        <GoogleAnalytics />
        <GoogleAds />
        <MicrosoftClarity />
        {children}
      </body>
    </html>
  );
}
