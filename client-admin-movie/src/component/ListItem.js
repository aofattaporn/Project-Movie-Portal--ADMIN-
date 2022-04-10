import { Container, Button, ButtonGroup, Modal } from 'react-bootstrap';
import '../style/CinemasPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import axios from 'axios';
import ProptTypes from 'prop-types';



const ListItem=(props)=>{
   
   const {id, title, delteteFunc} = props;

   const [show, setShow] = useState(false);

   const handleClose = async () =>{
      
      // request delete 
      await axios.delete(`http://localhost:4000/cinemas/delete/${id}`)
      .then((response)=>{ 
         // delete
         delteteFunc(id);
         response.data({});
      })
      .catch((error) => {console.log(`Error ${error}`)});
   
      setShow(false)
   };

   const handleCloseDontDelete =()=> setShow(false);

   const handleShow = () => setShow(true);

   return(
      
      <Container className='mb-2' fluid>
         <div className='list' >
            <div className='list__title'>
               <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
               <h6>{title}</h6>
            </div>

            <ButtonGroup>
               <Button variant="primary"> Edit </Button>
               <Button variant="danger" onClick={handleShow}> delete </Button> 

               <Modal aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                     <Modal.Title>Confilm Delete</Modal.Title>
                        </Modal.Header>
                        <Modal.Body> Are you sure you want to delete ? </Modal.Body>
                        <Modal.Footer>
                           <Button variant="secondary" onClick={handleCloseDontDelete}> cancle </Button>
                           <Button variant="danger" onClick={handleClose}> delete </Button>
                        </Modal.Footer>
               </Modal>

            </ButtonGroup>
         </div>
      </Container>
   );
}

ListItem.propTypes = {
   id: ProptTypes.string,
   title: ProptTypes.string,
   delteteFunc: ProptTypes.func
}


export default ListItem;