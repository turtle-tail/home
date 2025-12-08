import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '개인정보처리방침 - turtle-tail',
  description: 'turtle-tail 서비스의 개인정보처리방침입니다.',
};

export default function PrivacyPage() {
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

        <h1 className="text-4xl font-bold text-gray-900 mb-8">개인정보처리방침</h1>

        <div className="text-sm text-gray-500 mb-8">최종 수정일: 2024년 12월 8일</div>

        <section className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            turtle-tail(이하 &quot;서비스&quot;)은 이용자의 개인정보를 중요시하며,
            &quot;정보통신망 이용촉진 및 정보보호&quot;에 관한 법률을 준수하고 있습니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            1. 수집하는 개인정보 항목
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            서비스는 원활한 서비스 제공을 위해 다음과 같은 정보를 수집합니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>
              <strong>자동 수집 정보</strong>: 접속 IP 주소, 브라우저 종류, 운영체제,
              접속 일시, 서비스 이용 기록
            </li>
            <li>
              <strong>분석 도구를 통한 정보</strong>: Google Analytics, Microsoft
              Clarity를 통한 사이트 이용 패턴
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            2. 개인정보의 수집 및 이용 목적
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            수집된 개인정보는 다음의 목적에 사용됩니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>서비스 이용에 따른 본인 식별 및 부정 이용 방지</li>
            <li>서비스 개선 및 신규 서비스 개발</li>
            <li>통계학적 분석을 통한 서비스 품질 향상</li>
            <li>맞춤형 서비스 및 광고 제공</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            3. 개인정보의 보유 및 이용 기간
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용 목적이 달성되면 지체
            없이 파기합니다. 단, 관련 법령에 의해 보존해야 하는 경우 해당 기간 동안
            보관합니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            4. 개인정보의 제3자 제공
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            서비스는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의
            경우에는 예외로 합니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라
            수사기관의 요구가 있는 경우</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. 쿠키의 운영</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            서비스는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 쿠키(cookie)를
            사용합니다. 쿠키는 웹사이트가 이용자의 컴퓨터 브라우저로 전송하는 소량의
            정보입니다. 이용자는 웹브라우저 옵션 설정을 통해 모든 쿠키를 허용, 동의 시
            쿠키 허용, 모든 쿠키 거부 등의 선택을 할 수 있습니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            6. 광고 및 분석 서비스
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            서비스는 다음과 같은 제3자 서비스를 이용하여 광고 및 분석을 수행합니다:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>
              <strong>Google Analytics</strong>: 웹사이트 트래픽 분석
            </li>
            <li>
              <strong>Google AdSense</strong>: 맞춤형 광고 제공
            </li>
            <li>
              <strong>Microsoft Clarity</strong>: 사용자 행동 분석 및 세션 리플레이
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            이러한 서비스들은 자체적인 개인정보처리방침을 가지고 있으며, 해당 서비스의
            정책에 따라 정보가 처리됩니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            7. 개인정보 보호책임자
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
            이용자의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를
            지정하고 있습니다.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            8. 개인정보처리방침 변경
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경 내용의
            추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여
            고지할 것입니다.
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
