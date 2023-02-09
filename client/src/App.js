import HomePage from "./components/HomePage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className=" relative bg-slate-900 w-screen h-screen">
      <div className="flex flex-row">
        <SideBar />
        <div className="absolute left-56  w-px h-screen bg-slate-800"></div>
        <div className=" absolute right-5 top-6 border border-gray-300 rounded-full bg-white w-12 h-12"></div>
      </div>
      <HomePage />
    </div>
  );
}

export default App;
