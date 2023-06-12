import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "../store/authActions.js";
const Signup = () => {
  const dispatch = useDispatch();
  const [document, setDocument] = useState(null);
  const signUpHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("document", document);
    dispatch(userRegister(formData));
  };
  return (
    <>
      <div className="min-h-screen px-6  flex items-center justify-center ">
        <div className="max-w-md w-full">
          <h2 className="mt-6  text-center text-3xl font-bold text-cyan-600">
            Create an Account
          </h2>
          <div className="mt-2 px-4 text-center text-sm text-gray-600">
            <span className="px-1 text-lg font-semibold">
              Already have an Account ?
            </span>
            <Link
              to="/login"
              className="font-semibold text-cyan-500 text-xl hover:text-cyan-500"
            >
              Sign in
            </Link>
          </div>

          <form className=" space-y-6" onSubmit={signUpHandler}>
            <div className="rounded-md  ">
              <div className="">
                <label htmlFor="name" className=" text-lg font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                  className="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder=" Enter Name"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="email" className=" text-lg font-semibold">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  className="relative  rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder="Email Address"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="phone" className=" text-lg font-semibold">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="off"
                  className="relative  rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="password" className="text-lg font-semibold">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  className="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder=" Enter Password"
                />
              </div>
              <div className="mt-2">
                <label
                  htmlFor="file-upload"
                  className="block text-base font-medium text-cyan-700"
                >
                  Upload CV / Resume
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-cyan-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm justify-center items-center text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-cyan-600 hover:text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500"
                      >
                        <span className=" flex  text-center">
                          Upload a file
                        </span>
                        <input
                          id="file-upload"
                          type="file"
                          onChange={(e) => {
                            e.preventDefault();
                            e.target.files[0] === undefined
                              ? setDocument(document)
                              : setDocument(e.target.files[0]);
                          }}
                          className="sr-only"
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                    <p>{document?.name}</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-xl font-semibold rounded-md text-white bg-cyan-400 hover:bg-cyan-500  focus:bg-cyan-500 hover:text-black "
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
