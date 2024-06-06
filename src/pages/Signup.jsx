import Template from "../components/Template";
import signup from "../assets/signup.png"

function Signup({setIsLoggedIn}) {
  return (
    <div className="">
      <Template
    title="Join the millions learning to code with studyNotion for free"
    desc1="Build Skills for today,tomorrow and beyond"
    desc2="Education to future-proof your career"
    image={signup}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    ></Template>
    </div>
  );
}

export default Signup;
