import React, { useState } from 'react'
import './NewAssignment.css'
import Navbar from '../Navbar/Navbar'
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sort from '../../image/sort.png'
import { IoIosSearch } from "react-icons/io";
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';



const NewAssignment = () => {
    const navigate=useNavigate();

    const data = [
        {
            "id": "1",
            "Lead": "Lead",
            "Name": "Name",
            "Email": "Email",
            "City": "City",
            "Phone": 'Phone no.',
            "LeadStatus": 'Lead Status',
            "Source": 'Source',
            "Callback": 'Callback',
            "Addedon": "Added on",
            "Edit": "Edit"
        },
        {
            "id": "2",
            "Lead": "Lead",
            "Name": "Name",
            "Email": "Email",
            "City": "City",
            "Phone": 'Phone no.',
            "LeadStatus": 'Lead Status',
            "Source": 'Source',
            "Callback": 'Callback',
            "Addedon": "Added on",
            "Edit": "Edit"
        },
        {
            "id": "3",
            "Lead": "Lead",
            "Name": "Name",
            "Email": "Email",
            "City": "City",
            "Phone": 'Phone no.',
            "LeadStatus": 'Lead Status',
            "Source": 'Source',
            "Callback": 'Callback',
            "Addedon": "Added on",
            "Edit": "Edit"
        },
        {
            "id": "4",
            "Lead": "Lead",
            "Name": "Name",
            "Email": "Email",
            "City": "City",
            "Phone": 'Phone no.',
            "LeadStatus": 'Lead Status',
            "Source": 'Source',
            "Callback": 'Callback',
            "Addedon": "Added on",
            "Edit": "Edit"
        },
        {
            "id": "5",
            "Lead": "Lead",
            "Name": "Name",
            "Email": "Email",
            "City": "City",
            "Phone": 'Phone no.',
            "LeadStatus": 'Lead Status',
            "Source": 'Source',
            "Callback": 'Callback',
            "Addedon": "Added on",
            "Edit": "Edit"
        },
        {
            "id": "6",
            "Lead": "Lead",
            "Name": "Name",
            "Email": "Email",
            "City": "City",
            "Phone": 'Phone no.',
            "LeadStatus": 'Lead Status',
            "Source": 'Source',
            "Callback": 'Callback',
            "Addedon": "Added on",
            "Edit": "Edit"
        },
        {
            "id": "7",
            "Lead": "Lead",
            "Name": "Name",
            "Email": "Email",
            "City": "City",
            "Phone": 'Phone no.',
            "LeadStatus": 'Lead Status',
            "Source": 'Source',
            "Callback": 'Callback',
            "Addedon": "Added on",
            "Edit": "Edit"
        },
        {
            "id": "8",
            "Lead": "Lead",
            "Name": "Name",
            "Email": "Email",
            "City": "City",
            "Phone": 'Phone no.',
            "LeadStatus": 'Lead Status',
            "Source": 'Source',
            "Callback": 'Callback',
            "Addedon": "Added on",
            "Edit": "Edit"
        },

    ];

  
    const [show, setShow] = useState(false);

    const handleclick = () => {
        setShowdata(true)
        setShow(false)
    }

    function Sort(props) {
        
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h6 className='savemodal'>Sort Lead</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='sort1'>
                        <div className='sort2'>
                            <label htmlFor="">Sort By:</label>
                            <select name="" id="">
                                <option value="">Lead By</option>
                                <option value="">Lead On</option>
                                <option value="">Name</option>
                                <option value="">Added On</option>
                            </select>
                        </div>
                        <div className='sort2'>
                            <label htmlFor="">Type:</label>
                            <select name="" id="">
                                <option value="">Ascending</option>
                                <option value="">Descending</option>
                            </select>
                        </div>

                        <div className='addstudent3'>
                            <button onClick={() => setShow(false)}>Close</button>
                            <button onClick={() => handleclick()}>Apply</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal >
        );
    }




    const [showdata, setShowdata] = useState(false)

    return (
        <>
            <Navbar />
            <div className='assignment'>
                <div className='assignment1'>
                    <div className='assignment2'>
                        <p>Search by name</p>
                    </div>
                    <div className='assignment2'>
                        <p>Search by email</p>
                    </div>
                    <div className='assignment2'>
                        <p>Search by Phone</p>
                    </div>
                    <div className='assignment2'>
                        <p>Start Date</p>
                    </div>
                    <div className='assignment2'>
                        <p>End Date</p>
                    </div>
                </div>

                <div className='assignment3'>
                    <button><IoIosSearch /> Search</button>
                    <button onClick={() => setShow(true)}> <img src={sort} alt="" /> Sort</button>
                    <button>Save filter</button>
                </div>
            </div>

            <div className='home7'>
               <Sidebar/>
                <div className='assignment4'>
                    <div className='assignment3'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Lead</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>City</th>
                                    <th>Phone no.</th>
                                    <th>Lead Status</th>
                                    <th>Source</th>
                                    <th>Callback</th>
                                    <th>Added on</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            {showdata ? (
                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item.id} >
                                            <td>{item.Lead}</td>
                                            <td>{item.Name}</td>
                                            <td>{item.Email}</td>
                                            <td>{item.City}</td>
                                            <td>{item.Phone}</td>
                                            <td>{item.LeadStatus}</td>
                                            <td>{item.Source}</td>
                                            <td>{item.Callback}</td>
                                            <td>{item.Addedon}</td>
                                            <td onClick={()=>navigate("/conversationActivity")} style={{cursor:"pointer"}}>{item.Edit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            ) : (
                                " "
                            )}

                        </table>
                    </div>
                </div>
            </div>
            <Sort show={show} onHide={() => setShow(false)} />
        </>
    )
}

export default NewAssignment;