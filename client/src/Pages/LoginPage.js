import login from "../assets/login.jpg";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="relative">
      <img src={login} alt="login" />
      <div className="absolute top-1/2 left-1/2 items-start transform -translate-x-1/2 -translate-y-1/2 border rounded-md w-96 h-96  bg-[#121212] bg-opacity-95">
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-6 m-8">
            <div className="text-3xl font-sans font-bold">Login</div>
            <div className="w-0.5 h-10 border bg-black"></div>
            <div className="text-3xl font-sans font-bold">SignUp</div>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
