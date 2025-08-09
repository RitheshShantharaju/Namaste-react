import { useEffect, useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header rendered");
  useEffect(() => {
    console.log("UseEffect called");
  }, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
