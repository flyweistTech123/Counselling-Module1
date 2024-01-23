// Navbar.js

import React from 'react';
import './Navbar.css';
import logo from '../../image/logo.png'
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { IoIosChatbubbles } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";



const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='logo-container'>
                    <img src={logo} alt='Logo' className='logo' />
                </div>
                <div className='nav-links'>
                    <div className='navbar1'>
                        <a href='/home'> <AiFillHome className='navbar3' /> Home</a>
                        <a href=''> <IoIosChatbubbles className='navbar3'/> Chat</a>
                        <a href='/search'> <IoMdSearch className='navbar3'/> Search</a>
                        <a href='#'> <FaBell /></a>
                    </div>
                    <div className='profile-icon'>
                    <a href='#'>lorenepsom1@gmail.com <CgProfile /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
