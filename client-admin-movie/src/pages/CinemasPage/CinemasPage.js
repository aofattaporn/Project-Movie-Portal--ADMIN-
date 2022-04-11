import { Fragment, useEffect, useState } from "react";
import { Accordion, Button, Col, Container, Row,  } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../style/CinemasPage.css';
import ListItem from "../../component/ListItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const CinemasPage=()=>{

   const [cinemas, setCinemas] = useState([]);
   const [isDelete, setIsDeletee] = useState(false);

   const getCinemas=()=>{
      axios.get('http://localhost:4000/cinemas')
      .then((response)=>{ 
         const Allcinema = response.data;
         setCinemas(Allcinema);
      })
      .catch((error) => {console.log(`Error ${error}`)})
   };

   const deleteCinema=(id)=>{
      cinemas.filter((item)=> item._id !== id);
      setCinemas(cinemas);
      setIsDeletee(false);
   }
 
   useEffect(() => {
      getCinemas();
      setIsDeletee(true);
      console.log('refresh');
   }, [isDelete] );

   return (
      <Fragment>
         <div className="container-1">
            <Container className="pt-5">
               <Container className="mt-5">
                  <Row>
                     <Col xl='2' lg='1'></Col>
                     <Col xl='8' lg='10'>
                        <Container fluid className="box-cinemas">
                           <div className="box-cinemas__header">
                              <h1>View Cinemas</h1>
                              <Link className='link' to={'/cinemas/create'}>
                                 <Button variant="primary">
                                       <FontAwesomeIcon icon={faPlusCircle}/>
                                 </Button>
                              </Link>
                           </div>
                        </Container>                        
                        <Accordion className="box-cinemas__accordion" defaultActiveKey="0">

                           <Accordion.Item eventKey="0">
                              <Accordion.Header key={0}> Bangkok </Accordion.Header>
                              <Accordion.Body className="collaped">
                                 { 
                                    cinemas.filter(cinema => cinema.cinema_area === "กรุงเทพ")   
                                    .map(
                                       (item, index) => 
                                       <ListItem key={index.toString()} delteteFunc={deleteCinema} id={item._id.toString()} title={item.cinema_name}/> 
                                    )    
                                 }
                              </Accordion.Body>                     
                           </Accordion.Item>

                           <Accordion.Item eventKey="1">
                              <Accordion.Header key={1}> Central </Accordion.Header>
                              <Accordion.Body className="collaped">
                                 {
                                    cinemas.filter(cinema => cinema.cinema_area === "กลาง")   
                                    .map((item, index) => 
                                       <ListItem key={index.toString()} delteteFunc={deleteCinema} id={item._id.toString()} title={item.cinema_name}/> 
                                    )    
                                 }
                              </Accordion.Body>                     
                           </Accordion.Item>

                           <Accordion.Item eventKey="2">
                              <Accordion.Header key={2}> North </Accordion.Header>
                              <Accordion.Body className="collaped">
                                 {
                                    cinemas.filter(cinema => cinema.cinema_area === "เหนือ")   
                                    .map((item, index) => 
                                       <ListItem key={index.toString()} delteteFunc={deleteCinema} id={item._id.toString()} title={item.cinema_name}/> 
                                    )    
                                 }
                              </Accordion.Body>                     
                           </Accordion.Item>

                           <Accordion.Item eventKey="3">
                              <Accordion.Header> West </Accordion.Header>
                              <Accordion.Body>
                              {
                                    cinemas.filter(cinema => cinema.cinema_area === "ตะวันตก")   
                                    .map((item, index) => 
                                       <ListItem key={index.toString()} delteteFunc={deleteCinema} id={item._id.toString()} title={item.cinema_name}/> 
                                    )    
                                 }
                              </Accordion.Body>                     
                           </Accordion.Item>

                           <Accordion.Item eventKey="4">
                              <Accordion.Header> NortEast </Accordion.Header>
                              <Accordion.Body>
                              {
                                    cinemas.filter(cinema => cinema.cinema_area === "")   
                                    .map((item, index) => 
                                       <ListItem key={index.toString()} delteteFunc={deleteCinema} id={item._id.toString()} title={item.cinema_name}/> 
                                    )    
                                 }
                              </Accordion.Body>                     
                           </Accordion.Item>

                           <Accordion.Item eventKey="5">
                              <Accordion.Header> South </Accordion.Header>
                              <Accordion.Body>
                              {
                                    cinemas.filter(cinema => cinema.cinema_area === "ใต้")   
                                    .map((item, index) => 
                                       <ListItem key={index.toString()} delteteFunc={deleteCinema} id={item._id.toString()} title={item.cinema_name}/> 
                                    )    
                                 }
                              </Accordion.Body>                     
                           </Accordion.Item>

                           <Accordion.Item eventKey="6">
                              <Accordion.Header> East </Accordion.Header>
                              <Accordion.Body>
                              {
                                    cinemas.filter(cinema => cinema.cinema_area === "ตะวันออก")   
                                    .map((item, index) => 
                                       <ListItem key={index.toString()} delteteFunc={deleteCinema} id={item._id.toString()} title={item.cinema_name}/> 
                                    )    
                                 }
                              </Accordion.Body>                     
                           </Accordion.Item>
                           
                        </Accordion>
                     </Col>
                     <Col xl='2' lg='1'></Col>
                  </Row>
               </Container>
            </Container>
         </div>
      </Fragment>
   )
} 

export default CinemasPage;