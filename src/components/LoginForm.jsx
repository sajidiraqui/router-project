import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("heloo worldmn erv");
    setIsLoggedIn(true);
    toast.success("Logged in");
    navigate("/dashboard");
  }
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
      action=""
    >
      <label className="w-full mt-[20px]">
        <p className="text-[0.875rem] text-richblack-50 mb-1 leading-[1.375rem]">
          Email Address<sup className="text-pink-200">*</sup>
        </p>
        <input
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-50 p-[10px] w-full "
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
        />
      </label>

      <div className="mt-[20px]">
        <label className="relative">
          <p className="text-[0.875rem] text-richblack-50 mb-1 leading-[1.375rem]">
            Password<sup className="text-pink-200">*</sup>
          </p>
          <input
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-50 p-[10px] w-full "
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter password"
          />
          <span
            className="absolute right-3 top-[38px]  "
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? (
              <AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>
            ) : (
              <AiOutlineEyeInvisible
                fontSize={24}
                fill="#AFB2BF"
              ></AiOutlineEyeInvisible>
            )}
          </span>
          <p className="text-xs mt-1 text-blue-100 ml-80">Forgot password</p>
        </label>
      </div>
      <button className="bg-yellow-400 rounded-[8px] text-richblack-900  font-medium p-2 mt-6 ">
        Sign in
      </button>
    </form>
  );
};
export default LoginForm;
