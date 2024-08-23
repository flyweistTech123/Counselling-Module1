import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Model.css"



function CifNavBarModel(props) {


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
           <div className='Search-container'>
            <p>Share CAF Link</p>
           </div>
      
        </Modal.Header>
        <Modal.Body>
          <div style={{height:"40vh"}}>

            <p style={{textAlign:"center"}}>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

          </div>
        </Modal.Body>
     

      </Modal>
    );
  }

  export default CifNavBarModel;