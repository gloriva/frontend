import {
  Church,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className={`mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8`}>
        <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4`}>
          {/* 교회 정보 */}
          <div className={`col-span-1 lg:col-span-2`}>
            <div className="mb-4 flex items-center space-x-3">
              <div className="rounded-lg bg-blue-600 p-2">
                <Church className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">은혜교회</h3>
                <p className="text-sm text-gray-400">Grace Church</p>
              </div>
            </div>
            <p className="mb-4 leading-relaxed text-gray-300">
              하나님의 은혜와 사랑을 전하며, 지역사회와 함께 성장하는
              교회입니다. 모든 분들을 따뜻하게 환영합니다.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>서울특별시 강남구 테헤란로 123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span>info@gracechurch.co.kr</span>
              </div>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">빠른 링크</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about"
                  className={`text-gray-300 transition-colors hover:text-white`}
                >
                  교회소개
                </a>
              </li>
              <li>
                <a
                  href="/worship"
                  className={`text-gray-300 transition-colors hover:text-white`}
                >
                  예배안내
                </a>
              </li>
              <li>
                <a
                  href="/education"
                  className={`text-gray-300 transition-colors hover:text-white`}
                >
                  교육부서
                </a>
              </li>
              <li>
                <a
                  href="/announcements"
                  className={`text-gray-300 transition-colors hover:text-white`}
                >
                  공지사항
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className={`text-gray-300 transition-colors hover:text-white`}
                >
                  갤러리
                </a>
              </li>
              <li>
                <a
                  href="/location"
                  className={`text-gray-300 transition-colors hover:text-white`}
                >
                  오시는길
                </a>
              </li>
            </ul>
          </div>

          {/* SNS 및 연락처 */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">소셜 미디어</h4>
            <div className="mb-6 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-lg bg-gray-800 p-3 transition-colors hover:bg-blue-600`}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-lg bg-gray-800 p-3 transition-colors hover:bg-pink-600`}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-lg bg-gray-800 p-3 transition-colors hover:bg-red-600`}
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@gracechurch.co.kr"
                className={`rounded-lg bg-gray-800 p-3 transition-colors hover:bg-green-600`}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="text-sm text-gray-300">
              <p className="mb-1">주일예배: 오전 10:30</p>
              <p className="mb-1">수요예배: 오후 7:30</p>
              <p>새벽예배: 오전 6:00</p>
            </div>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div
            className={`flex flex-col items-center justify-between sm:flex-row`}
          >
            <div className={`mb-4 text-sm text-gray-400 sm:mb-0`}>
              <p>&copy; 2025 은혜교회. All rights reserved.</p>
            </div>
            <div className="text-sm text-gray-400">
              <p>
                Designed & Developed by{" "}
                <span className="font-medium text-blue-400">
                  Lumi Development Team
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
