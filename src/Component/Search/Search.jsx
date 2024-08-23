import React, { useState } from 'react';
import './search.css'
import Add from '../../image/Add.png';
import Arrow from '../../image/arrow.png';
import Phone from '../../image/icon_phone.png';
import Solid from '../../image/solid_phone.png';
import Notepad from '../../image/search1.png';
import Navbar from '../Navbar/Navbar';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-phone-input-2/lib/style.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const data = [
  { "id": "1", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "2", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "3", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "4", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "5", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "6", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "7", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "8", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "9", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "10", "college": "Jagran Lakecity University", "student": "5" },
];

const data1 = [
  { "id": "1", "Date": "02/jun/2023", "CallbackCount": "1" },
  { "id": "2", "Date": "03/jun/2023", "CallbackCount": "1" },
  { "id": "3", "Date": "04/jun/2023", "CallbackCount": "1" },
  { "id": "4", "Date": "05/jun/2023", "CallbackCount": "1" },
  { "id": "5", "Date": "06/jun/2023", "CallbackCount": "1" },
  { "id": "6", "Date": "07/jun/2023", "CallbackCount": "1" },
  { "id": "7", "Date": "08/jun/2023", "CallbackCount": "1" },
  { "id": "8", "Date": "09/jun/2023", "CallbackCount": "1" },
  { "id": "9", "Date": "10/jun/2023", "CallbackCount": "1" },
  { "id": "11", "Date": "11/jun/2023", "CallbackCount": "1" },
  { "id": "12", "Date": "12/jun/2023", "CallbackCount": "1" },
  { "id": "13", "Date": "13/jun/2023", "CallbackCount": "1" },
  { "id": "14", "Date": "14/jun/2023", "CallbackCount": "1" },
  { "id": "15", "Date": "15/jun/2023", "CallbackCount": "1" },
];





export const Search = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  function ADDstudent(props) {
 
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h6 className='addstudent'>Add New Student</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='addstudent1'>
            <div className='addstudent2'>
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className='addstudent2'>
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className='addstudent2'>
              <label htmlFor="">Country Code</label>
              <select name="" id="">
                <option value="">+91       India</option>
              </select>
            </div>
            <div className='addstudent2'>
              <label htmlFor="">Phone Number</label>
              <input type="text" placeholder='Mobile No' />
            </div>
            <div className='addstudent2'>
              <label htmlFor="">Current State</label>
              <select name="" id="">
                <option value="">Select state</option>
              </select>
            </div>
            <div className='addstudent2'>
              <label htmlFor="">Preferred Stream</label>
              <select name="" id="">
                <option value="">Select stream</option>
              </select>
            </div>
            <div className='addstudent2'>
              <label htmlFor="">Year of Admission</label>
              <select name="" id="">
                <option value="">Select year of admission</option>
              </select>
            </div>
            <div className='addstudent2'>
              <label htmlFor="">Source</label>
              <select name="" id="">
                <option value="">Select source</option>
              </select>
            </div>
            <div className='addstudent2'>
              <label htmlFor="">Source</label>
              <select name="" id="">
                <option value="">Select board</option>
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='addstudent3'>
            <button onClick={()=>setShow(false)}>Close</button>
            <button>Save</button>
          </div>
        </Modal.Footer>
      </Modal >
    );
  }

  const [show1, setShow1] = useState(false);

  function Lead(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h6 className='addstudent'>Interested Lead-9</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='lead'>
            <table>
              <thead>
                <tr>
                  <th>Collegehub
                    Recommended
                    Leads</th>
                  <th>Moderate
                    Leads</th>
                  <th>Hot
                    Leads</th>
                  <th>Form
                    Filled
                    Leads</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>9</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>

        </Modal.Body>
      </Modal >
    );
  }


  const [show2, setShow2] = useState(false);

  function Callback(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ top: 0, bottom: 0 }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h6 className='addstudent'>Call back Leads</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='callbacklead'>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Callback Count</th>
                </tr>
              </thead>
              <tbody>
                {data1.map((item) => (
                  <tr key={item.id}>

                    <td>{item.Date}</td>
                    <td>{item.CallbackCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </Modal.Body>
      </Modal >
    );
  }
  return (
    <>
      <Navbar />

      <div className="search01">
        <div className="search03">
          <div className="search04">
            <span>All time Lead</span>
            <span>9</span>
          </div>
          <div className="search04">
            <span>Taken Admission Leads</span>
            <span>0</span>
          </div>

        </div>

        <div className="search05">

          <button className="search06" onClick={() => setShow(true)}>
            Add New Student
          </button>
          <button className="search07">
            View All 9 Leads
          </button>
        </div>
        <div className="search08">
          <div className="search13">
            <div className="search09" onClick={() => navigate('/newassignmentlead')}>
              <img src={Add} alt="icon" />
              <div className="add">
                <span>0</span>
                <span>New Assignment Lead</span>
              </div>
            </div>


            <div className="arrow">
              <span>New Assignment Lead</span>
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className="search13">
            <div className="search10">
              <img src={Phone} alt="icon" />
              <div className="add1">
                <span>9</span>
                <span>Interested Lead</span>
              </div>

            </div>
            <div className="arrow" onClick={() => setShow1(true)}>
              <span>Interested Lead</span>
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className="search13">
            <div className="search10">
              <img src={Solid} alt="icon" />
              <div className="add1">
                <span>0</span>
                <span>Callback Lead</span>
              </div>

            </div>
            <div className="arrow" onClick={() => setShow2(true)}>
              <span>Callback Lead</span>
              <img src={Arrow} alt="arrow" />
            </div>
          </div>

          <div className="search13">
            <div className="search10" onClick={() => navigate('/newassignmentlead')}>
              <img src={Notepad} alt="icon" />
              <div className="add1">
                <span>0</span>
                <span>Favourite marked Lead</span>
              </div>
            </div>
            <div className="arrow">
              <span>Favourite marked Lead</span>
              <img src={Arrow} alt="arrow" />
            </div>
          </div>

        </div>
        <div className="search14">
          <div className="search15">
            <span>Institute wise filter</span>
          </div>
          <div className="search16">
            <table className="custom-table">
              <thead>
                <tr>

                  <th>College</th>
                  <th>Student</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>

                    <td className='college1'>{item.college}</td>
                    <td>{item.student}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>




      </div>
      <ADDstudent show={show} onHide={() => setShow(false)} />
      <Lead show={show1} onHide={() => setShow1(false)} />
      <Callback show={show2} onHide={() => setShow2(false)} />
    </>
  )
}
