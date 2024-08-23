// Navbar.js

import React, { useState } from "react";
import "./Navbar2.css";
import logo from "../../image/logo2.PNG";
import Heart from "../../image/HeartLogo.png";
import Home from "../../image/HomeLogo.png";
import Phone from "../../image/PhoneLogo.png";
import Search from "../../image/SearchLogo.png";
import Upload from "../../image/UploadLogo.png";
import message from "../../image/messageLogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CifNavBarModel from "../Models/CifNavBarModel";
import CafLinkModel from "../Models/CafLinkModel";
import MessageModel from "../Models/MessageModel";

const Navbar2 = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showLinkModel,setShowLinkModel]=useState(false);
  const [messageModel,setMessageModel]=useState(false);

  const location = useLocation();
  const { pathname } = location;

  const parts = pathname.split("/");
  const lastPart = parts[parts.length - 1];

  return (
    <>
      <div className="navbarUpdate">
        <div className="navbarUpdate-child">
          <div>
            <img src={logo} alt="Logo" className="logo-update" />
          </div>

          <div className="header_list_left">
            <div>
              <select className="select-style">
                <option value="">lorenepsom1@gmail.com</option>
              </select>
            </div>

            <div className="header_left_side_content">
              <ul class="header-list">
                <li>
                  <img src={Home} alt="Logo" className="" />
                </li>
                <li onClick={()=>setMessageModel(true)}>
                  <img src={message} alt="Logo" className="" />
                </li>
                <li>
                  <img src={Heart} alt="Logo" className="" />
                </li>
                <li>
                  <img src={Search} alt="Logo" className="" />
                </li>
                <li>
                  <img src={Phone} alt="Logo" className="" />
                </li>
                <li>
                  <img src={Upload} alt="Logo" className="" />
                </li>
              </ul>

              <button className="button_header_style">Send SMS/Mail</button>
            </div>
          </div>
        </div>

        <div className="navbarUpdate-bottom">
          <div>
            <select
              className="select-style-second"
              onChange={(e) => {
                if (e.target.value === "cart-link") {
                  setShow(true);
                }
                else if(e.target.value=== "old-caf-link"){
                  setShowLinkModel(true)
                }
              }}
            >
              <option value="">Select</option>
              <option value="7889989904">7889989904</option>
              <option value="old-caf-link">Old CAF Link</option>
              <option value="cart-link">Cart Link</option>
              <option value="lorenepsom@gmail.com">lorenepsom@gmail.com</option>
              <option value="974564">974564</option>
              <option value="landing">Landing</option>
              <option value="ranchi">Ranchi</option>
              <option value="pre-application-high">Pre-Application-High</option>
              <option value="lorenepsom@gmail.com">lorenepsom@gmail.com</option>
            </select>
          </div>

          <div>
            <ul class="header-list">
              <li>
                <p
                  className={
                    lastPart === "ConverationLeadServe" ? "nav_bar_color" : ""
                  }
                  onClick={() => navigate("/ConverationLeadServe")}
                >
                  Conversation&Activity
                </p>
              </li>
              <li>
                <p
                  className={lastPart === "loan" ? "nav_bar_color" : ""}
                  onClick={() => navigate("/loan")}
                >
                  Loan
                </p>
              </li>
              <li>
                <p
                  className={lastPart === "profile" ? "nav_bar_color" : ""}
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </p>
              </li>
              <li>
                <p
                  className={
                    lastPart === "shortlisted_CollageRecommantaion"
                      ? "nav_bar_color"
                      : ""
                  }
                  onClick={() => navigate("/shortlisted_CollageRecommantaion")}
                >
                  College_Recommended
                </p>
              </li>
              <li>
                <p
                  className={
                    lastPart === "shortlisted_pages" ? "nav_bar_color" : ""
                  }
                  onClick={() => navigate("/shortlisted_pages")}
                >
                  Shortlisted_colleges (12)
                </p>
              </li>
              <li>
                <p
                  className={
                    lastPart === "shortlisted_CollageNotInterested"
                      ? "nav_bar_color"
                      : ""
                  }
                  onClick={() => navigate("/shortlisted_CollageNotInterested")}
                >
                  Colleges_Not_Interested (0)
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <CifNavBarModel show={show} onHide={() => setShow(false)} />
      <CafLinkModel show={showLinkModel} onHide={()=>setShowLinkModel(false)}/>
      <MessageModel show={messageModel} onHide={()=>setMessageModel(false)}/>
    </>
  );
};

export default Navbar2;
