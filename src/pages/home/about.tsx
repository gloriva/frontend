import { motion } from "framer-motion";
import { Heart, Users, Book, Globe, Award, Target } from "lucide-react";

const About = () => {
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

  const values = [
    {
      icon: Heart,
      title: "사랑",
      description: "하나님의 사랑을 받고 이웃을 사랑하는 교회",
      color: "bg-red-500",
    },
    {
      icon: Users,
      title: "교제",
      description: "세대를 아우르는 따뜻한 교제의 공동체",
      color: "bg-blue-500",
    },
    {
      icon: Book,
      title: "말씀",
      description: "성경 말씀을 기반으로 한 신앙 성장",
      color: "bg-green-500",
    },
    {
      icon: Globe,
      title: "선교",
      description: "지역사회와 세계를 향한 복음 전파",
      color: "bg-purple-500",
    },
  ];

  const history = [
    {
      year: "1985",
      title: "교회 설립",
      description: "김목사님의 인도로 은혜교회가 설립되었습니다.",
    },
    {
      year: "1995",
      title: "새 성전 건축",
      description: "현재의 성전을 건축하여 더 많은 성도들을 섬기게 되었습니다.",
    },
    {
      year: "2005",
      title: "교육관 완공",
      description: "교육관을 완공하여 다양한 교육 프로그램을 시작했습니다.",
    },
    {
      year: "2015",
      title: "창립 30주년",
      description: "창립 30주년을 맞아 지역사회 봉사 확대를 다짐했습니다.",
    },
    {
      year: "2020",
      title: "온라인 예배 시작",
      description: "코로나19 상황에 맞춰 온라인 예배 시스템을 구축했습니다.",
    },
    {
      year: "2025",
      title: "창립 40주년",
      description: "하나님의 은혜로 창립 40주년을 맞이하게 되었습니다.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/161060/architecture-building-church-161060.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              교회 소개
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              하나님의 은혜로 40년을 걸어온 은혜교회의 이야기를 소개합니다
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 교회 비전 */}
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
              우리의 비전
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              은혜교회는 하나님의 말씀을 기반으로 모든 세대가 함께 성장하며,
              지역사회와 세계를 향해 하나님의 사랑을 전하는 교회입니다.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                variants={fadeInUp}
              >
                <div
                  className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 담임목사 소개 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
                alt="담임목사"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                담임목사 소개
              </h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                김은혜 목사
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                총신대학교 신학과와 총신대학교 신학대학원을 졸업하고, 1985년부터
                은혜교회를 섬기고 있습니다.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                "모든 성도가 하나님의 은혜 안에서 성장하고, 이웃을 사랑하는
                교회가 되기를 소망합니다."
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-600 mr-3" />
                  <span>총신대학교 신학과 졸업</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-600 mr-3" />
                  <span>총신대학교 신학대학원 졸업</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-blue-600 mr-3" />
                  <span>은혜교회 담임목사 (1985~현재)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 교회 연혁 */}
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
              교회 연혁
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              하나님의 은혜로 걸어온 40년의 여정을 돌아봅니다
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* 타임라인 라인 */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>

            <div className="space-y-12">
              {history.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                  variants={fadeInUp}
                >
                  {/* 타임라인 점 */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                  >
                    <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              함께하는 은혜교회
            </h2>
            <p className="text-xl text-blue-100">
              숫자로 보는 우리 교회의 모습
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { number: "500+", label: "등록 성도" },
              { number: "40년", label: "교회 역사" },
              { number: "15개", label: "교육 부서" },
              { number: "50+", label: "봉사 사역" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
