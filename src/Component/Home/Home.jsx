import React, { useState } from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import { BsPersonFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
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
    const handleQuestionClick = (id) => {
        setSelectedQuestion(id === selectedQuestion ? null : id);
    };
    const getArrowIcon = (id) => {
        return selectedQuestion === id ? <FaAngleDown /> : <FaChevronRight />;
    };
    const handleCheckboxChange = (id) => {

    };
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
                            <button>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal >
        );
    }

    const [show1, setShow1] = useState(false);

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
                            <button>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal >
        );
    }

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
                                                <input type="serch" name="" id="" className='search1' />
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


                <div className='home14'>
                    <div className='home15'>
                        <button>Discovery Tools</button>
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
        </>
    )
}

export default Home