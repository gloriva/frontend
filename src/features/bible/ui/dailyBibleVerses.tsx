import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { bibleVersesElements } from "@/features/bible/constants/bibleVersesElements";

export default function DailyBibleVerses() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-blue-600" />
        말씀 묵상
      </h2>
      <div className="space-y-4">
        {bibleVersesElements.map((item, index) => (
          <Card key={index} className="border-l-4 border-l-blue-600">
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2 text-xs">
                {item.verse}
              </Badge>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
