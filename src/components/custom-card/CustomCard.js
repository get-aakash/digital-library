import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./customCardStyle.css";
import Ratings from '../ratings/Ratings';

export const CustomCard = ({title, thumbnail, summary, ratings})=> {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={thumbnail} height="200px" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{summary}</Card.Text>
        <Ratings ratings={ratings} />
        
       
      </Card.Body>
    </Card>
  );
}

