import React, { useState } from 'react';
import './CarBooking.css';
import cars from './carsData'; // ✅ Ensure this is correct

const CarBooking = () => {
  const [form, setForm] = useState({
    pickupLocation: '',
    dropLocation: '',
    pickupDate: '',
    returnDate: '',
  });

  const [results, setResults] = useState([]);
  const [cart, setCart] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults(cars); // 🔍 In future: filter cars by pickupLocation, etc.
  };

  const handleAdd = (car) => {
    setCart((prev) => {
      const currentQty = prev[car.id]?.days || 0;
      return {
        ...prev,
        [car.id]: {
          ...car,
          days: currentQty + 1,
          subtotal: (currentQty + 1) * car.pricePerDay,
        },
      };
    });
  };

  const handleRemove = (car) => {
    setCart((prev) => {
      const currentQty = prev[car.id]?.days || 0;
      if (currentQty > 1) {
        return {
          ...prev,
          [car.id]: {
            ...car,
            days: currentQty - 1,
            subtotal: (currentQty - 1) * car.pricePerDay,
          },
        };
      } else {
        const newCart = { ...prev };
        delete newCart[car.id];
        return newCart;
      }
    });
  };

  const totalCars = Object.values(cart).reduce((acc, item) => acc + item.days, 0);
  const totalFare = Object.values(cart).reduce((acc, item) => acc + item.subtotal, 0);

  return (
    <div className="car-booking-container">
      <h2>🚗 Car Rentals</h2>
      <p>Book cabs or self-drive cars.</p>

      <form className="car-form" onSubmit={handleSubmit}>
        <label>
          Pickup Location:
          <input type="text" name="pickupLocation" value={form.pickupLocation} onChange={handleChange} required />
        </label>
        <label>
          Drop Location:
          <input type="text" name="dropLocation" value={form.dropLocation} onChange={handleChange} required />
        </label>
        <label>
          Pickup Date:
          <input type="date" name="pickupDate" value={form.pickupDate} onChange={handleChange} required />
        </label>
        <label>
          Return Date:
          <input type="date" name="returnDate" value={form.returnDate} onChange={handleChange} required />
        </label>

        <button type="submit">Search Cars</button>
      </form>

      {results.length > 0 && (
        <div className="car-results">
          <h3>Available Cars</h3>

          {results.map((car) => {
            const inCart = cart[car.id]?.days || 0;
            return (
              <div key={car.id} className="car-card">
                <img src={car.image} alt={car.model} style={{ width: '100%', maxHeight: '180px', objectFit: 'cover' }} />
                <h4>{car.brand} {car.model}</h4>
                <p><strong>Type:</strong> {car.type}</p>
                <p><strong>Seats:</strong> {car.seats} | <strong>Fuel:</strong> {car.fuel}</p>
                <p><strong>Transmission:</strong> {car.transmission}</p>
                <p><strong>Price/Day:</strong> ₹{car.pricePerDay}</p>

                <div className="quantity-controls">
                  <button onClick={() => handleRemove(car)} disabled={inCart === 0}>−</button>
                  <span>{inCart}</span>
                  <button onClick={() => handleAdd(car)}>+</button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {totalCars > 0 && (
        <div className="cart-summary">
          <h3>🧾 Booking Summary</h3>
          <ul>
            {Object.values(cart).map((item) => (
              <li key={item.id}>
                {item.brand} {item.model} - {item.days} day(s) × ₹{item.pricePerDay} = ₹{item.subtotal}
              </li>
            ))}
          </ul>
          <h4>Total Cars: {totalCars}</h4>
          <h4>Total Fare: ₹{totalFare.toLocaleString()}</h4>
        </div>
      )}
    </div>
  );
};

export default CarBooking;
