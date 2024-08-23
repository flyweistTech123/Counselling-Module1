import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Model.css"

function Cif1Model(props) {
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

            <div className='cif-search'>
               <input type="text" />
               <button>Send Link</button>
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
            <div className='cif-footer'>
            <Button onClick={props.onHide}>Get Link</Button>
            <Button className='cif-footer-button' onClick={props.onHide}>Cancel</Button>
            </div>
        
        </Modal.Footer>
      </Modal>
    );
  }

  export default Cif1Model;