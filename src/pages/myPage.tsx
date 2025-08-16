import { useState } from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import toast from "react-hot-toast";
import { stagger } from "@/shared/constants/Stagger";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { RecentActivity, UserInfo, UserSideBar } from "@/features/user";

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
            <UserInfo
              isEditing={isEditing}
              handleCancel={handleCancel}
              handleEdit={handleEdit}
              handleInputChange={handleInputChange}
              handleSave={handleSave}
              editForm={editForm}
              userInfo={userInfo}
            />
            <UserSideBar />
          </div>
          <RecentActivity />
        </div>
      </section>
    </div>
  );
};

export default MyPage;
