import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Settings,
  Bell,
  Shield,
  Heart,
  Calendar,
  Edit,
  Save,
  X,
} from "lucide-react";
import toast from "react-hot-toast";

const MyPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "김은혜",
    email: "grace@example.com",
    phone: "010-1234-5678",
    department: "청년부",
    joinDate: "2020.03.15",
    address: "서울시 강남구",
    bio: "하나님의 은혜 안에서 성장하고 있습니다.",
  });

  const [editForm, setEditForm] = useState(userInfo);

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

  const handleEdit = () => {
    setIsEditing(true);
    setEditForm(userInfo);
  };

  const handleSave = () => {
    setUserInfo(editForm);
    setIsEditing(false);
    toast.success("정보가 업데이트되었습니다");
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditForm(userInfo);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };

  const activities = [
    {
      date: "2025.01.15",
      activity: "신년 감사예배 참석",
      type: "예배",
    },
    {
      date: "2025.01.10",
      activity: "청년부 모임 참석",
      type: "교제",
    },
    {
      date: "2025.01.05",
      activity: "봉사활동 참여",
      type: "봉사",
    },
    {
      date: "2024.12.25",
      activity: "성탄절 예배 참석",
      type: "예배",
    },
  ];

  const stats = [
    {
      label: "예배 참석",
      value: "48회",
      icon: Calendar,
      color: "bg-blue-500",
    },
    {
      label: "봉사 참여",
      value: "12회",
      icon: Heart,
      color: "bg-green-500",
    },
    {
      label: "교육 수료",
      value: "3과정",
      icon: Settings,
      color: "bg-purple-500",
    },
    {
      label: "가입 기간",
      value: "5년",
      icon: User,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-12 w-12 text-blue-600" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                마이페이지
              </h1>
              <p className="text-xl text-blue-100">
                {userInfo.name}님, 안녕하세요!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 사용자 정보 */}
            <motion.div
              className="lg:col-span-2"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    개인 정보
                  </h2>
                  {!isEditing ? (
                    <button
                      onClick={handleEdit}
                      className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      수정
                    </button>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSave}
                        className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        저장
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <X className="h-4 w-4 mr-2" />
                        취소
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "이름", key: "name", type: "text" },
                    { label: "이메일", key: "email", type: "email" },
                    { label: "전화번호", key: "phone", type: "tel" },
                    { label: "소속 부서", key: "department", type: "text" },
                    {
                      label: "가입일",
                      key: "joinDate",
                      type: "text",
                      readonly: true,
                    },
                    { label: "주소", key: "address", type: "text" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {field.label}
                      </label>
                      {isEditing && !field.readonly ? (
                        <input
                          type={field.type}
                          name={field.key}
                          value={editForm[field.key as keyof typeof editForm]}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-gray-900 py-2">
                          {userInfo[field.key as keyof typeof userInfo]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    자기소개
                  </label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={editForm.bio}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{userInfo.bio}</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* 사이드바 */}
            <motion.div
              className="space-y-8"
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              {/* 통계 */}
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  나의 활동
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div
                        className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2`}
                      >
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 설정 메뉴 */}
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-6">설정</h3>
                <div className="space-y-3">
                  {[
                    { icon: Bell, label: "알림 설정", color: "text-blue-600" },
                    {
                      icon: Shield,
                      label: "보안 설정",
                      color: "text-green-600",
                    },
                    {
                      icon: Settings,
                      label: "계정 설정",
                      color: "text-gray-600",
                    },
                  ].map((item, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <item.icon className={`h-5 w-5 ${item.color} mr-3`} />
                      <span className="text-gray-900">{item.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* 최근 활동 */}
          <motion.div
            className="mt-12 bg-white rounded-xl shadow-lg p-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">최근 활동</h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {activity.activity}
                      </h4>
                      <p className="text-sm text-gray-600">{activity.date}</p>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {activity.type}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MyPage;
