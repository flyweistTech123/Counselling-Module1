import React, { useState } from 'react'
import './NewAssignment.css'
import Navbar from '../Navbar/Navbar'
import { BsPersonFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sort from '../../image/sort.png'
import { IoIosSearch } from "react-icons/io";




const NewAssignment = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const questionsAndAnswers = [
        {
            id: 1,
            question: 'Source',
            answers: [
                { label: 'Web', checked: false },
                { label: 'App', checked: false },
                { label: 'Ninja', checked: false },
                { label: 'Raw Lead', checked: false },
                { label: 'Sheet', checked: false },
                { label: 'Common Application Form', checked: false },
                { label: 'Common Application Form SDK', checked: false },
                { label: 'WAP', checked: false },
                { label: 'Offline Kiosk', checked: false },
                { label: 'Landing', checked: false },
                { label: 'SDK', checked: false },
                { label: 'Connecto', checked: false },
                { label: 'Facebook', checked: false },
                { label: 'Affiliate', checked: false },
                { label: 'SMS', checked: false },
                { label: 'Missed Call', checked: false },
                { label: 'Truecaller App', checked: false },
                { label: 'Coaching', checked: false },
                { label: 'CAF Affiliate', checked: false },
                { label: 'IVR', checked: false },
                { label: 'Sheet 2', checked: false },
                { label: 'Exam App', checked: false },
                { label: 'Study Abroad', checked: false },
                { label: 'Web Application', checked: false },
                { label: 'Just Dial', checked: false },
                { label: 'Affiliate Offline', checked: false },
                { label: 'School Connect', checked: false },
                { label: 'Third Party Couselling', checked: false },
                { label: 'School Student Dashboard', checked: false },
                { label: 'School Student Self', checked: false },
                { label: 'Chatbot', checked: false },
                { label: 'Counsellor', checked: false },
                { label: 'Premium Counselling', checked: false },
                { label: 'Incoming', checked: false },
                { label: 'Publisher', checked: false },
                { label: 'Missing Lead', checked: false },
                { label: 'Referral', checked: false },
                { label: 'GMU', checked: false },
                { label: 'ZOHO_CHAT_BOT', checked: false },
                { label: 'GMUSER_REFERREDU', checked: false },
                { label: 'TEST_LEAD', checked: false },
                { label: 'Education Fair', checked: false },
            ],
        },
        {
            id: 2,
            question: 'Stream',
            answers: [
                { label: 'Engineering', checked: false },
                { label: 'Management', checked: false },
                { label: 'Medical', checked: false },
                { label: 'Commerce and Banking', checked: false },
                { label: 'Information Technology', checked: false },
                { label: 'Arts and Humanities', checked: false },
                { label: 'Design', checked: false },
                { label: 'Hotel Management', checked: false },
                { label: 'Physical Education', checked: false },
                { label: 'Science', checked: false },
                { label: 'Media and Mass Communication', checked: false },
                { label: 'Vocational', checked: false },
                { label: 'Law', checked: false },
                { label: 'Education', checked: false },
                { label: 'Paramedical', checked: false },
                { label: 'Agriculture', checked: false },
                { label: 'Nursing', checked: false },
                { label: 'Pharmacy', checked: false },
                { label: 'Dental', checked: false },
                { label: 'Performing Arts', checked: false },
                { label: 'Others', checked: false },
            ],
        },
        {
            id: 3,
            question: 'Level',
            answers: [
                { label: 'UG', checked: false },
                { label: 'PG', checked: false },
                { label: 'Diploma', checked: false },
                { label: 'Ph.D', checked: false },
                { label: 'Certificate', checked: false },
            ],
        },
        {
            id: 4,
            question: 'Call Status',
            answers: [
                { label: 'Interested in Partner College', checked: false },
                { label: 'Not Interested in Partner College', checked: false },
                { label: 'Call Back Later', checked: false },
                { label: 'Wrong Invalid Number', checked: false },
                { label: 'Ringing No Response', checked: false },
                { label: 'Not Interested too many tries', checked: false },
            ],
        },
        {
            id: 5,
            question: 'College Status',
            answers: [
                { label: 'CollegeHUB_Reco', checked: false },
                { label: 'Interested', checked: false },
                { label: 'First Level Counselling Completed', checked: false },
                { label: 'Next Level Counselling Completed', checked: false },
                { label: 'Pre form fill drop not interested anymore', checked: false },
                { label: 'Pre form fill drop next year', checked: false },
                { label: 'Pre admission finacial problem', checked: false },
                { label: 'Interested in Partner College', checked: false },
                { label: 'Interested in Partner College', checked: false },
                { label: 'Interested in Partner College', checked: false },
                { label: 'Interested in Partner College', checked: false },
                { label: 'Interested in Partner College', checked: false },
                { label: 'Interested in Partner College', checked: false },
                { label: 'Interested in Partner College', checked: false },
            ],
        },
        {
            id: 6,
            question: 'Lead Status',
            answers: [
                { label: 'Fresh', checked: false },
                { label: 'Pre-Application-Low', checked: false },
                { label: 'Pre-Application-High', checked: false },
                { label: 'NI-Pre-Application', checked: false },
                { label: 'Applied', checked: false },
                { label: 'Pipeline', checked: false },
                { label: 'NI-Pre-Admission', checked: false },
                { label: 'Taken Admission', checked: false },
                { label: 'NI-Post-Admission', checked: false },
                { label: 'Wrong Number', checked: false },
            ],
        },
        {
            id: 7,
            question: 'Institutes',
            answers: [
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
                { label: 'Loren Epsom', checked: false },
            ],
        },
        {
            id: 6,
            question: 'Assignment type',
            answers: [
                { label: 'All', checked: false },
                { label: 'CSL', checked: false },
                { label: 'CLL', checked: false },
            ],
        },
        {
            id: 8,
            question: 'Lead Score',
            answers: [
                { label: '0-10', checked: false },
                { label: '11-20', checked: false },
                { label: '21-30', checked: false },
                { label: '31-40', checked: false },
                { label: '41-50', checked: false },
                { label: '51-60', checked: false },
                { label: '61-70', checked: false },
                { label: '71-80', checked: false },
                { label: '81-90', checked: false },
                { label: '91-100', checked: false },
            ],
        },
        {
            id: 9,
            question: 'My filters',
            answers: [


            ],
        },
        {
            id: 10,
            question: 'Callback Date',
            answers: [


            ],
        },
        {
            id: 11,
            question: 'Form Filled Date',
            answers: [


            ],
        },
        {
            id: 12,
            question: 'Taken Admission Date',
            answers: [


            ],
        },
    ];
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

    const handleQuestionClick = (id) => {
        setSelectedQuestion(id === selectedQuestion ? null : id);
    };
    const getArrowIcon = (id) => {
        return selectedQuestion === id ? <FaAngleDown /> : <FaChevronRight />;
    };
    const handleCheckboxChange = (id) => {

    };
    const [show, setShow] = useState(false);

    const handleclick = () => {
        setShowdata(true)
        setShow(false)
    }

    function Sort(props) {
        console.log("Hello");
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
                <div className='home8'>
                    <div className='home9'>
                        <button>Clear Filters</button>
                    </div>
                    <div className='home10'>
                        <div className='home11'>
                            <BsPersonFill className='home12' />
                            <h6>Filter</h6>
                        </div>
                        <FaAngleDown className='home12' />
                    </div>

                    <div className='home13'>
                        <div className='helpdesk-container'>
                            <div className='helpdeskquestion'>
                                {questionsAndAnswers.map((qa) => (
                                    <div key={qa.id} className="faq-item">
                                        <div
                                            className={`question ${selectedQuestion === qa.id ? 'open' : ''}`}
                                            onClick={() => handleQuestionClick(qa.id)}
                                        >
                                            <span>{qa.question}</span>
                                            <div className="arrow-button">{getArrowIcon(qa.id)}</div>
                                        </div>
                                        {selectedQuestion === qa.id && (
                                            <div className="answer">
                                                <input type="search" name="" id="" className='search1' placeholder='Search' />
                                                {qa.answers.map((answer, index) => (
                                                    <div key={index} className="checkbox-container">
                                                        <input
                                                            type="checkbox"
                                                            id={`checkbox-${qa.id}-${index}`}
                                                            checked={answer.checked}
                                                            onChange={() => handleCheckboxChange(qa.id, index)}
                                                        />
                                                        <label htmlFor={`checkbox-${qa.id}-${index}`}>{answer.label}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


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
                                        <tr key={item.id}>
                                            <td>{item.Lead}</td>
                                            <td>{item.Name}</td>
                                            <td>{item.Email}</td>
                                            <td>{item.City}</td>
                                            <td>{item.Phone}</td>
                                            <td>{item.LeadStatus}</td>
                                            <td>{item.Source}</td>
                                            <td>{item.Callback}</td>
                                            <td>{item.Addedon}</td>
                                            <td>{item.Edit}</td>
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