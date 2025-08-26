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
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white">
        <div
          className={`absolute inset-0 bg-[url('https://images.pexels.com/photos/8468/candles-church-light-lighting.jpg')] bg-cover bg-center opacity-20`}
        ></div>
        <div
          className={`relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8`}
        >
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.h1
              className={`mb-6 text-4xl font-bold lg:text-5xl`}
              variants={fadeInUp}
            >
              예배 안내
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-xl text-blue-100"
              variants={fadeInUp}
            >
              하나님께 예배드리는 시간에 함께하세요
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 예배 시간 안내 */}
      <section className="bg-white py-16">
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
          <motion.div
            className="mb-16 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`mb-6 text-3xl font-bold text-gray-900 lg:text-4xl`}>
              예배 시간표
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              다양한 예배를 통해 하나님과 만나는 시간을 가져보세요
            </p>
          </motion.div>

          <motion.div
            className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3`}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {worshipServices.map((service, index) => (
              <motion.div
                key={index}
                className={`rounded-xl bg-gray-50 p-8 transition-shadow hover:shadow-lg`}
                variants={fadeInUp}
              >
                <div
                  className={` ${service.color} mb-6 flex h-16 w-16 items-center justify-center rounded-full`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <div className="mb-2 flex items-center font-semibold text-blue-600">
                  <Clock className="mr-2 h-5 w-5" />
                  {service.time}
                </div>
                <div className="mb-4 flex items-center text-gray-600">
                  <MapPin className="mr-2 h-4 w-4" />
                  {service.location}
                </div>
                <p className="mb-6 text-gray-600">{service.description}</p>
                <div className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
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
      <section className="bg-gray-50 py-16">
        <div className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8`}>
          <motion.div
            className="mb-16 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`mb-6 text-3xl font-bold text-gray-900 lg:text-4xl`}>
              주일 대예배 순서
            </h2>
            <p className="text-lg text-gray-600">
              주일 오전 10:30 예배 순서입니다
            </p>
          </motion.div>

          <motion.div
            className="rounded-xl bg-white p-8 shadow-lg"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="space-y-4">
              {worshipOrder.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between border-b border-gray-100 py-4 last:border-b-0`}
                >
                  <div className="flex items-center">
                    <div
                      className={`mr-4 rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600`}
                    >
                      {item.time}
                    </div>
                    <span className="font-medium text-gray-900">
                      {item.activity}
                    </span>
                  </div>
                  <div className="h-4 w-4 rounded-full bg-blue-200"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 예배 안내사항 */}
      <section className="bg-white py-16">
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
          <motion.div
            className="mb-16 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`mb-6 text-3xl font-bold text-gray-900 lg:text-4xl`}>
              예배 안내사항
            </h2>
            <p className="text-lg text-gray-600">
              더 나은 예배를 위한 안내사항입니다
            </p>
          </motion.div>

          <motion.div
            className={`grid grid-cols-1 gap-8 md:grid-cols-2`}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              className="rounded-xl bg-blue-50 p-8"
              variants={fadeInUp}
            >
              <h3 className="mb-6 text-xl font-bold text-gray-900">
                예배 참석 안내
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                  예배 10분 전까지 입장해주세요
                </li>
                <li className="flex items-start">
                  <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                  휴대폰은 무음 또는 진동으로 설정해주세요
                </li>
                <li className="flex items-start">
                  <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                  어린이들을 위한 유아부실이 준비되어 있습니다
                </li>
                <li className="flex items-start">
                  <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                  처음 오신 분들은 안내데스크에서 도움을 받으세요
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="rounded-xl bg-green-50 p-8"
              variants={fadeInUp}
            >
              <h3 className="mb-6 text-xl font-bold text-gray-900">
                시설 안내
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                  주차장은 교회 지하 1층에 있습니다
                </li>
                <li className="flex items-start">
                  <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                  엘리베이터를 이용하실 수 있습니다
                </li>
                <li className="flex items-start">
                  <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                  휠체어 이용자를 위한 시설이 준비되어 있습니다
                </li>
                <li className="flex items-start">
                  <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                  수유실과 기저귀 교환대가 있습니다
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 연락처 및 문의 */}
      <section className="bg-blue-600 py-16 text-white">
        <div className={`mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8`}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`mb-6 text-3xl font-bold lg:text-4xl`}>
              예배 관련 문의
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              예배에 대한 궁금한 사항이 있으시면 언제든 연락주세요
            </p>
            <div
              className={`flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8`}
            >
              <div className="flex items-center">
                <Phone className="mr-3 h-6 w-6" />
                <span className="text-lg">02-1234-5678</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-3 h-6 w-6" />
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
