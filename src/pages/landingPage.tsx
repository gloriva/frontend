import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SimpleTest from "../features/test/ui/SimpleTest";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // 3초 후에 홈으로 이동 (테스트 결과를 확인할 시간)
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  // Landing Page 제작
  return (
    <div>
      <div>Landing 페이지 입니다.</div>
      <SimpleTest />
    </div>
  );
}
