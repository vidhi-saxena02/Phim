import login from "../assets/login.jpg";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";

const LoginPage = () => {
  const [loginState, setLoginState] = useState(true);
  const [signUpState, setSignUpState] = useState(false);
  const LoginClick = () => {
    setLoginState(true);
    setSignUpState(false);
  };
  const onSignUpClick = () => {
    setSignUpState(true);
    setLoginState(false);
  };

  return (
    <div className="relative">
      <img src={login} alt="login" />
      <div className="absolute top-1/2 left-1/2 items-start transform -translate-x-1/2 -translate-y-1/2 border rounded-md w-96 h-96  bg-[#121212] bg-opacity-95">
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-6 m-8">
            <div
              className={`text-3xl font-sans font-bold cursor-pointer ${
                loginState ? "text-white" : "text-gray-600"
              }`}
              onClick={LoginClick}
            >
              Login
            </div>
            <div className="w-0.5 h-10 border bg-black"></div>
            <div
              className={`text-3xl font-sans font-bold cursor-pointer ${
                signUpState ? "text-white" : "text-gray-600"
              }`}
              onClick={onSignUpClick}
            >
              SignUp
            </div>
          </div>
          {loginState ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
