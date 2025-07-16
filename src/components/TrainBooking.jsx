import React, { useState } from 'react';
import './Booking.css';
import trains from './trainData';

const TrainBooking = () => {
  const [form, setForm] = useState({
    from: '',
    to: '',
    date: '',
    classType: 'Sleeper',
  });

  const [results, setResults] = useState([]);
  const [cart, setCart] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const matched = trains.filter(t =>
      t.from.toLowerCase() === form.from.toLowerCase() &&
      t.to.toLowerCase() === form.to.toLowerCase() &&
      t.class === form.classType &&
      t.departure.startsWith(form.date)
    );

    setResults(matched);
  };

  const addTicket = (train) => {
    setCart(prev => {
      const qty = prev[train.id]?.tickets || 0;
      return {
        ...prev,
        [train.id]: {
          ...train,
          tickets: qty + 1,
          subtotal: (qty + 1) * train.price,
        }
      };
    });
  };

  const removeTicket = (train) => {
    setCart(prev => {
      const qty = prev[train.id]?.tickets || 0;
      if (qty > 1) {
        return {
          ...prev,
          [train.id]: {
            ...train,
            tickets: qty - 1,
            subtotal: (qty - 1) * train.price,
          }
        };
      } else {
        const newCart = { ...prev };
        delete newCart[train.id];
        return newCart;
      }
    });
  };

  const totalTickets = Object.values(cart).reduce((sum, item) => sum + item.tickets, 0);
  const totalCost = Object.values(cart).reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className="train-booking-container">
      <h2>🚆 Train Booking</h2>
      <p>Reserve train tickets easily with RYOKO.</p>

      <form className="train-form" onSubmit={handleSubmit}>
        <label>
          From:
          <input type="text" name="from" value={form.from} onChange={handleChange} required />
        </label>
        <label>
          To:
          <input type="text" name="to" value={form.to} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
        </label>
        <label>
          Class:
          <select name="classType" value={form.classType} onChange={handleChange}>
            <option value="Sleeper">Sleeper</option>
            <option value="AC 3 Tier">AC 3 Tier</option>
            <option value="AC 2 Tier">AC 2 Tier</option>
            <option value="First Class">First Class</option>
          </select>
        </label>
        <button type="submit">Search Trains</button>
      </form>

      {results.length > 0 && (
        <div className="results">
          <h3>Available Trains</h3>
          {results.map(train => {
            const qty = cart[train.id]?.tickets || 0;
            return (
              <div key={train.id} className="train-card">
                <p><strong>{train.name}</strong> ({train.class})</p>
                <p>{train.from} → {train.to}</p>
                <p>Dep: {train.departure} | Arr: {train.arrival}</p>
                <p>Duration: {train.duration}</p>
                <p>Price per Ticket: ₹{train.price}</p>

                <div className="quantity-controls">
                  <button onClick={() => removeTicket(train)} disabled={qty === 0}>−</button>
                  <span>{qty}</span>
                  <button onClick={() => addTicket(train)}>+</button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {totalTickets > 0 && (
        <div className="cart-summary">
          <h3>🧾 Booking Summary</h3>
          <ul>
            {Object.values(cart).map(item => (
              <li key={item.id}>
                {item.name} - {item.tickets} ticket(s) × ₹{item.price} = ₹{item.subtotal}
              </li>
            ))}
          </ul>
          <h4>Total Tickets: {totalTickets}</h4>
          <h4>Total Cost: ₹{totalCost.toLocaleString()}</h4>
        </div>
      )}
    </div>
  );
};

export default TrainBooking;
