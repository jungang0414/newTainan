import Card from "react-bootstrap/Card";
import silde3 from '../image/鮮凍金枕頭榴槤banner-6盒.jpg'

function MyCard() {
    return (
       <Card>
       <Card.Img variant="top" src={silde3} />
       <Card.Body>
         <Card.Text>
           金枕頭榴槤
         </Card.Text>
         <Card.Link href="https://www.youtube.com/embed/hKEER6eGmHY">Youtube</Card.Link>
       <Card.Link href="#">Podcast</Card.Link>
       </Card.Body>
     </Card>

    );
}

export default MyCard;

