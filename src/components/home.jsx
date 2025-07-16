import React from 'react';
import './home.css';

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <h1>Book Your Journey with Ease</h1>
        <p>Fast, comfortable, and reliable bus travel across cities. Compare routes, choose your seat, and travel your way.</p>
        <button className="book-btn">Search Buses</button>
      </section>

      <section className="features">
        <h2>Why Travel With Us?</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>🚌 Multiple Bus Operators</h3>
            <p>Choose from a wide range of private and government bus services.</p>
          </div>
          <div className="feature">
            <h3>📍 Real-Time Tracking</h3>
            <p>Track your bus live and stay updated with its location.</p>
          </div>
          <div className="feature">
            <h3>💺 Seat Selection</h3>
            <p>Pick your preferred seat before you board.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
