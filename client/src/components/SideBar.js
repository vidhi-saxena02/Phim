import { FiHeart } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

function SideBar() {
  return (
    <div className=" absolute top-8 left-10 flex flex-col gap-16">
      <div className="text-white font-bold text-3xl font-sans md:font-serif">
        Phi<span className="text-red-800">m</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-gray-400 font-mono text-x ">Daily Feed</div>

        <div className="flex flex-row items-center ">
          <FiHeart className="text-gray-400 font-mono text-xl" />
          <div className="text-gray-400 font-mono text-xl ml-2">WishList</div>
        </div>

        <div className="flex flex-row items-center  ">
          <MdOutlineWatchLater className="text-gray-400 font-mono text-xl" />
          <div className="text-gray-400 font-mono text-xl ml-2">
            Watch Later
          </div>
        </div>

        <div className="flex flex-row items-center  ">
          <FiCalendar className="text-gray-400 font-mono text-xl" />
          <div className="text-gray-400 font-mono text-xl ml-2">
            Coming Soon
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-50 border-0 dark:bg-gray-800" />
      <div className="flex flex-col gap-3">
        <div className="text-gray-400 font-mono text-x ">Catagories</div>
        <div className="flex flex-row items-center  ">
          <VscDebugBreakpointLogUnverified className="text-gray-400 font-mono text-xl" />
          <div className="text-gray-400 font-mono text-xl ml-2">Top Rated</div>
        </div>
        <div className="flex flex-row items-center  ">
          <VscDebugBreakpointLogUnverified className="text-gray-400 font-mono text-xl" />
          <div className="text-gray-400 font-mono text-xl ml-2">Popular</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
