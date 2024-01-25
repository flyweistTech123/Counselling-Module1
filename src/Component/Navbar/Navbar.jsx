// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../image/logo.png'
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { IoIosChatbubbles } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLock } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';






const Navbar = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    function Logout(props) {
        console.log("Hello");
        return (
            <Modal
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                style={{ top: '10%', left: '38%', }}
            >
                <Modal.Body>
                    <div className='logout'>
                        <div className='logout1'>
                            <span onClick={() => setShow1(true)}><FaLock className='logout3' /> Change Password</span>
                        </div>
                        <div className='logout2'>
                            <hr />
                        </div>
                        <div className='logout1'>
                            <span onClick={() => navigate('/')}><MdLogout className='logout3' /> Logout</span>
                        </div>
                    </div>
                </Modal.Body>
            </Modal >
        );
    }


    const [show1, setShow1] = useState(false);

    function ChangePassword(props) {
        console.log("Hello");
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className='changepassword'>
                        <div className='changepassword1'>
                            <h6>Change Password</h6>
                        </div>
                        <div className='login4'>
                            <label htmlFor="">Old Password</label>
                            <input type="password" />
                        </div>
                        <div className='login4'>
                            <label htmlFor="">New Password</label>
                            <input type="password" />
                        </div>
                        <div className='login4'>
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" />
                        </div>
                        <div className='changepassword2'>
                            <button onClick={() => navigate('/home')} >Change Password</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal >
        );
    }
    return (
        <>
            <div className='navbar'>
                <div className='logo-container'>
                    <img src={logo} alt='Logo' className='logo' />
                </div>
                <div className='nav-links'>
                    <div className='navbar1'>
                        <p onClick={()=>navigate('/home')}> <AiFillHome className='navbar3' /> Home</p>
                        <p href=''> <IoIosChatbubbles className='navbar3' /> Chat</p>
                        <p onClick={()=>navigate('/search')}> <IoMdSearch className='navbar3' /> Search</p>
                        <p> <FaBell /></p>
                    </div>
                    <div className='profile-icon'>
                        <p onClick={() => setShow(true)}>lorenepsom1@gmail.com <CgProfile /> </p>
                    </div>
                </div>
            </div>
            <Logout show={show} onHide={() => setShow(false)} />
            <ChangePassword show={show1} onHide={() => setShow1(false)} />
        </>
    );
}

export default Navbar;
