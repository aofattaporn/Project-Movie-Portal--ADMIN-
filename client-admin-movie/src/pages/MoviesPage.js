import { Fragment, useState } from "react";
import {Container, Form, Button} from "react-bootstrap";

const MoviePage=()=>{

   //state 
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const [data, setData] = useState({
      username: '',
      email: '',
      password: ''
   });

   // function set Change 
   const onchangeName=(e)=>{
      setName(e.target.value)
   }

   const onchangeEmail=(e)=>{
      setEmail(e.target.value)
   }

   const onchangePassword=(e)=>{
      setPassword(e.target.value)
   }

   const onSubmit=(e)=>{
      setData(
         {
            username: name,
            email: email,
            password: password
         }
      );
      console.log(data);
   }

   return (
      <Fragment>

         {/* // content */}
         <div className="bg-start pt-5">
            <Container>
               <h1>Hello MoviePage</h1>
               <Container>
                  <Form className="me-5 ms-5" onSubmit={onSubmit}>
                     <Form.Group className="mb-5" controlId="testUser">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="text" placeholder="Input username" onChange={onchangeName}/>
                     </Form.Group>

                     <Form.Group className="mb-5" controlId="formEmail">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={onchangeEmail}/>
                     </Form.Group>

                     <Form.Group className="mb-5" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={onchangePassword}/>
                     </Form.Group>

                        <Button variant="secondary" size="lg" onClick={onSubmit}>
                           Block level button
                        </Button>
                  </Form>
               </Container>
            </Container>
         </div>


         <div className="fragment-Homepage">
         </div>
      </Fragment>
   )
} 

export default MoviePage;