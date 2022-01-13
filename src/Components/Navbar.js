import React, { useState } from "react";
import ReorderIcon  from '@material-ui/icons/Reorder'; 
import SearchIcon from '@material-ui/icons/Search'; 
import "../App.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="navbar">
      <div className="leftside">
        <div className="links" id={showLinks ? "hidden" : ""}>          
          <a href="/home">Home</a>
          <a href="/feedback">Feedback</a>
          <a href="/aboutus">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}> {" "}<ReorderIcon /></button>
      </div>

      <div className="rightside">
        <input type="text" placeholder="Search" />
        <button><SearchIcon /></button>
      </div>
    </div>
  );
}

export default Navbar;
