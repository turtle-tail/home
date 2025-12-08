import type { Metadata } from 'next';
import './globals.css';
import { GoogleAnalytics, GoogleAds, MicrosoftClarity } from '@/components/analytics';

export const metadata: Metadata = {
  title: 'turtle-tail | 무료 웹 서비스 - 심리테스트, 이미지 비교 도구',
  description:
    'turtle-tail에서 다양한 무료 웹 서비스를 이용해보세요. 재미있는 심리테스트, 정밀한 이미지 비교 도구 등 유용한 서비스를 제공합니다.',
  keywords: [
    '심리테스트',
    '이미지 비교',
    '무료 도구',
    '웹 서비스',
    'MBTI',
    '성격 테스트',
    'PixelDiff',
    'turtle-tail',
  ],
  verification: {
    other: {
      'naver-site-verification': '1af20bdbf7014b6b782e50988646ac232c32ca80',
      'google-adsense-account': 'ca-pub-5375099993721387',
    },
  },
  openGraph: {
    title: 'turtle-tail | 무료 웹 서비스',
    description:
      '심리테스트, 이미지 비교 도구 등 다양한 무료 웹 서비스를 제공합니다.',
    url: 'https://turtle-tail.com',
    siteName: 'turtle-tail',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'turtle-tail | 무료 웹 서비스',
    description:
      '심리테스트, 이미지 비교 도구 등 다양한 무료 웹 서비스를 제공합니다.',
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
