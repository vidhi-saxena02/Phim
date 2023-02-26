import React from "react";
import { CiMail } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";

const LoginForm = () => {
  return (
    <div className=" flex flex-col ml-8 justify-between gap-y-7 ">
      <div className="text-gray-300 font-serif">
        Login to access your account
      </div>
      <form className="flex flex-col justify-between gap-y-3">
        <div className="relative flex items-center">
          <input
            placeholder="Email"
            className="bg-gray-800 text-gray-500 px-4 text-l font-mono font-bold rounded w-72 h-12 "
          />
          <CiMail className="text-2xl absolute left-3/4 transform -translate-x-1/2" />
        </div>
        <div className="relative flex items-center">
          <input
            placeholder="Password"
            className="bg-gray-800 text-gray-500 px-4 text-l font-mono font-bold rounded w-72 h-12 "
          />
          <AiOutlineLock className="text-2xl absolute left-3/4 transform -translate-x-1/2" />
        </div>

        <button className=" bg-red-800 text-xl font-sans font-bold text-white rounded-md w-40 h-10">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
