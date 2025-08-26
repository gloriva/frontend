import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Edit,
  Trash2,
  Clock,
  MapPin,
  User,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import { Button } from "@/shared/ui/Button";
import Modal from "@/shared/ui/Modal";
import toast from "react-hot-toast";

interface WorshipSchedule {
  _id: string;
  title: string;
  dayOfWeek: string;
  time: string;
  location: string;
  description?: string;
  pastor?: string;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

const worshipSchedules: WorshipSchedule[] = [
  {
    _id: "1",
    title: "주일 예배",
    dayOfWeek: "Sunday",
    time: "10:00 AM",
    location: "본당",
    description: "주일 오전에 드리는 정기 예배입니다.",
    pastor: "박목사",
    isActive: true,
    order: 1,
    createdAt: "2025-08-01T09:00:00Z",
    updatedAt: "2025-08-05T09:30:00Z",
  },
  {
    _id: "2",
    title: "수요 예배",
    dayOfWeek: "Wednesday",
    time: "7:00 PM",
    location: "본당",
    isActive: true,
    order: 2,
    createdAt: "2025-08-02T10:00:00Z",
    updatedAt: "2025-08-05T10:30:00Z",
  },
  {
    _id: "3",
    title: "새벽기도",
    dayOfWeek: "Monday",
    time: "5:00 AM",
    location: "소예배실",
    isActive: true,
    order: 3,
    createdAt: "2025-08-03T05:00:00Z",
    updatedAt: "2025-08-06T05:10:00Z",
  },
  {
    _id: "4",
    title: "금요 찬양 예배",
    dayOfWeek: "Friday",
    time: "8:00 PM",
    location: "본당",
    description: "금요일 저녁에 드리는 찬양과 말씀의 시간.",
    pastor: "김목사",
    isActive: true,
    order: 4,
    createdAt: "2025-08-04T08:00:00Z",
    updatedAt: "2025-08-07T08:30:00Z",
  },
  {
    _id: "5",
    title: "청년 예배",
    dayOfWeek: "Saturday",
    time: "6:00 PM",
    location: "청년부실",
    isActive: true,
    order: 5,
    createdAt: "2025-08-05T06:00:00Z",
    updatedAt: "2025-08-08T06:20:00Z",
  },
];

export const WorshipManager: React.FC = () => {
  const [schedules, setSchedules] = useState<WorshipSchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] =
    useState<WorshipSchedule | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    dayOfWeek: "sunday",
    time: "",
    location: "",
    description: "",
    pastor: "",
    isActive: true,
    order: 1,
  });

  const dayOptions = [
    { value: "sunday", label: "주일" },
    { value: "monday", label: "월요일" },
    { value: "tuesday", label: "화요일" },
    { value: "wednesday", label: "수요일" },
    { value: "thursday", label: "목요일" },
    { value: "friday", label: "금요일" },
    { value: "saturday", label: "토요일" },
  ];

  const fetchSchedules = async () => {
    try {
      setLoading(true);
      // const { list } = await lumi.entities.worship_schedules.list();
      setSchedules((worshipSchedules || []).sort((a, b) => a.order - b.order));
    } catch (error) {
      console.error("Failed to fetch schedules:", error);
      toast.error("예배 일정을 불러오는데 실패했습니다");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  const handleCreate = () => {
    setEditingSchedule(null);
    setFormData({
      title: "",
      dayOfWeek: "sunday",
      time: "",
      location: "",
      description: "",
      pastor: "",
      isActive: true,
      order: schedules.length + 1,
    });
    setIsModalOpen(true);
  };

  const handleEdit = (schedule: WorshipSchedule) => {
    setEditingSchedule(schedule);
    setFormData({
      title: schedule.title,
      dayOfWeek: schedule.dayOfWeek,
      time: schedule.time,
      location: schedule.location,
      description: schedule.description || "",
      pastor: schedule.pastor || "",
      isActive: schedule.isActive,
      order: schedule.order,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // const scheduleData = {
      //   ...formData,
      //   ...(editingSchedule ? {} : { createdAt: new Date().toISOString() }),
      //   updatedAt: new Date().toISOString(),
      // };

      if (editingSchedule) {
        // await lumi.entities.worship_schedules.update(
        //   editingSchedule._id,
        //   scheduleData,
        // );
        toast.success("예배 일정이 수정되었습니다");
      } else {
        // await lumi.entities.worship_schedules.create(scheduleData);
        toast.success("예배 일정이 생성되었습니다");
      }

      setIsModalOpen(false);
      fetchSchedules();
    } catch (error) {
      console.error("Failed to save schedule:", error);
      toast.error("예배 일정 저장에 실패했습니다");
    }
  };

  const handleDelete = async (_id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      // await lumi.entities.worship_schedules.delete(id);
      toast.success("예배 일정이 삭제되었습니다");
      fetchSchedules();
    } catch (error) {
      console.error("Failed to delete schedule:", error);
      toast.error("예배 일정 삭제에 실패했습니다");
    }
  };

  const toggleActive = async (schedule: WorshipSchedule) => {
    try {
      // await lumi.entities.worship_schedules.update(schedule._id, {
      //   isActive: !schedule.isActive,
      //   updatedAt: new Date().toISOString(),
      // });
      toast.success(
        `예배 일정이 ${!schedule.isActive ? "활성화" : "비활성화"}되었습니다`,
      );
      fetchSchedules();
    } catch (error) {
      console.error("Failed to toggle schedule:", error);
      toast.error("상태 변경에 실패했습니다");
    }
  };

  const getDayLabel = (dayOfWeek: string) => {
    const day = dayOptions.find((d) => d.value === dayOfWeek);
    return day ? day.label : dayOfWeek;
  };

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <div className="animate-pulse">
          <div className="mb-6 h-8 rounded bg-gray-200"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 rounded bg-gray-200"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white shadow-sm">
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">예배 일정 관리</h2>
          <Button onClick={handleCreate} icon={Plus}>
            새 예배 일정 추가
          </Button>
        </div>
      </div>

      <div className="p-6">
        {schedules.length === 0 ? (
          <div className="py-12 text-center">
            <Clock className="mx-auto mb-4 h-12 w-12 text-gray-300" />
            <p className="text-gray-500">등록된 예배 일정이 없습니다</p>
            {/* <Button onClick={handleCreate} className="mt-4">
              첫 예배 일정 추가하기
            </Button> */}
          </div>
        ) : (
          <div className="space-y-4">
            {schedules.map((schedule) => (
              <motion.div
                key={schedule._id}
                className={`rounded-lg border p-4 transition-all ${
                  schedule.isActive
                    ? `border-gray-200 hover:shadow-md`
                    : "border-gray-100 bg-gray-50"
                } `}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center space-x-3">
                      <h3
                        className={`text-lg font-semibold ${
                          schedule.isActive ? "text-gray-900" : "text-gray-500"
                        } `}
                      >
                        {schedule.title}
                      </h3>
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${
                          schedule.isActive
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-600"
                        } `}
                      >
                        {schedule.isActive ? "활성" : "비활성"}
                      </span>
                    </div>
                    <div
                      className={`grid grid-cols-1 gap-4 text-sm text-gray-600 md:grid-cols-3`}
                    >
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {getDayLabel(schedule.dayOfWeek)} {schedule.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        {schedule.location}
                      </div>
                      {schedule.pastor && (
                        <div className="flex items-center">
                          <User className="mr-2 h-4 w-4" />
                          {schedule.pastor}
                        </div>
                      )}
                    </div>
                    {schedule.description && (
                      <p className="mt-2 text-sm text-gray-600">
                        {schedule.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleActive(schedule)}
                      className={`p-2 transition-colors ${
                        schedule.isActive
                          ? `text-green-600 hover:text-green-700`
                          : `text-gray-400 hover:text-gray-600`
                      } `}
                      title={schedule.isActive ? "비활성화" : "활성화"}
                    >
                      {schedule.isActive ? (
                        <ToggleRight className="h-5 w-5" />
                      ) : (
                        <ToggleLeft className="h-5 w-5" />
                      )}
                    </button>
                    <button
                      onClick={() => handleEdit(schedule)}
                      className={`p-2 text-gray-400 transition-colors hover:text-blue-600`}
                      title="수정"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(schedule._id)}
                      className={`p-2 text-gray-400 transition-colors hover:text-red-600`}
                      title="삭제"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* 예배 일정 작성/수정 모달 */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingSchedule ? "예배 일정 수정" : "새 예배 일정 추가"}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className={`grid grid-cols-1 gap-4 md:grid-cols-2`}>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                예배명 *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500`}
                placeholder="예: 주일 대예배"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                요일 *
              </label>
              <select
                value={formData.dayOfWeek}
                onChange={(e) =>
                  setFormData({ ...formData, dayOfWeek: e.target.value })
                }
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500`}
                required
              >
                {dayOptions.map((day) => (
                  <option key={day.value} value={day.value}>
                    {day.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={`grid grid-cols-1 gap-4 md:grid-cols-2`}>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                시간 *
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500`}
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                장소 *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500`}
                placeholder="예: 본당"
                required
              />
            </div>
          </div>

          <div className={`grid grid-cols-1 gap-4 md:grid-cols-2`}>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                담당 목사
              </label>
              <input
                type="text"
                value={formData.pastor}
                onChange={(e) =>
                  setFormData({ ...formData, pastor: e.target.value })
                }
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500`}
                placeholder="예: 김은혜 목사"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                정렬 순서
              </label>
              <input
                type="number"
                value={formData.order}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    order: parseInt(e.target.value) || 1,
                  })
                }
                className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500`}
                min="1"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              설명
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
              className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500`}
              placeholder="예배에 대한 간단한 설명을 입력하세요"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isActive"
              checked={formData.isActive}
              onChange={(e) =>
                setFormData({ ...formData, isActive: e.target.checked })
              }
              className={`h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500`}
            />
            <label htmlFor="isActive" className="ml-2 text-sm text-gray-700">
              활성 상태 (체크 해제 시 홈페이지에 표시되지 않습니다)
            </label>
          </div>

          <div className="flex justify-end space-x-3 border-t border-gray-200 pt-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setIsModalOpen(false)}
            >
              취소
            </Button>
            <Button type="submit">{editingSchedule ? "수정" : "저장"}</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default WorshipManager;
