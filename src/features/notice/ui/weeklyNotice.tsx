import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, ChevronRight } from "lucide-react";
import { weeklyNoticeElements } from "@/features/notice/constants/weeklyNoticeElements";

export default function WeeklyNotice() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Bell className="h-5 w-5 text-orange-600" />
        공지사항
      </h2>
      <Card>
        <CardContent className="p-0">
          {weeklyNoticeElements.map((notice, index) => (
            <div
              key={notice.id}
              className={`p-4 flex items-center justify-between hover:bg-gray-50 ${
                index !== weeklyNoticeElements.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-sm text-gray-800">
                    {notice.title}
                  </h3>
                  {notice.isNew && (
                    <Badge
                      variant="destructive"
                      className="text-xs px-1.5 py-0.5"
                    >
                      NEW
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">{notice.date}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
