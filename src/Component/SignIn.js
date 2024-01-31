import React from "react";
import logo from "../Imges/bbclogo.png";
import backimg from "../Imges/backimg.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Firebase/FirebaseSetup";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();

    const googleSignin= async ()=>{
        try {
            await signInWithPopup(auth, googleProvider);
           auth.currentUser && navigate("/")
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div className="grid grid-cols-2 bg-black min-h-screen align-middle">
      <div className=" flex flex-col items-center gap-12">
        <img src={logo} className="h-14 mt-40"/>
        <h1 className="text-white text-3xl font-semibold mt-28">Sign in</h1>
        <button onClick={googleSignin} class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-12 w-96">
          Sign in
        </button>
        <h2 className=" text-blue-500 underline cursor-pointer">Sign in now</h2>
      </div>
      <div>
        <img src={backimg} />
      </div>
    </div>
  );
};

export default SignIn;
