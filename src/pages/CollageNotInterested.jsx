import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import "../App.css"
import Navbar2 from '../Component/Navbar/Navbar2';
import { useLocation } from "react-router-dom";

const CollageNotInterested = () => {

    const location = useLocation();
    const { pathname } = location;
  
    const parts = pathname.split("/");
    const lastPart = parts[parts.length - 1];



    return (
        <>
            <Navbar2 />
           
            <div className='collegeNotInterested'>
                <p>Do not Proceed 1 Colleges</p>

                <div className='college_not_internal_div'>
                    <div>
                        <div>
                           <p>Collage</p>
                        </div>
                       
                        <p>IILM University Gurugram (IILM University Gurugram - Gurgaon,
Haryana)</p>
                    </div>


                    <div className='border_left'>
                        <div>
                        <p>Courses Selected</p>
                        </div>
                        <p>Bachelor of Arts (Honors) in Psychology, 
Bachelor of Arts Applied Psychology  (Honours),
BA in Liberal Arts (Honors),</p>
                    
                    </div>


                    <div className='border_left'>
                        <div>
                         <p>Status</p>
                        </div>
                        
                       <p>First Level Counselling Completed</p>
                    </div>
                </div>

            </div>


        </>
    )
}

export default CollageNotInterested;