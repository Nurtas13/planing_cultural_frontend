import LoginImg from "../../assets/LoginImg.jpg";

import { LoginForm } from "./UI/LoginForm";
import { LoginMainText } from "./UI/LoginMainText";

function Login() {
  return (
    <div className="w-full h-full flex">
      <div className="w-1/2 h-full hidden sm:block">
        <img
          src={LoginImg}
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center text-center flex-col p-5">
        <LoginMainText />

        <div className="mt-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
