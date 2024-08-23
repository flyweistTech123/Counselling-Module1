import React, { useState } from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popover from 'react-bootstrap/Popover';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Sidebar from '../Sidebar/Sidebar';



const Home = () => {
    const [show, setShow] = useState(false);

    function Save(props) {
        console.log("Hello");
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop={false}
                style={{ top: '20%', left: '10%', }}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h6 className='savemodal'>Save filter</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='savemodal1'>
                        <input type="text" name="" id="" placeholder='File Name' />
                        <textarea type="text" name="" id="" placeholder='File Description' />

                        <div className='savemodal2'>
                            <button>Save</button>
                            <button onClick={() => setShow(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal >
        );
    }

    const [show1, setShow1] = useState(false);

    function Discovery(props) {
        console.log("Hello");
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className='discovery12'>
                        <label htmlFor="">Please Enter Mobile Number</label>
                        <input type="text" name="" id="" />
                        <div className='discovery13'>
                            <button>Save</button>
                            <button onClick={() => setShow1(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal >
        );
    }
    const [value, onChange] = useState(new Date());
    const popover = (
        <Popover id="popover-basic"
            style={{ border: 'none' }}
        >
            <Popover.Body className='datepicker1' >
                <div>
                    <div className='datepicker3'>
                        <Calendar onChange={onChange} value={value} className="datepicker2" style={{border:'none'}} />
                        <Calendar onChange={onChange} value={value} className="datepicker2" />
                    </div>
                    <div className='datepicker4'>
                        <p>DD/MM/YYYY</p>
                        <p>DD/MM/YYYY</p>
                        <button>Close</button>
                        <button>Apply</button>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <Navbar />
            <div className='home1'>
                <div className='home2'>
                    <div className='home41'>
                        <p>CSL</p>
                    </div>
                    <div className='home42'>
                        <p>CLL</p>
                    </div>
                    <div className='home4'>
                        <p>ALL</p>
                    </div>
                    <div className='home4'>
                        <p>User Activity Leads</p>
                    </div>
                    <div className='home4'>
                        <p>Today’s Callback</p>
                    </div>
                    <div className='home4'>
                        <p>Walk in Leads</p>
                    </div>
                    <div className='home43'>
                        <p>Missed Callback</p>
                    </div>
                </div>

                <div className='home5'>
                    <div className='home6'>
                        <p>Priority (0)</p>
                    </div>
                    <div className='home6'>
                        <p>High Priority (0)</p>
                    </div>
                    <div className='home6'>
                        <p>Very High Priority (0)</p>
                    </div>
                </div>
            </div>

            <div className='home7'>
                <Sidebar/>
                <div className='home14'>
                    <div className='home15'>
                        <button onClick={() => setShow1(true)}>Discovery Tools</button>
                    </div>
                    <div className='home16'>
                        <p>Selected filters</p>
                    </div>


                    <div className='home18'>
                        <div className='home17'>
                            <p>Show</p>
                            <select id="selectOption" name="selectOption">
                                <option value="option1">10</option>
                                <option value="option2">2</option>
                                <option value="option3">3</option>
                            </select>
                            <p>Entries</p>
                        </div>

                        <div className='home19'>
                            <span>CLEAR ALL</span>
                            <button onClick={() => setShow(true)}>Save Filter</button>
                        </div>
                    </div>

                    <div className='home20'>
                        <div className='home21'>
                            <div className='home22'>
                                <span>Search</span>
                                <span>Lead ID</span>
                            </div>
                            <p>21795343</p>
                        </div>
                        <div>
                            <hr className="vertical-line" />
                        </div>
                        <div className='home21'>
                            <div className='home22'>
                                <span>Search Name</span>
                            </div>
                            <p>Manish chhipa</p>
                        </div>
                        <div>
                            <hr className="vertical-line" />
                        </div>
                        <div className='home21'>
                            <div className='home22'>
                                <span>Search Phone Number</span>
                            </div>
                            <p>8978675645</p>
                        </div>
                        <div>
                            <hr className="vertical-line" />
                        </div>
                        <div className='home21'>
                            <div className='home22'>
                                <span>Search Status</span>
                            </div>
                            <p>Verified</p>
                        </div>
                        <div>
                            <hr className="vertical-line" />
                        </div>
                        <div className='home21'>
                            <div className='home22'>
                                <span>Search Lead Score</span>
                            </div>
                            <p>None</p>
                        </div>
                        <div>
                            <hr className="vertical-line" />
                        </div>
                        <div className='home21'>
                            <div className='home22'>
                                <span>Search Call Back Time</span>
                            </div>
                            <p>2023-Jun-02 12:00 AM</p>
                        </div>
                    </div>


                    <div className='home26'>
                        <div className='home23'>
                            <div className='home24'>
                                <p>Previous</p>
                            </div>
                            <div className='home25'><p>1</p></div>
                            <div className='home24'>
                                <p>Next</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Save show={show} onHide={() => setShow(false)} />
            <Discovery show={show1} onHide={() => setShow1(false)} />
        </>
    )
}

export default Home