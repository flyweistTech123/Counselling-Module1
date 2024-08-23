import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Model.css"
import Select from 'react-select';
import { useState } from 'react';

function UpdateStatusModel(props) {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
           <div className='Search-container'>
            <p>Update Status for SAM Global University</p>
           </div>
      
        </Modal.Header>
        <Modal.Body>
          <div className='updateStatus-container'>
                <div>

                    <div>
                        <p>Update Status</p>
                    <select name="" id="">
                        <option value="">Interested</option>
                        <option value="">NotInterested</option>
                    </select>
                    </div>

                    <div>
                        <p>Expected Admission date</p>
                        <input type="date" name="" id="" />
                    </div>

                    <div>
                        <p>Shortlisted Courses</p>
                        <div className='cif-footer'>
            <Button >Diploma In EX</Button>
            <Button >Diploma In Mechanical Engineering</Button>
            </div>

                    </div>

                </div>

                <div>
                <div>
                        <p>Update Status</p>
                    <select name="" id="">
                        <option value="">First level counselling complete</option>
                        <option value="">Ready to fill form multiple</option>
                        <option value="">Form filled partner college</option>
                        <option value="">Walk in Reschedule</option>
                        <option value="">Walk In</option>
                        
                        
                    </select>
                    </div>
                </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
            <div className='cif-footer'>
            <Button onClick={props.onHide}>Update </Button>
            <Button className='cif-footer-button' onClick={props.onHide}>Cancel</Button>
            </div>
        
        </Modal.Footer>
      </Modal>
    );
  }

  export default UpdateStatusModel;