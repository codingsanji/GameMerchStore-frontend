import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 p-4 overflow-hidden">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 -mt-12">
        <h1 className="text-4xl font-bold text-center text-gray-700 -ml-0 md:-ml-7 pb-1 mb-4">
          Login
        </h1>
        <div className="flex flex-col justify-center space-y-6">
          <div className="w-full space-y-4">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button className="w-full bg-indigo-600 text-white font-bold py-2 rounded-md hover:bg-indigo-700 transition duration-200">
            Login
          </button>
          <Link to="/signup">
            <p className="text-center text-gray-600">
              Don't have an account?{" "}
              <span className="text-indigo-600 hover:underline cursor-pointer">
                Sign up here
              </span>
              .
            </p>
          </Link>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-indigo-600 focus:ring-0 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-gray-600">
                Remember me
              </label>
            </div>
            <span className="text-indigo-600 hover:underline cursor-pointer">
              Forgot your password?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
