import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./PageNotFound.css"
import image from "../../image/imageNotFound.png"

function MyPageNotFoundModel(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
        <Modal.Body>
          <div className='page-not-found-image'>
            <img src={image} alt="Image not found" />
          </div>

          <h3 style={{textAlign:"center"}}>SORRY, NO INSTITUTE FOUND</h3>
          <p style={{textAlign:"center"}}>Please Enter preference and then try again</p>
        </Modal.Body>
        <Modal.Footer>
            <div className='Search_footer'>
            <Button onClick={props.onHide}>Cancel</Button>
            </div>
        
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyPageNotFoundModel;