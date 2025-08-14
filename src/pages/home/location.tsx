import { motion } from "framer-motion";
import {
  MapPin,
  Car,
  Train,
  Bus,
  Clock,
  Phone,
  Navigation,
} from "lucide-react";

const Location = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const transportOptions = [
    {
      icon: Train,
      title: "지하철",
      color: "bg-blue-500",
      routes: [
        {
          line: "2호선",
          station: "강남역",
          exit: "3번 출구",
          walkTime: "도보 5분",
          description: "3번 출구로 나와서 테헤란로 방향으로 직진",
        },
        {
          line: "9호선",
          station: "신논현역",
          exit: "1번 출구",
          walkTime: "도보 8분",
          description: "1번 출구로 나와서 강남대로를 따라 북쪽으로 이동",
        },
      ],
    },
    {
      icon: Bus,
      title: "버스",
      color: "bg-green-500",
      routes: [
        {
          line: "간선버스",
          station: "146, 401, 472번",
          exit: "강남역 정류장",
          walkTime: "도보 3분",
          description: "강남역 정류장에서 하차 후 테헤란로 방향",
        },
        {
          line: "지선버스",
          station: "3412, 6411번",
          exit: "테헤란로 정류장",
          walkTime: "도보 2분",
          description: "테헤란로 정류장에서 하차 후 바로 앞",
        },
      ],
    },
    {
      icon: Car,
      title: "자가용",
      color: "bg-purple-500",
      routes: [
        {
          line: "강남 방향",
          station: "강남대로 이용",
          exit: "테헤란로 진입",
          walkTime: "주차 후 도보 1분",
          description: "지하 주차장 이용 가능 (50대 주차 가능)",
        },
        {
          line: "서초 방향",
          station: "서초대로 이용",
          exit: "논현로 경유",
          walkTime: "주차 후 도보 1분",
          description: "주말에는 인근 공영주차장 이용 권장",
        },
      ],
    },
  ];

  const landmarks = [
    {
      name: "강남역",
      distance: "300m",
      direction: "남쪽",
      icon: Train,
    },
    {
      name: "코엑스몰",
      distance: "800m",
      direction: "동쪽",
      icon: MapPin,
    },
    {
      name: "강남구청",
      distance: "500m",
      direction: "북쪽",
      icon: MapPin,
    },
    {
      name: "선릉역",
      distance: "1.2km",
      direction: "동쪽",
      icon: Train,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/161060/architecture-building-church-161060.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              오시는 길
            </motion.h1>
            <motion.p
              className="text-xl text-emerald-100 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              은혜교회로 오시는 다양한 방법을 안내해드립니다
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 교회 주소 및 연락처 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              교회 위치
            </h2>
            <p className="text-lg text-gray-600">
              강남 중심가에 위치한 은혜교회입니다
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* 주소 및 연락처 정보 */}
            <motion.div className="space-y-8" variants={fadeInUp}>
              <div className="bg-emerald-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="h-8 w-8 text-emerald-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    교회 주소
                  </h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <span className="font-semibold">주소:</span>
                    서울특별시 강남구 테헤란로 123
                  </p>
                  <p className="text-lg">
                    <span className="font-semibold">우편번호:</span>
                    06234
                  </p>
                  <div className="flex items-center pt-4">
                    <Phone className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-lg font-semibold">02-1234-5678</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    예배 시간
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-medium">주일 대예배</span>
                    <span>오전 10:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">주일 오후예배</span>
                    <span>오후 2:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">수요 예배</span>
                    <span>오후 7:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">새벽 예배</span>
                    <span>오전 6:00</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 지도 영역 */}
            <motion.div
              className="bg-gray-200 rounded-xl h-96 flex items-center justify-center"
              variants={fadeInUp}
            >
              <div className="text-center text-gray-600">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">지도가 여기에 표시됩니다</p>
                <p className="text-sm mt-2">
                  실제 구현 시 Google Maps 또는 네이버 지도 API 연동
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 교통편 안내 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              교통편 안내
            </h2>
            <p className="text-lg text-gray-600">
              다양한 교통수단을 이용하여 편리하게 오실 수 있습니다
            </p>
          </motion.div>

          <motion.div
            className="space-y-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {transportOptions.map((transport, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                variants={fadeInUp}
              >
                <div className={`${transport.color} p-6 text-white`}>
                  <div className="flex items-center">
                    <transport.icon className="h-8 w-8 mr-4" />
                    <h3 className="text-2xl font-bold">{transport.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {transport.routes.map((route, routeIndex) => (
                      <div
                        key={routeIndex}
                        className="border border-gray-200 rounded-lg p-6"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-gray-900">
                            {route.line}
                          </h4>
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                            {route.walkTime}
                          </span>
                        </div>
                        <div className="space-y-2 text-gray-600">
                          <p>
                            <span className="font-medium">정류장/역:</span>{" "}
                            {route.station}
                          </p>
                          <p>
                            <span className="font-medium">출구:</span>{" "}
                            {route.exit}
                          </p>
                          <p className="text-sm">{route.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 주변 랜드마크 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              주변 랜드마크
            </h2>
            <p className="text-lg text-gray-600">
              교회 주변의 주요 시설들을 참고하세요
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {landmarks.map((landmark, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl"
                variants={fadeInUp}
              >
                <landmark.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {landmark.name}
                </h3>
                <p className="text-emerald-600 font-medium mb-1">
                  {landmark.distance}
                </p>
                <p className="text-gray-600 text-sm">
                  {landmark.direction} 방향
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 주차 안내 */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">주차 안내</h2>
            <p className="text-xl text-emerald-100 mb-8">
              편리한 주차 시설을 제공합니다
            </p>
            <div className="bg-white/10 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <Car className="h-6 w-6 mr-3" />
                    교회 주차장
                  </h3>
                  <ul className="space-y-2 text-emerald-100">
                    <li>• 지하 1층 주차장 (50대 주차 가능)</li>
                    <li>• 주일 예배 시간 무료 이용</li>
                    <li>• 장애인 전용 주차구역 3면</li>
                    <li>• 엘리베이터 직접 연결</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <Navigation className="h-6 w-6 mr-3" />
                    인근 주차장
                  </h3>
                  <ul className="space-y-2 text-emerald-100">
                    <li>• 강남역 공영주차장 (도보 5분)</li>
                    <li>• 테헤란로 공영주차장 (도보 3분)</li>
                    <li>• 주말 성당 주차장 이용 가능</li>
                    <li>• 유료 주차장 할인 제공</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-emerald-100 mt-6">
              주차 관련 문의: 02-1234-5678 (총무부)
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Location;
