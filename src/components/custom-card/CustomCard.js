import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./customCardStyle.css";
import Ratings from '../ratings/Ratings';
import { useDispatch } from 'react-redux';
import { setSelectedBook } from '../../pages/books/bookSlice';
import { useNavigate } from 'react-router-dom';

export const CustomCard = ({id, title, thumbnail, summary, ratings})=> {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleOnClick = ()=>{
    dispatch(setSelectedBook(id))

    navigate("/book/" + title)
  }
  return (
    <Card onClick={handleOnClick} style={{ width: '18rem' }} className='justify-content-center'>
      <Card.Img variant="top" src={thumbnail} height="200px" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{summary}</Card.Text>
        <Ratings ratings={ratings} />
        
      </Card.Body>
    </Card>
  );
}

