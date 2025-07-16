import React, { useState } from 'react';
import './HotelBooking.css';
import hotels from './hotelData';

const HotelBooking = () => {
  const [form, setForm] = useState({
    city: '',
    checkin: '',
    checkout: '',
    guests: 1,
  });

  const [results, setResults] = useState([]);
  const [cart, setCart] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const matched = hotels.filter(h =>
      h.city.toLowerCase() === form.city.toLowerCase()
    );

    setResults(matched);
  };

  const addRoom = (hotel) => {
    setCart(prev => {
      const qty = prev[hotel.id]?.rooms || 0;
      return {
        ...prev,
        [hotel.id]: {
          ...hotel,
          rooms: qty + 1,
          subtotal: (qty + 1) * hotel.pricePerNight,
        }
      };
    });
  };

  const removeRoom = (hotel) => {
    setCart(prev => {
      const qty = prev[hotel.id]?.rooms || 0;
      if (qty > 1) {
        return {
          ...prev,
          [hotel.id]: {
            ...hotel,
            rooms: qty - 1,
            subtotal: (qty - 1) * hotel.pricePerNight,
          }
        };
      } else {
        const newCart = { ...prev };
        delete newCart[hotel.id];
        return newCart;
      }
    });
  };

  const totalRooms = Object.values(cart).reduce((sum, item) => sum + item.rooms, 0);
  const totalCost = Object.values(cart).reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className="hotel-booking-container">
      <h2>🏨 Hotel Booking</h2>
      <p>Book top-rated hotels with best prices.</p>

      <form className="hotel-form" onSubmit={handleSubmit}>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Check-in:
          <input
            type="date"
            name="checkin"
            value={form.checkin}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Check-out:
          <input
            type="date"
            name="checkout"
            value={form.checkout}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Guests:
          <input
            type="number"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            min="1"
          />
        </label>
        <button type="submit">Search Hotels</button>
      </form>

      {results.length > 0 && (
        <div className="results">
          <h3>Available Hotels in {form.city}</h3>
          {results.map(hotel => {
            const qty = cart[hotel.id]?.rooms || 0;
            return (
              <div key={hotel.id} className="hotel-card">
                <img src={hotel.image} alt={hotel.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                <h4>{hotel.name}</h4>
                <p><strong>City:</strong> {hotel.city}</p>
                <p><strong>Rating:</strong> ⭐ {hotel.rating}</p>
                <p><strong>Price/Night:</strong> ₹{hotel.pricePerNight}</p>
                
                <div className="quantity-controls">
                  <button onClick={() => removeRoom(hotel)} disabled={qty === 0}>−</button>
                  <span>{qty}</span>
                  <button onClick={() => addRoom(hotel)}>+</button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {totalRooms > 0 && (
        <div className="cart-summary">
          <h3>🧾 Booking Summary</h3>
          <ul>
            {Object.values(cart).map(item => (
              <li key={item.id}>
                {item.name} - {item.rooms} room(s) × ₹{item.pricePerNight} = ₹{item.subtotal}
              </li>
            ))}
          </ul>
          <h4>Total Rooms: {totalRooms}</h4>
          <h4>Total Cost: ₹{totalCost.toLocaleString()}</h4>
        </div>
      )}
    </div>
  );
};

export default HotelBooking;
