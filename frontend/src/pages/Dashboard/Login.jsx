import React from 'react'

const Login = () => {
  return (
    <>
        <div className="bg-[#1A2942] flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="space-y-6">
          <h3 className="text-center text-2xl py-4 font-semibold text-[#1A2942]">
            TND Support System | Login
          </h3>
          <form method="POST" >
       
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium py-2 text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2942]"
                id="email"
                required
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium py-2 pt-5 text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2942]"
                id="password"
                required
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center py-4 ">
              <input
                type="checkbox"
                className="h-4 w-4 text-[#1A2942] border-gray-300 rounded"
                id="rememberMe"
                
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 px-2 text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>

            <div>
              <button
                type="submit"
                name="login"
                className="w-full py-3 cursor-pointer bg-[#D3F2F4] text-[#1A2942] font-medium rounded-md hover:bg-[#1A2942] hover:text-white transition duration-300"
              >
                Log In
              </button>
            </div>

            <div className="text-center py-3">
              <small className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a
                  href="./register"
                  className="text-[#1A2942] font-bold hover:underline"
                >
                  Register
                </a>
              </small>
            </div>
         
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
