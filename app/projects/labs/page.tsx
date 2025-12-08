import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Labs - 재미있는 심리테스트 | turtle-tail',
  description:
    'Labs에서 다양한 심리테스트를 즐겨보세요. MBTI, 성격 유형, 연애 스타일 등 재미있는 테스트 결과를 친구들과 공유할 수 있습니다.',
  openGraph: {
    title: 'Labs - 재미있는 심리테스트',
    description: '다양한 심리테스트를 즐기고 친구들과 결과를 공유해보세요',
    url: 'https://labs.turtle-tail.com',
  },
};

export default function LabsProjectPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          홈으로 돌아가기
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <span className="text-5xl">🧪</span>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Labs</h1>
            <p className="text-lg text-gray-600 mt-2">재미있는 심리테스트 플랫폼</p>
          </div>
        </div>

        <div className="flex gap-2 mb-8">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            심리테스트
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            Web
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
            무료
          </span>
        </div>

        <section className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">서비스 소개</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Labs는 다양한 심리테스트를 즐길 수 있는 웹 플랫폼입니다.
            간단한 질문에 답하면 당신의 성격, 취향, 성향을 분석해 드립니다.
            테스트 결과는 카카오톡, 트위터 등 SNS로 쉽게 공유할 수 있어
            친구들과 함께 즐기기에 좋습니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">주요 기능</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-3 mb-6">
            <li>
              <strong>다양한 테스트</strong> - MBTI 기반 테스트, 성격 유형 테스트, 연애
              스타일 테스트 등 다양한 주제의 심리테스트 제공
            </li>
            <li>
              <strong>간편한 테스트 진행</strong> - 직관적인 UI로 누구나 쉽게 테스트를
              진행할 수 있습니다
            </li>
            <li>
              <strong>결과 공유</strong> - 테스트 결과를 이미지로 저장하거나 링크로 공유할
              수 있습니다
            </li>
            <li>
              <strong>모바일 최적화</strong> - 스마트폰에서도 편리하게 이용할 수 있도록
              모바일 환경에 최적화되어 있습니다
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">이런 분들께 추천해요</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>심심할 때 재미있는 테스트를 찾고 있는 분</li>
            <li>친구들과 함께 공유할 수 있는 콘텐츠를 원하는 분</li>
            <li>자신의 성격이나 취향을 알아보고 싶은 분</li>
            <li>SNS에 공유할 흥미로운 콘텐츠를 찾는 분</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">기술 스택</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Labs는 최신 웹 기술로 개발되어 빠르고 안정적인 서비스를 제공합니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Next.js 15 - App Router 기반</li>
            <li>TypeScript - 타입 안전한 개발</li>
            <li>Supabase - 백엔드 데이터베이스</li>
            <li>Tailwind CSS - 반응형 디자인</li>
          </ul>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200 flex gap-4">
          <a
            href="https://labs.turtle-tail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Labs 바로가기
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            다른 프로젝트 보기
          </Link>
        </div>
      </div>
    </main>
  );
}
