import { useState } from "react";
import { GoogleSignInAPI, RegisterAPI } from "../api/AuthAPI";
import Logo from "../assets/linkedin.png";
import GoogleButton from "react-google-button";
import "../index.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const register = async () => {
    try {
      const res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account Created!");
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Cannot create your Account!");
    }
  };

  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    console.log(response);
  };

  return (
    <div className="h-screen bg-white text-sm">
        <img
          src={Logo} // Add your LinkedIn logo image source
          alt="LinkedIn Logo"
          className="w-36 h-10 mt-2 ml-2 "
        />
      <div className=" w-[620px] h-5xl mx-auto p-8 bg-gray-100 rounded shadow-md mt-4">
        <h1 className="text-3xl font-bold mb-6">Make the most of your professional life</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={credentials.email}
              onChange={(event) =>
                setCredentials({
                  ...credentials,
                  email: event.target.value,
                })
              }
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              onChange={(event) =>
                setCredentials({
                  ...credentials,
                  password: event.target.value,
                })
              }
              placeholder="Enter your password"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          {/* <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-500">
              Forgot password?
            </a>
          </div> */}
          <button
            type="button" // Change to "submit" if using a form submission
            onClick={register}
            className="bg-blue-500 mb-2 text-white p-2 rounded-full w-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Agree & Join
          </button>
          <p className="text-gray-500 flex justify-center items-center mb-2">
            or
          </p>
          <div className="googleBtn">
            <GoogleButton
              className="googleBtn"
              label="Sign up with Google"
              onClick={googleSignIn}
            />
          </div>
        </form>
        <div className="mt-6">
          <p className="text-sm text-gray-600">
           Already on LinkedIn?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Sign in
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
