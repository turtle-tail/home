import Link from 'next/link';
import { Header } from '@/components/header';
import { ProjectGrid } from '@/components/project-grid';
import { Footer } from '@/components/footer';
import { projects } from '@/content/projects';

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Header />

          {/* Introduction Section */}
          <section className="mb-12 text-center">
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              turtle-tail은 일상에서 유용하게 사용할 수 있는 도구와 재미있는 콘텐츠를
              무료로 제공합니다. 심리테스트부터 이미지 비교 도구까지, 다양한 웹 서비스를
              경험해보세요.
            </p>
          </section>

          {/* Projects Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">프로젝트</h2>
            <ProjectGrid projects={projects} />
          </section>

          {/* Features Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">특징</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🆓</div>
                <h3 className="font-semibold text-gray-900 mb-2">무료 이용</h3>
                <p className="text-gray-600 text-sm">
                  모든 서비스를 무료로 이용할 수 있습니다. 별도의 회원가입이 필요하지 않습니다.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="font-semibold text-gray-900 mb-2">모바일 최적화</h3>
                <p className="text-gray-600 text-sm">
                  스마트폰, 태블릿, PC 등 모든 기기에서 편리하게 이용할 수 있습니다.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="font-semibold text-gray-900 mb-2">개인정보 보호</h3>
                <p className="text-gray-600 text-sm">
                  사용자의 개인정보를 안전하게 보호하며, 필요 최소한의 정보만 수집합니다.
                </p>
              </div>
            </div>
          </section>

          {/* About Link */}
          <section className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              turtle-tail에 대해 더 알아보기
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
