import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Model.css"

function CafLinkModel(props) {


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
          

            <div style={{display:"flex",gap:"10px",padding:"5px 10px",width:"90%",margin:"auto"}}>
                <input type="checkbox"  />
                <label htmlFor="">Loren Epsom</label>
            </div>
          
            <div style={{display:"flex",gap:"10px",padding:"5px 10px",width:"90%",margin:"auto"}}>
                <input type="checkbox"  />
                <label htmlFor="">Loren Epsom</label>
            </div>

            <div style={{display:"flex",gap:"10px",padding:"5px 10px",width:"90%",margin:"auto"}}>
                <input type="checkbox"  />
                <label htmlFor="">Loren Epsom</label>
            </div>

            <div style={{display:"flex",gap:"10px",padding:"5px 10px",width:"90%",margin:"auto"}}>
                <input type="checkbox"  />
                <label htmlFor="">Loren Epsom</label>
            </div>

            <div style={{display:"flex",gap:"10px",padding:"5px 10px",width:"90%",margin:"auto"}}>
                <input type="checkbox"  />
                <label htmlFor="">Loren Epsom</label>
            </div>

            <div style={{display:"flex",gap:"10px",padding:"5px 10px",width:"90%",margin:"auto"}}>
                <input type="checkbox"  />
                <label htmlFor="">Loren Epsom</label>
            </div>

            <div style={{display:"flex",gap:"10px",padding:"5px 10px",width:"90%",margin:"auto"}}>
                <input type="checkbox"  />
                <label htmlFor="">Loren Epsom</label>
            </div>

            <div style={{display:"flex",gap:"10px",padding:"5px 10px",width:"90%",margin:"auto"}}>
                <input type="checkbox"  />
                <label htmlFor="">Loren Epsom</label>
            </div>

            <div style={{display:"flex",gap:"10px",padding:"5px 10px",width:"90%",margin:"auto"}}>
                <input type="checkbox"  />
                <label htmlFor="">Loren Epsom</label>
            </div>

            <div style={{display:"flex",gap:"10px",padding:"5px 10px",width:"90%",margin:"auto"}}>
                <input type="checkbox"  />
                <label htmlFor="">Loren Epsom</label>
            </div>

       
        </Modal.Body>
        <Modal.Footer>
            <div className='cif-footer'>
            <Button onClick={props.onHide} style={{backgroundColor:"#1D3969"}}>Show course of selected institute group </Button>
            <Button className='cif-footer-button' onClick={props.onHide}>Cancel</Button>
            </div>
        
        </Modal.Footer>
     
      </Modal>
    );
  }

  export default CafLinkModel;