import HomePage from "./Pages/HomePage";
import PopularPage from "./Pages/PopularPage";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import AuthenticationPage from "./Pages/AuthenticationPage";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

function App() {
  return (
    // <div className="overflow-y-hidden w-screen h-screen">
    //   <AuthenticationPage />
    // </div>
    <div className="bg-black w-screen h-screen flex justify-between overflow-x-hidden ">
      <div className="flex justify-between gap-x-9 p-5">
        <SideBar />
        <div className="w-[1px] h-screen bg-slate-800"></div>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between ">
          <div className="flex justify-between items-center gap-x-4 ">
            <div className="flex">
              <MdOutlineKeyboardArrowLeft className="text-gray-300 text-2xl" />
              <MdOutlineKeyboardArrowRight className="text-gray-300 text-2xl" />
            </div>
            <SearchBar />
          </div>
          <div className="  border border-white  rounded-full bg-black  w-12 h-12"></div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden  ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/popular" element={<PopularPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
