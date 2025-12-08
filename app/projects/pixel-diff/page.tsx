import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PixelDiff - 이미지 비교 도구 | turtle-tail',
  description:
    'PixelDiff는 두 이미지의 차이점을 정밀하게 비교하는 도구입니다. 디자인 QA, 웹 개발, 버전 비교 등 다양한 용도로 활용할 수 있습니다.',
  openGraph: {
    title: 'PixelDiff - 이미지 비교 도구',
    description: '두 이미지의 차이점을 찾아주는 정밀한 이미지 비교 도구',
    url: 'https://pixeldiff.turtle-tail.com',
  },
};

export default function PixelDiffProjectPage() {
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
          <span className="text-5xl">🔍</span>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">PixelDiff</h1>
            <p className="text-lg text-gray-600 mt-2">정밀한 이미지 비교 도구</p>
          </div>
        </div>

        <div className="flex gap-2 mb-8">
          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
            이미지
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            도구
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            Web
          </span>
        </div>

        <section className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">서비스 소개</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            PixelDiff는 두 이미지의 차이점을 픽셀 단위로 정밀하게 비교하는 도구입니다.
            디자인 작업물의 버전 비교, 웹사이트 스크린샷 비교, QA 테스트 등
            다양한 상황에서 이미지 간 차이를 빠르고 정확하게 확인할 수 있습니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">주요 기능</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-3 mb-6">
            <li>
              <strong>픽셀 단위 비교</strong> - 두 이미지의 차이를 픽셀 수준에서 정밀하게
              감지하고 시각화합니다
            </li>
            <li>
              <strong>다양한 비교 모드</strong> - 오버레이, 사이드 바이 사이드, 차이점
              하이라이트 등 다양한 비교 방식을 제공합니다
            </li>
            <li>
              <strong>드래그 앤 드롭</strong> - 이미지를 간편하게 업로드할 수 있는
              드래그 앤 드롭 인터페이스
            </li>
            <li>
              <strong>결과 저장</strong> - 비교 결과를 이미지로 저장하거나 공유할 수
              있습니다
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">활용 사례</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-3 mb-6">
            <li>
              <strong>디자인 QA</strong> - 디자인 시안과 실제 구현물의 차이점을 확인할 때
            </li>
            <li>
              <strong>버전 비교</strong> - 이미지나 디자인의 이전 버전과 현재 버전을
              비교할 때
            </li>
            <li>
              <strong>웹 개발</strong> - 웹사이트 스크린샷을 비교하여 레이아웃 변경사항을
              확인할 때
            </li>
            <li>
              <strong>문서 비교</strong> - 스캔된 문서나 이미지화된 텍스트의 차이점을
              찾을 때
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">이런 분들께 추천해요</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>디자이너 - 디자인 버전 간 차이점을 확인하고 싶은 분</li>
            <li>개발자 - UI 테스트 및 시각적 회귀 테스트를 수행하는 분</li>
            <li>QA 엔지니어 - 디자인 명세와 구현물을 비교 검증하는 분</li>
            <li>일반 사용자 - 사진이나 이미지의 차이점을 찾고 싶은 분</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">기술 스택</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            PixelDiff는 고성능 이미지 처리를 위해 최적화된 기술 스택을 사용합니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Next.js - 빠른 페이지 로딩과 SEO 최적화</li>
            <li>Canvas API - 브라우저 내 고성능 이미지 처리</li>
            <li>TypeScript - 안정적인 코드 품질</li>
            <li>Tailwind CSS - 모던한 반응형 UI</li>
          </ul>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200 flex gap-4">
          <a
            href="https://pixeldiff.turtle-tail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            PixelDiff 바로가기
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
