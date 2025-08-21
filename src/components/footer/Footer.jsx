import React from 'react'
import './footer.css'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare, AiFillInstagram} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2025 Your E-Learning Platform.All rights reserved. <br/>Made with <span style={{color :"red"}}>❤</span> <a href="">Amsavalli</a>
            </p>

            <div className="social-links">
              <a href=""><AiFillFacebook/></a>
              <a href=""><AiFillTwitterSquare/></a>
              <a href=""><AiFillInstagram /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer