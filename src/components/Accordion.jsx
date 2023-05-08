import Accordion from 'react-bootstrap/Accordion';
import Cards from '../components/Cards';

function AllCollapseExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>台南知音 #1</Accordion.Header>
        <Accordion.Body>  
            <Cards/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>台南知音 #2</Accordion.Header>
        <Accordion.Body>  
            <Cards/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;