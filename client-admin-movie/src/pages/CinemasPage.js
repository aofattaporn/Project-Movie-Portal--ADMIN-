import { Fragment, useEffect, useState } from "react";
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import '../style/CinemasPage.css';
import ListItem from "../component/ListItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const CinemasPage=()=>{

   const [cinemas, setCinemas] = useState([]);

   const getCinemas=()=>{
      axios.get('http://localhost:4000/cinemas')
      .then((response)=>{ 
         const Allcinema = response.data;
         setCinemas(Allcinema);
      })
      .catch((error) => {console.log(`Error ${error}`)})
   };

   const deleteCinema=(index)=>{
      cinemas.filter((item)=>{
         item._id != index;
      });

      setCinemas(cinemas);
   }

   
   useEffect(() => {
      getCinemas();

    }, [] );


   return (
      <Fragment >
         <div className="bg-1">
            <Container className="pt-5">
               <Container className="mt-5">
                  <Row>
                     <Col xl='2' lg='1'></Col>
                     <Col xl='8' lg='10'>
                        <Container fluid>
                           <div className="veiw__header">
                              <h1>View Cinemas</h1>
                              <Button variant="primary"><FontAwesomeIcon icon={faPlusCircle}/ ></Button>
                           </div>
                        </Container>
                        <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                           <Accordion.Header key={0}> Bangkok </Accordion.Header>
                           <Accordion.Body className="collaped">
                              {
                                 cinemas.filter(cinema => cinema.cinema_area === "กรุงเทพ")   
                                 .map((item, index) => 
                                    <ListItem key={index.toString()} delteteFunc={deleteCinema} id={item._id.toString()} title={item.cinema_name}/> 
                                 )
                                 
                              }
                           </Accordion.Body>                     
                        </Accordion.Item>

                        {/* <Accordion.Item eventKey="1">
                           <Accordion.Header> Central </Accordion.Header>
                           <Accordion.Body>
                              {
                                 cinemas.filter(cinema => cinema.cinema_area === "กลาง")   
                                 .map((item) => <ListItem key={item.id} title={item.cinema_name}/> )
                              }
                              <Accordion.Item></Accordion.Item>
                           </Accordion.Body>                     
                        </Accordion.Item> */}

                        {/* <Accordion.Item eventKey="2">
                           <Accordion.Header> Central </Accordion.Header>
                           <Accordion.Body>
                              {
                                 cinemas.filter(cinema => cinema.cinema_area === "เหนือ")   
                                 .map((item) => <ListItem key={item.id} title={item.cinema_name}/> )
                              }
                           </Accordion.Body>                     
                        </Accordion.Item> */}

                        {/* <Accordion.Item eventKey="3">
                           <Accordion.Header> Central </Accordion.Header>
                           <Accordion.Body>
                              {
                                 cinemas.filter(cinema => cinema.cinema_area === "ใต้")   
                                 .map((item) => <ListItem key={item.id} title={item.cinema_name}/> )
                              }
                           </Accordion.Body>                     
                        </Accordion.Item> */}

                        {/* <Accordion.Item eventKey="4">
                           <Accordion.Header> Central </Accordion.Header>
                           <Accordion.Body>
                              {
                                 cinemas.filter(cinema => cinema.cinema_area === "อีสาร")   
                                 .map((item) => <ListItem key={item.id} title={item.cinema_name}/> )
                              }
                           </Accordion.Body>                     
                        </Accordion.Item> */}
                        </Accordion>
                     </Col>
                     <Col xl='2' lg='1'></Col>
                  </Row>
               </Container>
            </Container>
         </div>
         <footer className="bg-2" >
            
         </footer>
      </Fragment>
   )
} 

export default CinemasPage;