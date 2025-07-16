import React, { useState } from 'react';
import './Booking.css';
import flights from './flightData';

const FlightBooking = () => {
  const [form, setForm] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1,
    travelClass: 'Economy',
  });

  const [results, setResults] = useState([]);
  const [cart, setCart] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const matched = flights.filter(f =>
      f.from.toLowerCase() === form.from.toLowerCase() &&
      f.to.toLowerCase() === form.to.toLowerCase() &&
      f.class === form.travelClass &&
      f.departure.startsWith(form.date)
    );

    setResults(matched);
  };

  const addFlight = (flight) => {
    setCart(prev => {
      const currentQty = prev[flight.id]?.passengers || 0;
      return {
        ...prev,
        [flight.id]: {
          ...flight,
          passengers: currentQty + 1,
          subtotal: (currentQty + 1) * flight.price
        }
      };
    });
  };

  const removeFlight = (flight) => {
    setCart(prev => {
      const currentQty = prev[flight.id]?.passengers || 0;
      if (currentQty > 1) {
        return {
          ...prev,
          [flight.id]: {
            ...flight,
            passengers: currentQty - 1,
            subtotal: (currentQty - 1) * flight.price
          }
        };
      } else {
        const newCart = { ...prev };
        delete newCart[flight.id];
        return newCart;
      }
    });
  };

  const totalPassengers = Object.values(cart).reduce((sum, item) => sum + item.passengers, 0);
  const totalFare = Object.values(cart).reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className="flight-booking-container">
      <h2>✈️ Flight Booking</h2>
      <p>Book domestic and international flights easily with RYOKO.</p>

      <form className="flight-form" onSubmit={handleSubmit}>
        <label>
          From:
          <input type="text" name="from" value={form.from} onChange={handleChange} placeholder="City or Airport" required />
        </label>

        <label>
          To:
          <input type="text" name="to" value={form.to} onChange={handleChange} placeholder="City or Airport" required />
        </label>

        <label>
          Date:
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
        </label>

        <label>
          Passengers:
          <input type="number" name="passengers" value={form.passengers} onChange={handleChange} min="1" max="10" />
        </label>

        <label>
          Class:
          <select name="travelClass" value={form.travelClass} onChange={handleChange}>
            <option value="Economy">Economy</option>
            <option value="Premium Economy">Premium Economy</option>
            <option value="Business">Business</option>
            <option value="First">First Class</option>
          </select>
        </label>

        <button type="submit">Search Flights</button>
      </form>

      {results.length > 0 && (
        <div className="results">
          <h3>Available Flights</h3>
          {results.map(flight => {
            const qty = cart[flight.id]?.passengers || 0;
            return (
              <div key={flight.id} className="flight-card">
                <p><strong>{flight.airline}</strong> ({flight.class})</p>
                <p>{flight.from} → {flight.to}</p>
                <p>Dep: {flight.departure} | Arr: {flight.arrival}</p>
                <p>Duration: {flight.duration} | ₹{flight.price} per passenger</p>
                
                <div className="quantity-controls">
                  <button onClick={() => removeFlight(flight)} disabled={qty === 0}>−</button>
                  <span>{qty}</span>
                  <button onClick={() => addFlight(flight)}>+</button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {totalPassengers > 0 && (
        <div className="cart-summary">
          <h3>🧾 Booking Summary</h3>
          <ul>
            {Object.values(cart).map(item => (
              <li key={item.id}>
                {item.airline} ({item.class}) - {item.passengers} passenger(s) × ₹{item.price} = ₹{item.subtotal}
              </li>
            ))}
          </ul>
          <h4>Total Passengers: {totalPassengers}</h4>
          <h4>Total Fare: ₹{totalFare.toLocaleString()}</h4>
        </div>
      )}
    </div>
  );
};

export default FlightBooking;
