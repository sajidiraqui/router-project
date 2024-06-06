import Template from "../components/Template";
import login from "../assets/login.png"

function Login({setIsLoggedIn}) {
  return (
    <div className="">
    <Template
    title="Welcome Back"
    desc1="Build Skills for today,tomorrow and beyond."
    desc2="Education to future-proof your career"
    image={login}
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}
    ></Template>
    </div>
  );
}

export default Login;
