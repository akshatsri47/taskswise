import React from 'react';
import todoimage from '../images/todo.jpg';

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div
          className="w-1/2 h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${todoimage})` }}
        ></div>

        {/* Right Section */}
        <div className="w-1/2 flex items-center justify-center bg-gray-100 p-8">
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Welcome to InspInterior</h1>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="full-name">Full Name</label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  type="text"
                  id="full-name"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">E-mail</label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  type="email"
                  id="email"
                  placeholder="Enter your e-mail here"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="password">Password</label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  type="password"
                  id="password"
                  placeholder="Enter your Password"
                />
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded focus:outline-none focus:bg-blue-600 hover:bg-blue-600 transition duration-200">Create Account</button>
            </form>
            <div className="mt-4 text-center text-gray-600">
              <p>Already have an account? <a className="text-blue-500 hover:underline" href="#login">Log In</a></p>
              <p className="my-4">Or continue with</p>
              <div className="flex justify-around">
                <button className="flex items-center bg-white border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition duration-200">
                <div class="px-6 sm:px-0 max-w-sm">
    <button type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
</div>
                </button>
                <button className="flex items-center bg-white border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition duration-200">
                  <img src="path-to-facebook-icon" alt="Facebook" className="w-5 h-5 mr-2" />
                  Sign up with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
