import React from 'react';
import { Link } from 'react-router-dom';
import './services.css';

const Services = () => {
  const services = [
    { title: 'Bus Booking', description: 'Find intercity & interstate buses with seat selection.', link: '/', icon: '🚌' },
    { title: 'Flight Booking', description: 'Domestic & International flight bookings.', link: '/flights', icon: '✈️' },
    { title: 'Train Booking', description: 'Reserve train tickets across India.', link: '/trains', icon: '🚆' },
    { title: 'Hotel Booking', description: 'Book hotels at best prices.', link: '/hotels', icon: '🏨' },
    { title: 'Car Rentals', description: 'Rent cabs and self-drive cars.', link: '/cabs', icon: '🚗' },
  ];

  return (
    <section className="services-page">
      <h1 className="services-title">Our Premium Travel Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={service.link} className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button>Book Now</button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;