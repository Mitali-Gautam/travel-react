import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import HotelsService from './HotelsService'; 

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await HotelsService();
        setHotels(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };
    fetchHotels();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }

  return (
    <>
    <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: 'url(assets/images/bg_1.jpg)' , height: '304px'}}>
    <div className="overlay"></div>
    <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center" style={{height: '304px'}}>
        <div className="col-md-9 ftco-animate pb-5 text-center">
        <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="fa fa-chevron-right"></i></a></span> <span>Hotel <i className="fa fa-chevron-right"></i></span></p>
        <h1 className="mb-0 bread">Hotel</h1>
        </div>
    </div>
    </div>
    </section>

    <section className="ftco-section">
      <div className="container">
        <div className="row">
          {hotels.map(hotel => (
            <div key={hotel.id} className="col-md-4">
              <div className="project-wrap hotel">
                <a href="#" className="img" style={{backgroundImage:`url(${hotel.hotel_temp_image_name})`}}>
                  
                </a>
                <Card.Body className="text p-4">
                  
                  <p className="star mb-2">
                    {[...Array(hotel.star)].map((_, index) => (
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
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Hotels