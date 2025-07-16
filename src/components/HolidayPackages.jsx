import React, { useState } from 'react';
import './Booking.css';

const HolidayBooking = () => {
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Showing holiday packages for ${destination}`);
  };

  return (
    <div className="holiday-booking-container">
      <h2>🌴 Holiday Packages</h2>
      <p>Choose from curated holiday experiences.</p>

      <form className="holiday-form" onSubmit={handleSubmit}>
        <label>
          Destination:
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required />
        </label>
        <button type="submit">Explore Packages</button>
      </form>
    </div>
  );
};

export default HolidayBooking;
