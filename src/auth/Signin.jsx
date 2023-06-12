import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userLogin } from "../store/authActions";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, authInfo, success } = useSelector((state) => state.auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = Object.fromEntries(data.entries());
    if (formData.email !== "" && formData.password !== "") {
      dispatch(userLogin(formData));
    } else {
      toast.warn("Please fill all the fields");
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success);
    }

    if (authInfo !== null) {
      navigate("/", { replace: true });
    }
  }, [dispatch, error, authInfo, navigate, success]);

  return (
    <>
      <div className="min-h-full flex items-center h-screen justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-6">
          <div className="Flex justify-center items-center">
            <h1 className="text-4xl whitespace-nowrap text-center font-bold text-cyan-600">
              Employee Login
            </h1>
            <h2 className="mt-4 text-center text-2xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className=" space-y-4 " onSubmit={handleSubmit}>
            <div className="rounded-md   space-y-2">
              <div>
                <label htmlFor="email-address" className="">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="off"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="off"
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-cyan-500 group-hover:text-cyan-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
            <div className="flex items-center justify-between leading-6">
              <div className="text-base font-medium">
                <Link className="text-cyan-500" to="/register">
                  Create an Account
                </Link>{" "}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signin;
