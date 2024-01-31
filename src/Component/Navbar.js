import React from "react";
import bbclogo from "../Imges/bbclogo.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/FirebaseSetup";
import { signOut } from "firebase/auth";

const Navbar = (props) => {
    const navigate = useNavigate();

    const Logout = async()=>{
        try {
             await signOut(auth);
             navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="column flex  justify-around gap-1 items-center bg-black p-0">
      <div className="flex items-center p-2 ">
        <img src={bbclogo} className=" h-7" />
        {auth.currentUser ? (
          <button onClick={Logout} className="text-white p-1 pt-2 ml-4 pr-16 flex hover:border-b-2 border-blue-800 ">
            Log out
          </button>
        ) : (
          <Link to="/signin">
            <button className="text-white p-1 pt-2 ml-4 pr-16 flex hover:border-b-2 border-blue-800 ">
              <img
                src="https://static.files.bbci.co.uk/account/id-cta/649/style/img/account-chameleon-icon-light.svg"
                className=" h-7"
              />
              Sign in
            </button>
          </Link>
        )}
      </div>
      <div className="flex text-white gap-8 border-l-gray-400 border-l-2 w-fit h-10 pl-14 pr-2">
        <button onClick={()=> props.setMenu("All")} className=" flex font-semibold mt-1 hover:border-b-2 border-white">
          Home
        </button>
        <button onClick={()=> props.setMenu("Science")} className=" flex font-semibold mt-1 hover:border-b-2  border-red-500">
          News
        </button>
        <button onClick={()=> props.setMenu("Sport")} className=" flex font-semibold mt-1 hover:border-b-2 border-yellow-500">
          Sport
        </button>
        <button onClick={()=> props.setMenu("Future")} className=" flex font-semibold mt-1 hover:border-b-2 border-lime-400">
          Earth
        </button>
        <button onClick={()=> props.setMenu("Food")} className=" flex font-semibold mt-1 hover:border-b-2 border-blue-800">
          Reel
        </button>
        <button onClick={()=> props.setMenu("Worklife")} className=" flex font-semibold mt-1 hover:border-b-2 border-blue-800">
          Worklife
        </button>
        <button onClick={()=> props.setMenu("Travel")} className=" flex font-semibold mt-1 hover:border-b-2 border-green-500">
          Travel
        </button>
        <button onClick={()=> props.setMenu("Culture")} className=" flex font-semibold mt-1 hover:border-b-2 border-purple-600">
          Culture
        </button>
        <button className=" flex font-semibold mt-1 text-xl pl-3 pr-3 hover:border-b-2 border-white">
          <i class="fa-solid fa-ellipsis"></i>
        </button>
      </div>
      <div className=" p-4">
        <div className="flex gap-4  items-center  text-slate-100 bg-gray-700 p-1 w-60">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input onChange={(e)=> props.setSearch(e.target.value)} placeholder="Search" className=" bg-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
