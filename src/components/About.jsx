import React from 'react';
import './about.css';

const About = () => {
  return (
    <main className="about">
      <section className="about-intro">
        <h1>About RYOKO</h1>
        <p>
          RYOKO is your trusted travel partner offering a seamless experience for exploring the world. Whether it's a city-to-city bus, cross-country tour, or curated travel package, we bring comfort, convenience, and affordability under one platform.
        </p>
      </section>

      <section className="about-services">
        <h2>Our Services</h2>
        <ul>
          <li>🚌 Intercity and Interstate Bus Bookings</li>
          <li>✈️ Flight Bookings - Domestic & International</li>
          <li>🏨 Hotel Reservations with Exclusive Deals</li>
          <li>🚗 Cab & Car Rentals for Local and Outstation Travel</li>
          <li>🧭 Curated Tour Packages & Weekend Getaways</li>
          <li>📦 Custom Travel Planning for Groups & Corporates</li>
          <li>🛳️ Cruise and International Packages</li>
          <li>📍 Real-time Tracking and Alerts</li>
          <li>💼 24/7 Travel Assistance</li>
        </ul>
      </section>
    </main>
  );
};

export default About;
