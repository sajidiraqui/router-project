import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SignUpForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword_confirm, setShowPassword_confirm] = useState(false);
  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirm_password) {
      toast.error("Password didn't match");
      return;
    }

    toast.success("Account Created");
    setIsLoggedIn(true);
    navigate("/dashboard");
    const accountData = {
      ...formData,
    };
    console.log("Printing Account data");
    console.log(accountData);
  }
  return (
    <div className="">
      <div className="flex rounded-full bg-richblack-800 p-2 w-1/2 gap-x-5 mt-[15px] mb-[15px]">
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler} action="" className="">
        <div className="flex gap-5 justify-between mt-4">
          <label htmlFor="">
            <p className="text-[0.875rem] text-richblack-50 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-300">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-50 p-[8px] w-full "
              required
              placeholder="Enter First Name"
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={changeHandler}
            />
          </label>
          <label htmlFor="">
            <p className="text-[0.875rem] text-richblack-50 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-300">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-50 p-[8px] w-full "
              required
              placeholder="Enter Last Name"
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={changeHandler}
            />
          </label>
        </div>
        <div className="mt-[15px]">
          <label htmlFor="">
            <p className="text-[0.875rem] text-richblack-50 mb-1 leading-[1.375rem]">
              Email Address <sup className="text-pink-300">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-50 p-[8px] w-full "
              required
              placeholder="Enter email address"
              type="email"
              name="email"
              onChange={changeHandler}
              value={formData.email}
            />
          </label>
        </div>
        <div className="mt-[15px]">
          <div className="flex gap-5 mt-2 items-center justify-between">
            <label className="relative">
              <p className="text-[0.875rem] text-richblack-50 mb-1 leading-[1.375rem]">
                Create Password<sup className="text-pink-300"> *</sup>
              </p>
              <input
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-50 p-[8px] w-full "
                required
                placeholder="Enter Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={changeHandler}
              />
              <span
                className="absolute right-3 top-[38px]"
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
            </label>
            <label className="relative ">
              <p className="text-[0.875rem] text-richblack-50 mb-1 leading-[1.375rem]">
                Confirm Password<sup className="text-pink-300">*</sup>
              </p>
              <input
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-50 p-[8px] w-full "
                required
                type={showPassword ? "text" : "password"}
                name="confirm_password"
                value={formData.confirm_password}
                onChange={changeHandler}
              />
              <span
                className="absolute right-3 top-[38px]"
                onClick={() => {
                  setShowPassword_confirm(!showPassword_confirm);
                }}
              >
                {showPassword_confirm ? (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>
                ) : (
                  <AiOutlineEyeInvisible
                    fontSize={24}
                    fill="#AFB2BF"
                  ></AiOutlineEyeInvisible>
                )}
              </span>
            </label>
          </div>
        </div>

        <button className="bg-yellow-400 rounded-[8px] text-richblack-900  font-medium p-2 mt-8 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};
export default SignUpForm;
