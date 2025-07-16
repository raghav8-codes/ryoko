import React, { useState } from 'react';
import './search.css';

const SearchForm = ({ onSearch }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [journeyDate, setJourneyDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      from: fromCity,
      to: toCity,
      date: journeyDate,
    });
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label>
        From:
        <select value={fromCity} onChange={(e) => setFromCity(e.target.value)} required>
          <option value="">Select City</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Vijayawada">Vijayawada</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Proddatur">Proddatur</option>
          <option value="Guntur">Guntur</option>
          <option value="Nellore">Nellore</option>
          <option value="Kurnool">Kurnool</option>
        </select>
      </label>

      <label>
        To:
        <select value={toCity} onChange={(e) => setToCity(e.target.value)} required>
          <option value="">Select City</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Vijayawada">Vijayawada</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Proddatur">Proddatur</option>
          <option value="Guntur">Guntur</option>
          <option value="Nellore">Nellore</option>
          <option value="Kurnool">Kurnool</option>
        </select>
      </label>

      <label>
        Journey Date:
        <input
          type="date"
          value={journeyDate}
          onChange={(e) => setJourneyDate(e.target.value)}
          required
        />
      </label>

      <button type="submit">Search Buses</button>
    </form>
  );
};

export default SearchForm;
