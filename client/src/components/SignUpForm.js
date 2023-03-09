import React from "react";
import { CiMail } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && password) {
      const res = await axios.post("http://localhost:4000/api/v1/signup", {
        name,
        email,
        password,
      });
      setName("");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className=" flex flex-col ml-8 justify-between gap-y-7 ">
      <div className="text-gray-300 font-serif">
        New User? Sign Up to create your account
      </div>
      <form
        className="flex flex-col justify-between gap-y-3"
        onSubmit={handleSubmit}
      >
        <div className="relative flex items-center">
          <input
            onChange={handleNameChange}
            value={name}
            placeholder="Name"
            className="bg-gray-800 text-gray-500 px-4 text-l font-mono font-bold rounded w-72 h-12 "
          />
          <MdDriveFileRenameOutline className="text-2xl absolute left-3/4 transform -translate-x-1/2" />
        </div>

        <div className="relative flex items-center">
          <input
            onChange={handleEmailChange}
            value={email}
            placeholder="Email"
            className="bg-gray-800 text-gray-500 px-4 text-l font-mono font-bold rounded w-72 h-12 "
          />
          <CiMail className="text-2xl absolute left-3/4 transform -translate-x-1/2" />
        </div>
        <div className="relative flex items-center">
          <input
            onChange={handlePasswordChange}
            value={password}
            placeholder="Password"
            className="bg-gray-800 text-gray-500 px-4 text-l font-mono font-bold rounded w-72 h-12 "
          />
          <AiOutlineLock className="text-2xl absolute left-3/4 transform -translate-x-1/2" />
        </div>

        <button className=" bg-red-800 text-xl font-sans font-bold text-white rounded-md w-40 h-10">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
