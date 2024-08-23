import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Model.css"

function MessageModel(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
           <div className='Search-container'>
            <p>Select SMS/Email to Send</p>
           </div>
      
        </Modal.Header>
        <Modal.Body>
          
        <div className='message-container'>
        <select name="" id="">
        <optgroup label="SMS">
            <option value="not-interested-partner-college">Not Interested in partner college</option>
            <option value="rnr-nr-so">RNR/NR/SO</option>
            <option value="call-back">Call Back</option>
            <option value="first-level-counselling-completed">First Level counselling completed</option>
            <option value="form-filled">Form Filled</option>
            <option value="gd-pi-arranged">GD/PI Arranged -Best of Luck</option>
            <option value="cart-sms">Cart SMS</option>
            <option value="congrats-admission-done">Congrats- Admission Done</option>
            <option value="send-new-caf-link">Send New CAF Link</option>
        </optgroup>
        <optgroup label="Email">
            <option value="send-to-user-pay">Send to User pay</option>
            <option value="form-filled-email">Form Filled</option>
            <option value="not-interested-email">Not Interested</option>
            <option value="gd-pi-email">GD/PI</option>
            <option value="taken-admission">Taken Admission</option>
            <option value="send-user-shortlist">Send user shortlist</option>
        </optgroup>
    </select>

            <p>Email Related Fields</p>

            <div>
                <div>
                    <label>Counsellor Name</label>
                    <input type="text" />
                </div>
                <div>
                <label>Counsellor Number</label>
                <input type="text" />
                </div>
            </div>
        </div>
       
        </Modal.Body>
        <Modal.Footer>
            <div className='cif-footer'>
            <Button onClick={props.onHide}>Send SMS to Lead</Button>
            <Button onClick={props.onHide}>Send Email to Lead</Button>
            <Button className='cif-footer-button' onClick={props.onHide}>Cancel</Button>
            </div>
        
        </Modal.Footer>
     
      </Modal>
    );
  }

  export default MessageModel;