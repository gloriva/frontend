import { motion } from "framer-motion";
import {
  Clock,
  Calendar,
  Users,
  Music,
  Book,
  Heart,
  MapPin,
  Phone,
} from "lucide-react";

const Worship = () => {
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

  const worshipServices = [
    {
      title: "주일 대예배",
      time: "오전 10:30",
      location: "본당",
      description: "모든 성도가 함께 드리는 주일 대예배입니다.",
      icon: Users,
      color: "bg-blue-500",
      details: [
        "찬양과 경배",
        "말씀 선포",
        "성찬식 (매월 첫째 주)",
        "축복기도",
      ],
    },
    {
      title: "주일 오후예배",
      time: "오후 2:00",
      location: "본당",
      description: "깊은 묵상과 기도의 시간입니다.",
      icon: Heart,
      color: "bg-purple-500",
      details: ["찬양과 기도", "말씀 묵상", "간증 나눔", "축복기도"],
    },
    {
      title: "수요 예배",
      time: "오후 7:30",
      location: "본당",
      description: "주중 은혜 충전의 시간입니다.",
      icon: Book,
      color: "bg-green-500",
      details: ["찬양과 기도", "성경공부", "말씀 나눔", "기도회"],
    },
    {
      title: "새벽 예배",
      time: "오전 6:00",
      location: "본당",
      description: "하루를 하나님께 맡기는 시간입니다.",
      icon: Clock,
      color: "bg-orange-500",
      details: ["찬양", "말씀 묵상", "개인 기도", "축복기도"],
    },
    {
      title: "금요 철야예배",
      time: "오후 10:00",
      location: "본당",
      description: "매월 마지막 금요일 철야예배입니다.",
      icon: Calendar,
      color: "bg-red-500",
      details: ["찬양과 경배", "말씀 선포", "통성기도", "새벽 성찬식"],
    },
    {
      title: "특별 예배",
      time: "시기별 안내",
      location: "본당",
      description: "절기별 특별 예배를 드립니다.",
      icon: Music,
      color: "bg-indigo-500",
      details: [
        "부활절 예배",
        "추수감사절 예배",
        "성탄절 예배",
        "신년 감사예배",
      ],
    },
  ];

  const worshipOrder = [
    { time: "10:20", activity: "묵상과 기도" },
    { time: "10:30", activity: "예배 시작 / 찬양" },
    { time: "10:35", activity: "기도 (대표기도)" },
    { time: "10:40", activity: "찬양 (성가대)" },
    { time: "10:45", activity: "성경봉독" },
    { time: "10:50", activity: "말씀 선포" },
    { time: "11:20", activity: "찬양 / 헌금" },
    { time: "11:25", activity: "광고 및 축복기도" },
    { time: "11:30", activity: "축도" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8468/candles-church-light-lighting.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              예배 안내
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              하나님께 예배드리는 시간에 함께하세요
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 예배 시간 안내 */}
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
              예배 시간표
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              다양한 예배를 통해 하나님과 만나는 시간을 가져보세요
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {worshipServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                variants={fadeInUp}
              >
                <div
                  className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <div className="flex items-center text-blue-600 font-semibold mb-2">
                  <Clock className="h-5 w-5 mr-2" />
                  {service.time}
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  {service.location}
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 주일 대예배 순서 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              주일 대예배 순서
            </h2>
            <p className="text-lg text-gray-600">
              주일 오전 10:30 예배 순서입니다
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="space-y-4">
              {worshipOrder.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                      {item.time}
                    </div>
                    <span className="text-gray-900 font-medium">
                      {item.activity}
                    </span>
                  </div>
                  <div className="w-4 h-4 bg-blue-200 rounded-full"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 예배 안내사항 */}
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
              예배 안내사항
            </h2>
            <p className="text-lg text-gray-600">
              더 나은 예배를 위한 안내사항입니다
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              className="bg-blue-50 rounded-xl p-8"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                예배 참석 안내
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                  예배 10분 전까지 입장해주세요
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                  휴대폰은 무음 또는 진동으로 설정해주세요
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                  어린이들을 위한 유아부실이 준비되어 있습니다
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                  처음 오신 분들은 안내데스크에서 도움을 받으세요
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-green-50 rounded-xl p-8"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                시설 안내
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  주차장은 교회 지하 1층에 있습니다
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  엘리베이터를 이용하실 수 있습니다
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  휠체어 이용자를 위한 시설이 준비되어 있습니다
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  수유실과 기저귀 교환대가 있습니다
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 연락처 및 문의 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              예배 관련 문의
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              예배에 대한 궁금한 사항이 있으시면 언제든 연락주세요
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-3" />
                <span className="text-lg">02-1234-5678</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-3" />
                <span className="text-lg">평일 9:00-18:00</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Worship;
