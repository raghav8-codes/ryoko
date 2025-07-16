import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/header';
import Home from './components/home';
import SearchForm from './components/search';
import BusList from './components/bus';
import Footer from './components/footer';
import Explore from './components/Explore';
import About from './components/About';
import Services from './components/Services';
import TrainBooking from './components/TrainBooking';
import HotelBooking from './components/HotelBooking';
import HolidayPackages from './components/HolidayPackages';
import CarBooking from './components/CarBooking';
import FlightBooking from './components/FlightBooking';
import BusBooking from './components/BusBooking';
import AuthPage from './components/LoginSignup';

// Auth context + route guard
import { AuthProvider } from './context/auth';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [filters, setFilters] = useState({ from: '', to: '', date: '' });

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <>
                  <Home />
                  <SearchForm onSearch={setFilters} />
                  <BusList filters={filters} />
                </>
              </PrivateRoute>
            }
          />
          <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
          <Route path="/explore" element={<PrivateRoute><Explore /></PrivateRoute>} />
          <Route path="/services" element={<PrivateRoute><Services /></PrivateRoute>} />
          <Route path="/bus" element={<PrivateRoute><BusBooking filters={filters} /></PrivateRoute>} />
          <Route path="/flights" element={<PrivateRoute><FlightBooking /></PrivateRoute>} />
          <Route path="/trains" element={<PrivateRoute><TrainBooking /></PrivateRoute>} />
          <Route path="/hotels" element={<PrivateRoute><HotelBooking /></PrivateRoute>} />
          <Route path="/holidays" element={<PrivateRoute><HolidayPackages /></PrivateRoute>} />
          <Route path="/cabs" element={<PrivateRoute><CarBooking /></PrivateRoute>} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
