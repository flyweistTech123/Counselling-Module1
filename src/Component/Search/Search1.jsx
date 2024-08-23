import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Search1.css"

function MySearchModel(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          
           <div className='Search-container'>
            <p>Select Institute to Shortlist</p>
           </div>
      
        </Modal.Header>
        <Modal.Body>
          <div className='search_input'>
            <input placeholder='Search by Institute Name, City, Short Name '/>
          </div>
        </Modal.Body>
        <Modal.Footer>
            <div className='Search_footer'>
            <Button onClick={props.onHide}>Cancel</Button>
            </div>
        
        </Modal.Footer>
      </Modal>
    );
  }

  export default MySearchModel;