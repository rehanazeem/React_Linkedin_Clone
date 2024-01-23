import LoginComponent from "../components/LoginComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader/Loader";

const Login = () => {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/home");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader/> : <LoginComponent />;
};

export default Login;
