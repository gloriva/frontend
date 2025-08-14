import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronRight } from "lucide-react";
import { weeklyBulletinElements } from "@/features/bulletin/constants/weeklyBulletinElements";

export default function WeeklyBulletins() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Calendar className="h-5 w-5 text-green-600" />
        주보
      </h2>
      <Card>
        <CardContent className="p-0">
          {weeklyBulletinElements.map((bulletin, index) => (
            <div
              key={bulletin.id}
              className={`p-4 flex items-center justify-between hover:bg-gray-50 ${
                index !== weeklyBulletinElements.length - 1 ? "border-b" : ""
              }`}
            >
              <div>
                <h3 className="font-medium text-sm text-gray-800">
                  {bulletin.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{bulletin.date}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
