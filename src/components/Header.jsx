import React from "react";
 function Header(){
    return(
        <div className="footer">
            <img src="../Group.png" id="contact-img1"></img>
            <ul className="navbar">
                <li className="navcomp">About</li>
                <li className="navcomp">
                   <select name="Service" className="selectarrow" value="">
                    <option >Service</option>
                    </select> 
                </li>
                <li className="navcomp">Case Studies</li>
                <li className="navcomp">Contact Us</li>
                <li><button className="navb">Enquiry</button></li>
            </ul>
        </div>
    )
 }

 export default Header;