import ProptTypes from 'prop-types';
import { Accordion } from 'react-bootstrap';
import ListItem from './ListItem';



const AccordionItemComp=(props)=>{

   const {cinema, eventKey, title, keyword} = props; 

   return (
      <Accordion.Item eventKey={eventKey}>
         <Accordion.Header> {title} </Accordion.Header>
         <Accordion.Body>
            {
               cinema.filter(cinemaItem => cinemaItem.cinema_area === {keyword})   
               .map((item) => <ListItem key={item.id} title={item.cinema_name}/> )
            }
         </Accordion.Body>                     
      </Accordion.Item>
   )
}

ListItem.propTypes = {
   cinema: ProptTypes.array,
   eventKey: ProptTypes.string,
   title: ProptTypes.string,
   keyword: ProptTypes.string
}

export default AccordionItemComp;