import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-4">turtle-tail</h3>
            <p className="text-gray-600 mb-4 max-w-md">
              다양한 웹 기반 사이드 프로젝트를 개발하고 공유하는 공간입니다.
              유용하고 재미있는 서비스를 무료로 제공합니다.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              바로가기
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects/labs" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Labs
                </Link>
              </li>
              <li>
                <Link href="/projects/pixel-diff" className="text-gray-600 hover:text-gray-900 transition-colors">
                  PixelDiff
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} turtle-tail. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
