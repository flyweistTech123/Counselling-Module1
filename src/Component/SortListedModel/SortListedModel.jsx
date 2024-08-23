import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './shortListedModel.css'
import { useState } from 'react';


function GetChildModel(props) {
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
         <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
        <div className='shortListed-container'>
          <p>Get Shortlisted Colleges</p>
        </div>
        </Modal.Title>
      </Modal.Header>
       
        <Modal.Body>
         
         <div className='shortListed-model'>
            <textarea
            rows={5}
            style={{ width: "100%" }}
            />
         </div>


        </Modal.Body>

        <Modal.Footer>
            <div className='short-footer'>
            <Button onClick={props.onHide}>Send Shortlisted Link</Button>
            <Button onClick={props.onHide}>Cancel</Button>
            </div>
        
        </Modal.Footer>
      </Modal>
    );
  }

function SortListedModel(props) {
    const [childModel,setChildModel]=useState(false);

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
         <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
        <div className='shortListed-container'>
          <p>Get Shortlisted Colleges</p>
        </div>
        </Modal.Title>
      </Modal.Header>
       
        <Modal.Body>
         
         <div className='shortListed-model'>
            <p>Select shortlisted colleges</p>

            <textarea
            rows={5}
            style={{ width: "100%" }}
            />
         </div>

         <div className='shortListed-model'>
            <p>Content Type</p>

            <div>
                <div className='short-gap'>
                    <input type="radio" />
                    <label htmlFor="Video">Video</label>
                </div>
                <div className='short-gap'>
                    <input type="radio" />
                    <label htmlFor="Brochure">Brochure</label>
                </div>
                <div className='short-gap'>
                    <input type="radio" />
                    <label htmlFor="Select All">Select All</label>
                </div>
            </div>
         </div>

        </Modal.Body>

        <Modal.Footer>
            <div className='short-footer'>
            <Button onClick={()=>setChildModel(true)}>Proceed</Button>
            <Button onClick={props.onHide}>Cancel</Button>
            </div>
        
        </Modal.Footer>

        <GetChildModel
          show={childModel}
          onHide={() => setChildModel(false)}
        />
      </Modal>
    );
  }

  export default SortListedModel;