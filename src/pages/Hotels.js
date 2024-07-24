import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
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

    <Cards hotels={hotels} />
    </>
  )
}

export default Hotels