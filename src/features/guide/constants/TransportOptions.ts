import { Train, Bus, Car } from "lucide-react";

export const transportOptions = [
  {
    icon: Train,
    title: "지하철",
    color: "bg-blue-500",
    routes: [
      {
        line: "2호선",
        station: "강남역",
        exit: "3번 출구",
        walkTime: "도보 5분",
        description: "3번 출구로 나와서 테헤란로 방향으로 직진",
      },
      {
        line: "9호선",
        station: "신논현역",
        exit: "1번 출구",
        walkTime: "도보 8분",
        description: "1번 출구로 나와서 강남대로를 따라 북쪽으로 이동",
      },
    ],
  },
  {
    icon: Bus,
    title: "버스",
    color: "bg-green-500",
    routes: [
      {
        line: "간선버스",
        station: "146, 401, 472번",
        exit: "강남역 정류장",
        walkTime: "도보 3분",
        description: "강남역 정류장에서 하차 후 테헤란로 방향",
      },
      {
        line: "지선버스",
        station: "3412, 6411번",
        exit: "테헤란로 정류장",
        walkTime: "도보 2분",
        description: "테헤란로 정류장에서 하차 후 바로 앞",
      },
    ],
  },
  {
    icon: Car,
    title: "자가용",
    color: "bg-purple-500",
    routes: [
      {
        line: "강남 방향",
        station: "강남대로 이용",
        exit: "테헤란로 진입",
        walkTime: "주차 후 도보 1분",
        description: "지하 주차장 이용 가능 (50대 주차 가능)",
      },
      {
        line: "서초 방향",
        station: "서초대로 이용",
        exit: "논현로 경유",
        walkTime: "주차 후 도보 1분",
        description: "주말에는 인근 공영주차장 이용 권장",
      },
    ],
  },
];
