import React from 'react'
import CardItem from './CardItem'

const Cards = ({ hotels }) => {
  return (
    <section className="ftco-section">
        <div className="container">
            <div className="row">
                {hotels.map(hotel => (
                    <CardItem key={hotel.id} hotel={hotel} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Cards