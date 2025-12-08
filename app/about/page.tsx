import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - turtle-tail',
  description:
    'turtle-tail은 다양한 웹 기반 사이드 프로젝트를 개발하고 공유하는 공간입니다. 심리테스트, 이미지 비교 도구 등 유용하고 재미있는 서비스를 제공합니다.',
};

export default function AboutPage() {
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

        <h1 className="text-4xl font-bold text-gray-900 mb-8">About turtle-tail</h1>

        <section className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">소개</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            turtle-tail은 다양한 웹 기반 사이드 프로젝트를 개발하고 공유하는 공간입니다.
            &quot;거북이 꼬리&quot;라는 이름처럼, 느리지만 꾸준히 흥미로운 프로젝트들을
            만들어 나가고 있습니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">미션</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            일상에서 유용하게 사용할 수 있는 도구와 재미있는 콘텐츠를 무료로 제공하는 것이
            저희의 목표입니다. 복잡한 기능보다는 간단하고 직관적인 사용자 경험을
            추구합니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">프로젝트</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            현재 turtle-tail에서 운영 중인 프로젝트들입니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>
              <strong>Labs</strong> - 다양한 심리테스트를 즐기고 친구들과 결과를 공유할 수 있는
              플랫폼
            </li>
            <li>
              <strong>PixelDiff</strong> - 두 이미지의 차이점을 정밀하게 비교할 수 있는
              이미지 비교 도구
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">기술 스택</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            turtle-tail의 모든 프로젝트는 최신 웹 기술을 활용하여 개발되었습니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Next.js - React 기반 풀스택 프레임워크</li>
            <li>TypeScript - 타입 안전성을 보장하는 JavaScript 슈퍼셋</li>
            <li>Tailwind CSS - 유틸리티 기반 CSS 프레임워크</li>
            <li>Vercel - 글로벌 배포 플랫폼</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">문의</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            프로젝트에 대한 문의나 제안이 있으시면 언제든지 연락해 주세요.
            새로운 아이디어와 피드백은 항상 환영합니다.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            프로젝트 둘러보기
          </Link>
        </div>
      </div>
    </main>
  );
}
