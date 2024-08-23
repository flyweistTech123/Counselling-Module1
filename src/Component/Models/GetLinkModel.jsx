import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Model.css"
import Select from 'react-select';
import { useState } from 'react';

function GetLinkModel(props) {
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
            <p>Cart link for SAM Global Universities</p>
           </div>
      
        </Modal.Header>
        <Modal.Body>
          <div className='cifModel-container'>
            <p>Available courses (Please choose a course to add in cart)</p>

            <div className='select-library'>
            <Select
            isMulti
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
            </div>

            <div className='cif-search'>
               <input type="text" />
               <button className='back-blue'>Send Link</button>
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
            <div className='cif-footer'>
            <Button className='cif-footer-button' onClick={props.onHide}>Remove College from cart</Button>
            <Button onClick={props.onHide}>Get Link</Button>
            <Button className='cif-footer-button' onClick={props.onHide}>Cancel</Button>
            </div>
        
        </Modal.Footer>
      </Modal>
    );
  }

  export default GetLinkModel;