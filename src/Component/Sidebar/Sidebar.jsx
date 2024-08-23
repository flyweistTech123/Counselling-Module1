import React, { useState } from 'react'
import { BsPersonFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const Sidebar = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const questionsAndAnswers = [
        {
            id: 1,
            question: 'Source',
            answers: [
                { label: 'Web', checked: true },
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
    const handleFilterClick = (id) => {
        setSelectedQuestion(id === selectedQuestion ? null : id);
    };
    const getArrowIcon = (id) => {
        return selectedQuestion === id ? <FaAngleDown /> : <FaChevronRight />;
    };
    const handleCheckboxChange = (id) => {

    };





    const [value, onChange] = useState(new Date());
    const popover = (
        <Popover id="popover-basic"
            style={{ border: 'none' }}
        >
            <Popover.Body className='datepicker1' >
                <div>
                    <div className='datepicker3'>
                        <Calendar onChange={onChange} value={value} className="datepicker2" style={{ border: 'none' }} />
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
                                        onClick={() => handleFilterClick(qa.id)}
                                    >
                                        <span>{qa.question}</span>
                                        <div className="arrow-button">{getArrowIcon(qa.id)}</div>
                                    </div>
                                    {selectedQuestion === qa.id && (
                                        <div className="answer">
                                            {qa.answers.length > 0 ? (
                                                <>
                                                    <input type="search" name="" id="" className='search1' placeholder='Search' />
                                                </>
                                            ) : (
                                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                                    <div className='datepicker'>
                                                        <span>DD/MM/YYYY</span>
                                                        <span>-</span>
                                                        <span>DD/MM/YYYY</span>
                                                    </div>
                                                </OverlayTrigger>
                                            )}

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
        </>
    )
}

export default Sidebar