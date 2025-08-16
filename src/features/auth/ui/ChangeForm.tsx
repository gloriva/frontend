interface ChangeFormType {
  handleAuthState: () => void;
  isSignup: boolean;
}

export default function ChangeForm({
  handleAuthState,
  isSignup,
}: ChangeFormType) {
  return (
    <div className="text-center">
      <button
        onClick={() => handleAuthState()}
        className="text-sm text-blue-600 hover:text-blue-500"
      >
        {isSignup
          ? "이미 계정이 있으신가요? 로그인"
          : "계정이 없으신가요? 회원가입"}
      </button>
    </div>
  );
}
