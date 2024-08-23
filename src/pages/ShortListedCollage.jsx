import React, { useState } from 'react'
import Navbar from '../Component/Navbar/Navbar2'
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popover from 'react-bootstrap/Popover';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../App.css"
import Navbar2 from '../Component/Navbar/Navbar2';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SortListedModel from '../Component/SortListedModel/SortListedModel';
import CifModel from '../Component/Models/CifModel';
import GetLinkModel from '../Component/Models/GetLinkModel';
import UpdateStatusModel from '../Component/Models/UpdateStatusModel';

const ShortListedCollage = () => {
    const [showModel,setShowModel]=useState(false);
    const [cifModel,setCifModel]=useState(false);
    const [getLinkModel,setGetLinkModel]=useState(false);
    const [updateStatus,setUpdateStatus]=useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
  
    const parts = pathname.split("/");
    const lastPart = parts[parts.length - 1];



    return (
        <>
            <Navbar2 />
           <div className='shortList_collage'>
            <p className='short_size_header_font'>12 College Shortlisted</p>

            <div className='shortList_header_list'>

                <div className='shortList_header_list_parent'>
                <p>Show Only</p>

                <div className='shortList_header_list_left'>
                        <div className={lastPart === "shortlisted_ups" ? "changeColor" : ""}>
                            <input type="checkbox" onChange={() => navigate("/shortlisted_ups")}/>
                            <label>USP’s</label>
                        </div>
                        <div className={lastPart === "shortlisted_facilty" ? "changeColor" : ""}>
                        <input type="checkbox" onChange={() => navigate("/shortlisted_facilty")}/>
                            <label>Facilities</label>
                        </div>
                        <div className={lastPart === "shortlisted_placement" ? "changeColor" : ""}>
                        <input type="checkbox" onChange={() => navigate("/shortlisted_placement")}/>
                            <label>Placements</label>
                        </div>
                        <div className={lastPart === "shortlisted_course_fess" ? "changeColor" : ""}>
                        <input type="checkbox" onChange={() => navigate("/shortlisted_course_fess")}/>
                            <label>Course & Fees</label>
                        </div>
                </div>

                </div>
                <button className='button_header_style' style={{textAlign:"right"}} onClick={()=>setShowModel(true)}>
                Send more info
                </button>
            </div>

            <div className='shortList_Box'>
                <div className='shortList_Box_first_child'>
                    <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

                    <div className='shortList_Box_first_child_left'>
                        <div>
                            <p>CAF : Not Available</p>
                        </div>
                        <div>
                            <p>Status : Interested</p>
                        </div>
                        <div>
                            <p>User form Details</p>
                        </div>
                    </div>
                </div>

                <div className='shortList_Box_second_child'>
                    <p >Source Landing</p>

                    <div className='shortList_Box_second_child_child'>
                        <div onClick={()=>setCifModel(true)}><p>CAF Course Link</p></div>
                        <div onClick={()=>setGetLinkModel(true)}><p>CAF Cart Link</p></div>
                        <div onClick={()=>setUpdateStatus(true)}><p>Update Status</p></div>
                        <div><p>Admission Document</p></div>
                    </div>
                </div>

                <div className='single_flex_short'>
                    <p >L3: </p>

                    <div className='button_short'>
                    <p>Proceed with counselling</p> 
                    </div>
                </div>

                <div className='button_short_2'>
                    <p>Added On : Jun 24, 2023</p>
                </div>

                <div className='short_table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Tuition Fees</th>
                                <th>Duration</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                <td colspan="4" class="center-align">
                    <div>
                        +Add More Course To Shortlist
                    </div>
                </td>
            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div className='shortList_Box'>
                <div className='shortList_Box_first_child'>
                    <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

                    <div className='shortList_Box_first_child_left'>
                        <div>
                            <p>CAF : Not Available</p>
                        </div>
                        <div>
                            <p>Status : Interested</p>
                        </div>
                        <div>
                            <p>User form Details</p>
                        </div>
                    </div>
                </div>

                <div className='shortList_Box_second_child'>
                    <p >Source Landing</p>

                    <div className='shortList_Box_second_child_child'>
                        <div><p>CAF Course Link</p></div>
                        <div><p>CAF Cart Link</p></div>
                        <div><p>Update Status</p></div>
                        <div><p>Admission Document</p></div>
                    </div>
                </div>

                <div className='single_flex_short'>
                    <p >L3: </p>

                    <div className='button_short'>
                    <p>Proceed with counselling</p> 
                    </div>
                </div>

                <div className='button_short_2'>
                    <p>Added On : Jun 24, 2023</p>
                </div>

                <div className='short_table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Tuition Fees</th>
                                <th>Duration</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                <td colspan="4" class="center-align">
                    <div>
                        +Add More Course To Shortlist
                    </div>
                </td>
            </tr>
                        </tbody>
                    </table>
                </div>

            </div>


            <div className='shortList_Box'>
                <div className='shortList_Box_first_child'>
                    <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

                    <div className='shortList_Box_first_child_left'>
                        <div>
                            <p>CAF : Not Available</p>
                        </div>
                        <div>
                            <p>Status : Interested</p>
                        </div>
                        <div>
                            <p>User form Details</p>
                        </div>
                    </div>
                </div>

                <div className='shortList_Box_second_child'>
                    <p >Source Landing</p>

                    <div className='shortList_Box_second_child_child'>
                        <div><p>CAF Course Link</p></div>
                        <div><p>CAF Cart Link</p></div>
                        <div><p>Update Status</p></div>
                        <div><p>Admission Document</p></div>
                    </div>
                </div>

                <div className='single_flex_short'>
                    <p >L3: </p>

                    <div className='button_short'>
                    <p>Proceed with counselling</p> 
                    </div>
                </div>

                <div className='button_short_2'>
                    <p>Added On : Jun 24, 2023</p>
                </div>

                <div className='short_table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Tuition Fees</th>
                                <th>Duration</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                <td colspan="4" class="center-align">
                    <div>
                        +Add More Course To Shortlist
                    </div>
                </td>
            </tr>
                        </tbody>
                    </table>
                </div>

            </div>


            <div className='shortList_Box'>
                <div className='shortList_Box_first_child'>
                    <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

                    <div className='shortList_Box_first_child_left'>
                        <div>
                            <p>CAF : Not Available</p>
                        </div>
                        <div>
                            <p>Status : Interested</p>
                        </div>
                        <div>
                            <p>User form Details</p>
                        </div>
                    </div>
                </div>

                <div className='shortList_Box_second_child'>
                    <p >Source Landing</p>

                    <div className='shortList_Box_second_child_child'>
                        <div><p>CAF Course Link</p></div>
                        <div><p>CAF Cart Link</p></div>
                        <div><p>Update Status</p></div>
                        <div><p>Admission Document</p></div>
                    </div>
                </div>

                <div className='single_flex_short'>
                    <p >L3: </p>

                    <div className='button_short'>
                    <p>Proceed with counselling</p> 
                    </div>
                </div>

                <div className='button_short_2'>
                    <p>Added On : Jun 24, 2023</p>
                </div>

                <div className='short_table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Tuition Fees</th>
                                <th>Duration</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                <td colspan="4" class="center-align">
                    <div>
                        +Add More Course To Shortlist
                    </div>
                </td>
            </tr>
                        </tbody>
                    </table>
                </div>

            </div>


            <div className='shortList_Box'>
                <div className='shortList_Box_first_child'>
                    <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

                    <div className='shortList_Box_first_child_left'>
                        <div>
                            <p>CAF : Not Available</p>
                        </div>
                        <div>
                            <p>Status : Interested</p>
                        </div>
                        <div>
                            <p>User form Details</p>
                        </div>
                    </div>
                </div>

                <div className='shortList_Box_second_child'>
                    <p >Source Landing</p>

                    <div className='shortList_Box_second_child_child'>
                        <div onClick={()=>setCifModel(true)}><p>CAF Course Link</p></div>
                        <div><p>CAF Cart Link</p></div>
                        <div><p>Update Status</p></div>
                        <div><p>Admission Document</p></div>
                    </div>
                </div>

                <div className='single_flex_short'>
                    <p >L3: </p>

                    <div className='button_short'>
                    <p>Proceed with counselling</p> 
                    </div>
                </div>

                <div className='button_short_2'>
                    <p>Added On : Jun 24, 2023</p>
                </div>

                <div className='short_table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Tuition Fees</th>
                                <th>Duration</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                <td colspan="4" class="center-align">
                    <div>
                        +Add More Course To Shortlist
                    </div>
                </td>
            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

           </div>


        <SortListedModel
        show={showModel}
        onHide={() => setShowModel(false)}
        />

<       CifModel
        show={cifModel}
        onHide={() =>setCifModel(false)}
        />

        <GetLinkModel
        show={getLinkModel}
        onHide={()=>setGetLinkModel(false)}
        
        />

        <UpdateStatusModel
        show={updateStatus}
        onHide={()=>setUpdateStatus(false)}

        />

       
        </>
    )
}

export default ShortListedCollage;