import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardItem = ({ hotel }) => {
  return ( 
    <div className="col-md-4">
        <div className="project-wrap hotel">
        <a href="#" className="img" style={{backgroundImage:`url(${hotel.hotel_temp_image_name})`}}></a>
        <Card.Body className="text p-4">
            <p className="star mb-2">
            {[...Array(hotel.rating)].map((index) => (
                <span key={index} className="fa fa-star"></span>
            ))}
            </p>
            <Card.Title>
            <Card.Link href={`hotel/${hotel.id}`}>{hotel.name}</Card.Link>
            </Card.Title> 
            <p className="location"><span className="fa fa-map-marker"></span> {hotel.city?.name}, {hotel.country?.name}</p>
            <Button as="a" href="#" variant="primary">Book Now</Button>
        </Card.Body>
        </div>
    </div>
  )
}

export default CardItem