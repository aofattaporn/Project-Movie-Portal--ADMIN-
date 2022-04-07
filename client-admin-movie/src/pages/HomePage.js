import { Fragment } from "react"
import { Container  } from 'react-bootstrap';
import '../style/HomePage.css';


const HomePage=()=>{
   return (
      <Fragment >

         {/* // content */}
         <div className="bg-start">
            <Container>
               <h1>Hello</h1>
            </Container>
         </div>
         <div className="fragment-Homepage">
         </div>
         
      </Fragment>
   )
} 

export default HomePage;