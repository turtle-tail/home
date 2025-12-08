import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '이용약관 - turtle-tail',
  description: 'turtle-tail 서비스 이용약관입니다.',
};

export default function TermsPage() {
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

        <h1 className="text-4xl font-bold text-gray-900 mb-8">이용약관</h1>

        <div className="text-sm text-gray-500 mb-8">최종 수정일: 2024년 12월 8일</div>

        <section className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">제1조 (목적)</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            이 약관은 turtle-tail(이하 &quot;서비스&quot;)이 제공하는 모든 서비스의 이용과
            관련하여 서비스와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">제2조 (정의)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            이 약관에서 사용하는 용어의 정의는 다음과 같습니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>
              <strong>&quot;서비스&quot;</strong>란 turtle-tail이 운영하는 웹사이트 및
              모바일 애플리케이션을 통해 제공하는 모든 서비스를 의미합니다.
            </li>
            <li>
              <strong>&quot;이용자&quot;</strong>란 서비스에 접속하여 이 약관에 따라
              서비스를 이용하는 모든 분을 의미합니다.
            </li>
            <li>
              <strong>&quot;콘텐츠&quot;</strong>란 서비스에서 제공되는 텍스트, 이미지,
              동영상, 소프트웨어 등 모든 형태의 정보를 의미합니다.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            제3조 (약관의 효력 및 변경)
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>이 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.</li>
            <li>
              서비스는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지를
              통해 효력이 발생합니다.
            </li>
            <li>
              이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있습니다.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            제4조 (서비스의 제공)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            서비스는 다음과 같은 서비스를 제공합니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>심리테스트 및 결과 공유 서비스 (Labs)</li>
            <li>이미지 비교 도구 서비스 (PixelDiff)</li>
            <li>기타 서비스가 개발하는 모든 부가 서비스</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            제5조 (서비스 이용)
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>
              서비스는 연중무휴, 1일 24시간 제공을 원칙으로 합니다. 다만, 시스템 정기점검,
              증설 및 교체, 기타 불가피한 사유로 서비스가 중단될 수 있습니다.
            </li>
            <li>
              서비스는 무료로 제공됩니다. 다만, 일부 프리미엄 기능은 별도의 비용이 발생할
              수 있습니다.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            제6조 (이용자의 의무)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            이용자는 다음 행위를 하여서는 안 됩니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>서비스의 운영을 방해하는 행위</li>
            <li>타인의 명예를 손상시키거나 불이익을 주는 행위</li>
            <li>해킹 또는 컴퓨터 바이러스 유포 행위</li>
            <li>서비스를 통해 얻은 정보를 서비스의 사전 승낙 없이 상업적으로 이용하는 행위</li>
            <li>법령 또는 이 약관에 위반되는 행위</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            제7조 (저작권 및 지적재산권)
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>서비스가 작성한 저작물에 대한 저작권은 서비스에 귀속됩니다.</li>
            <li>
              이용자는 서비스를 이용함으로써 얻은 정보를 서비스의 사전 승낙 없이 복제,
              출판, 방송 등 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게
              제공하여서는 안 됩니다.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            제8조 (면책조항)
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>
              서비스는 천재지변, 전쟁, 기간통신사업자의 서비스 중단 등 불가항력적인 사유로
              서비스를 제공할 수 없는 경우에는 책임이 면제됩니다.
            </li>
            <li>
              서비스는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지
              않습니다.
            </li>
            <li>
              서비스에서 제공하는 심리테스트 결과는 재미를 위한 것으로, 의학적 또는
              심리학적 진단을 대체하지 않습니다.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            제9조 (광고 게재)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            서비스는 서비스 운영과 관련하여 서비스 화면, 이메일 등에 광고를 게재할 수
            있습니다. 광고가 게재된 이메일을 수신한 이용자는 수신 거부를 할 수 있습니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            제10조 (분쟁해결)
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>
              서비스와 이용자 간에 발생한 분쟁에 관한 소송은 대한민국 법을 적용하며,
              서비스의 본사 소재지를 관할하는 법원을 관할법원으로 합니다.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">부칙</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            이 약관은 2024년 12월 8일부터 시행됩니다.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}
