
import {  FaSearch } from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa"
import pngLogo from "../img/velilogo.png"
import {FaUser} from "react-icons/fa"
import {FaRedo} from "react-icons/fa"

import { useState } from "react";
import Login from "./Login";
import { NavLink } from "react-router-dom";
import ManuSection from "./ManuSection";
import manu from "../json/manu.json"




function Header() {
const [login, setLogin] = useState(false)
const [search, setSearch] = useState("")
// const Search = (manu) => {
  // return manu.filter((item) => item.title.toLowercase().includes(search))
// }
console.log(search)

  return (

    <div>
      
    <div className="header">
     <div className="mainlogo">
     <NavLink to='./' >
     <img className="velilogo" src={pngLogo} alt="velisore-logo" />
     </NavLink>
    
     </div>
      <div className="serchbar">
     <FaSearch className="searchicon" />
        <input onChange={(e) => setSearch(e.target.value)}
         className="serch"
        type="text" 
        placeholder="რას ეძებ?"
        />
        <FaRedo className="redo" />
      </div>
      <div className="persinpo">
       <button className="bskbtn">
        <FaShoppingCart  className="basketicon" />
        <span className="basket">კალათა</span>
       </button>
       <button onClick={() => {
        setLogin(true)
       }}
        className="login">
        <FaUser className="usicon"/>
        <span className="lgn"> შესვლა </span>
        </button>
         {login &&  <Login closelogin={setLogin} />}
      </div>
     
     
    </div>
    <ManuSection   />
    </div>  
 
  
  )
}

export default Header
