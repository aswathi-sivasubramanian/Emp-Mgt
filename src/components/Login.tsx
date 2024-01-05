import React from 'react';
import LoginImage from "../images/loginimage.png"
const Login: React.FC = () => {
  return (
    <div className="flex h-screen bg-pink">
      <div className="w-2/3 bg-gray-200 flex items-center justify-center">
        <img
          src={LoginImage}
          alt="Image"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="w-1/3 bg-customBlue flex items-center justify-center ">
        <form className="flex-col">
          <div className="mb-4">
           
            <input
              type="text"
              id="username"
              name="username"
              className="ml-5 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-full"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
      
            <input
              type="password"
              id="password"
              name="password"
              className="ml-5 shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline rounded-full"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="py-2 px-4 bg-customOrange text-white font-semibold  shadow-md rounded-full "
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
