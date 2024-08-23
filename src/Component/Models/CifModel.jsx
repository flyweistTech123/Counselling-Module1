import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Model.css"
import Cif1Model from './Cif1Model'
import { useState } from 'react';

function CifModel(props) {
  const [show ,setShow]=useState(false);

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
           <div className='Search-container'>
            <p>Send CAF course link for SAM Global University</p>
           </div>
      
        </Modal.Header>
        <Modal.Body>
          <div className='cifModel-container'>

            <div className='short-gap'>
                <input type='radio'/>
                <label htmlFor="SAM Global University, Bhopal">SAM Global University, Bhopal</label>
            </div>

            <div className='backColor'>
               Select At least 1 institute group
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
            <div className='cif-footer'>
            <Button onClick={()=>setShow(true)}>Get Link</Button>
            <Button className='cif-footer-button' onClick={props.onHide}>Cancel</Button>
            </div>
        </Modal.Footer>
        <Cif1Model show={show} onHide={()=>setShow(false)}/>
      </Modal>
    );
  }

  export default CifModel;