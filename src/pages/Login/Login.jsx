// import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semiboldold text-center text-gray-300">
         Login
         <span className="text-3xl text-blue-400"> ChatApp</span>
        </h1>
        <form>
          <div> 
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="input input-bordered w-full h-10" />
          </div>
          <div>
            <label className="label p-2">
                <span className="text-base label-text">Password</span>
            </label>
            <input type="text" placeholder="Enter Password" className="input input-bordered w-full h-10" />
          </div>
          <a href="#" className="text-sm hover: underline hover:text-blue-400 mt-2 inline-block">
            {"Don't have an account?"}
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2"> Login</button>
          </div>
        </form>
      </div>
    
    </div>
  )
}

export default Login