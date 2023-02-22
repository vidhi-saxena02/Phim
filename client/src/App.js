import HomePage from "./Pages/HomePage";
import PopularPage from "./Pages/PopularPage";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

function App() {
  return (
    <div className=" bg-black w-screen h-screen flex justify-between ">
      <div className="flex justify-between ml-7 gap-x-9">
        <SideBar />
        <div className="w-[1px] h-screen bg-slate-800"></div>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between mt-4">
          <div className="flex justify-between items-center gap-x-4 ml-4 mb-2">
            <div className="flex">
              <MdOutlineKeyboardArrowLeft className="text-gray-300 text-2xl" />
              <MdOutlineKeyboardArrowRight className="text-gray-300 text-2xl" />
            </div>
            <SearchBar />
          </div>
          <div className="  border border-white mr-10 rounded-full bg-black  w-12 h-12"></div>
        </div>
        <div className="w-screen screen overflow-y-auto  ">
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
