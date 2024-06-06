import frame from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { FcGoogle } from "react-icons/fc";
const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto justify-between gap-y-0">
      <div className="max-w-[450px] ">
        <h1 className="text-richblack-50 font-semibold text-[1.875rem] leading[2.375rem] ">
          {title}
        </h1>
        <p className="text-[1.125rem] leading[1.625rem] mt-4 ">
          <span className="text-richblack-100">{desc1}</span>
          <br />
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formtype === "signup" ? (
          <SignUpForm setIsLoggedIn={setIsLoggedIn}></SignUpForm>
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
        )}
        <div className="flex flex-row w-full items-center my-4 gap-x-2">
          <div className=" w-full h-[1px] bg-richblack-700"></div>
          <div className="text-richblack-700 font-medium leading-[1.375rem]">
            OR
          </div>
          <div className=" w-full h-[1px] bg-richblack-700"></div>
        </div>

        <button
          className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
        border border-richblack-700 px-[12px] py-[8px] gap-x-2 "
        >
          {" "}
          <FcGoogle></FcGoogle> Sign in with Google
        </button>
      </div>

      <div className=" relative w-11/12 max-w-[450px] ">
        <img
          className="absolue"
          src={frame}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        />

        <img
          className="absolute -top-4  right-4"
          src={image}
          alt="Pattern"
          width={490}
          height={504}
          loading="lazy"
        />
      </div>
    </div>
  );
};
export default Template;
