import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { useState } from 'react'
const Main = () =>{ 
    const [menu, setMenu] = useState("");
    const [search, setSearch] = useState("");


    return(
        <div >
            <Navbar setMenu={setMenu} setSearch={setSearch}/>
            <Home menu={menu} search={search}/>
        </div>
    )
};

export default Main;