
import {  FaSearch } from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa"
import pngLogo from "../img/velilogo.png"
import {FaUser} from "react-icons/fa"
import {FaRedo} from "react-icons/fa"

import { useState } from "react";
import Login from "./Login";



function Header() {
const [login, setLogin] = useState(false)

  return (
    
    <div className="header">
     <div className="mainlogo">
     <img className="velilogo" src={pngLogo} alt="velisore-logo" />
     </div>
      <div className="serchbar">
     <FaSearch className="searchicon" />
        <input className="serch"
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
  )
}

export default Header
