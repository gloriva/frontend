import type { UserInfoType } from "@/entities/user/UserInfo";
import { fadeInUp } from "@/shared/constants/FadeInUp";
import { motion } from "framer-motion";
import { Edit, Save, X } from "lucide-react";

export default function UserInfo({
  isEditing,
  handleCancel,
  handleEdit,
  handleInputChange,
  handleSave,
  editForm,
  userInfo,
}: UserInfoType) {
  return (
    // 여러 기능이 섞여있는 컴포넌트라 토론이 필요할 것으로 보임
    <motion.div
      className="lg:col-span-2"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">개인 정보</h2>
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
  );
}
