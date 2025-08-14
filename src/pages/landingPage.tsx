import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  // Landing Page 제작
  return <div>Landing 페이지 입니다.</div>;
}
