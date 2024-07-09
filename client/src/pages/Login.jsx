import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Loading from "../components/Loader";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../redux/slices/authSlice"
import { useLoginMutation } from "../redux/slices/api/authApiSlice";
import { toast } from "sonner";

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const submitHandler = async (data) => {
    try {
      const result = await login(data).unwrap();
      dispatch(setCredentials(result));
      navigate("/")
      toast.info("Hey👋🏻 Welcome back!");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || error.message);
    }
  };

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]'>
      <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
        {/* left side */}
        <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
            <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-600'>
              Task Management and Collaboration simplified!
            </span>
            <p className='flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700'>
              <span>Taskify</span>
            </p>

            <div className='cell'>
              <div className='circle rotate-in-up-left'></div>
            </div>
            <a href="http://www.owldone.site">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden sm:max-w-2xl m-4 hover:skew-x-2 hover:skew-y-1">
                <div className="sm:flex">
                  <div className="sm:shrink-0 h-40 w-40">
                    <img
                      className="w-full object-cover sm:h-full sm:w-48"
                      src="/OwlDone.jpeg"
                      alt="Card image"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="uppercase italic tracking-wide text-md text-indigo-500 font-bold">
                      Hey👋🏻, there!!
                    </div>
                    <p className="mt-2 text-slate-500">
                      <span className="font-bold text-blue-600">Taskify</span> is an Internal tool, if you dont have acess to it you might wanna try
                      <span className="font-semibold italic text-amber-700">OwlDone</span> for project planning and task-management. CLICK HERE !!
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* right side */}
        <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'
          >
            <div className=''>
              <p className='text-blue-600 text-3xl font-bold text-center'>
                Welcome back!
              </p>
              <p className='text-center text-base text-gray-700 '>
                Keep all your credential safe.
              </p>
            </div>

            <div className='flex flex-col gap-y-5'>
              <Textbox
                placeholder='email@example.com'
                type='email'
                name='email'
                label='Email Address'
                className='w-full rounded-full'
                register={register("email", {
                  required: "Email Address is required!",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder='your password'
                type='password'
                name='password'
                label='Password'
                className='w-full rounded-full'
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password.message : ""}
              />

              <span className='text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer'>
                Forget Password?
              </span>

              {isLoading ? <Loading /> : <Button
                type='submit'
                label='Submit'
                className='w-full h-10 bg-blue-700 text-white rounded-full'
              />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
