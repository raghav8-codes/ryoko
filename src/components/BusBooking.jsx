import React, { useState } from 'react';
import './bus.css';

export const busData=[
  {
    "id": 1,
    "operator": "TSRTC",
    "from": "Vijayawada",
    "to": "Proddatur",
    "departure": "20:54 PM",
    "arrival": "04:04 AM",
    "seatsAvailable": 37,
    "fare": 485,
    "busType": "Non-AC Express",
    "date": "2025-08-26"
  },
  {
    "id": 2,
    "operator": "Morning Star",
    "from": "Nellore",
    "to": "Guntur",
    "departure": "17:48 PM",
    "arrival": "00:52 AM",
    "seatsAvailable": 21,
    "fare": 770,
    "busType": "AC Semi-Sleeper",
    "date": "2025-07-31"
  },
  {
    "id": 3,
    "operator": "TSRTC",
    "from": "Hyderabad",
    "to": "Guntur",
    "departure": "01:41 AM",
    "arrival": "06:21 AM",
    "seatsAvailable": 7,
    "fare": 630,
    "busType": "AC Sleeper",
    "date": "2025-07-01"
  },
  {
    "id": 4,
    "operator": "Orange Travels",
    "from": "Nellore",
    "to": "Guntur",
    "departure": "16:23 PM",
    "arrival": "22:20 PM",
    "seatsAvailable": 14,
    "fare": 396,
    "busType": "Luxury AC",
    "date": "2025-07-02"
  },
  {
    "id": 5,
    "operator": "TSRTC",
    "from": "Hyderabad",
    "to": "Kurnool",
    "departure": "22:06 PM",
    "arrival": "05:30 AM",
    "seatsAvailable": 27,
    "fare": 687,
    "busType": "Luxury AC",
    "date": "2025-07-31"
  },
  {
    "id": 6,
    "operator": "Morning Star",
    "from": "Hyderabad",
    "to": "Guntur",
    "departure": "16:50 PM",
    "arrival": "00:51 AM",
    "seatsAvailable": 15,
    "fare": 1146,
    "busType": "AC Semi-Sleeper",
    "date": "2025-08-18"
  },
  {
    "id": 7,
    "operator": "APSRTC",
    "from": "Vijayawada",
    "to": "Proddatur",
    "departure": "13:56 PM",
    "arrival": "20:08 PM",
    "seatsAvailable": 32,
    "fare": 989,
    "busType": "Luxury AC",
    "date": "2025-08-18"
  },
  {
    "id": 8,
    "operator": "SVR Travels",
    "from": "Kurnool",
    "to": "Hyderabad",
    "departure": "22:39 PM",
    "arrival": "06:27 AM",
    "seatsAvailable": 15,
    "fare": 348,
    "busType": "Deluxe",
    "date": "2025-08-03"
  },
  {
    "id": 9,
    "operator": "Mahi Travels",
    "from": "Hyderabad",
    "to": "Vijayawada",
    "departure": "16:00 PM",
    "arrival": "00:28 AM",
    "seatsAvailable": 40,
    "fare": 882,
    "busType": "AC Sleeper",
    "date": "2025-07-10"
  },
  {
    "id": 10,
    "operator": "Mahi Travels",
    "from": "Guntur",
    "to": "Proddatur",
    "departure": "18:12 PM",
    "arrival": "00:52 AM",
    "seatsAvailable": 33,
    "fare": 671,
    "busType": "AC Semi-Sleeper",
    "date": "2025-08-17"
  },
  {
    "id": 11,
    "operator": "SVR Travels",
    "from": "Proddatur",
    "to": "Kurnool",
    "departure": "11:21 AM",
    "arrival": "17:38 PM",
    "seatsAvailable": 7,
    "fare": 645,
    "busType": "Luxury AC",
    "date": "2025-07-01"
  },
  {
    "id": 12,
    "operator": "Mahi Travels",
    "from": "Hyderabad",
    "to": "Kurnool",
    "departure": "14:19 PM",
    "arrival": "18:49 PM",
    "seatsAvailable": 19,
    "fare": 437,
    "busType": "Non-AC Express",
    "date": "2025-07-07"
  },
  {
    "id": 13,
    "operator": "Sree Travels",
    "from": "Kurnool",
    "to": "Vijayawada",
    "departure": "02:28 AM",
    "arrival": "06:31 AM",
    "seatsAvailable": 39,
    "fare": 1197,
    "busType": "AC Semi-Sleeper",
    "date": "2025-07-22"
  },
  {
    "id": 14,
    "operator": "Morning Star",
    "from": "Vijayawada",
    "to": "Proddatur",
    "departure": "13:44 PM",
    "arrival": "19:48 PM",
    "seatsAvailable": 39,
    "fare": 957,
    "busType": "Deluxe",
    "date": "2025-08-16"
  },
  {
    "id": 15,
    "operator": "APSRTC",
    "from": "Hyderabad",
    "to": "Kurnool",
    "departure": "17:10 PM",
    "arrival": "23:20 PM",
    "seatsAvailable": 7,
    "fare": 940,
    "busType": "AC Sleeper",
    "date": "2025-08-11"
  },
  {
    "id": 16,
    "operator": "Sree Travels",
    "from": "Vijayawada",
    "to": "Nellore",
    "departure": "05:09 AM",
    "arrival": "11:32 AM",
    "seatsAvailable": 28,
    "fare": 564,
    "busType": "Deluxe",
    "date": "2025-07-01"
  },
  {
    "id": 17,
    "operator": "Mahi Travels",
    "from": "Kurnool",
    "to": "Hyderabad",
    "departure": "08:58 AM",
    "arrival": "16:33 PM",
    "seatsAvailable": 21,
    "fare": 728,
    "busType": "Luxury AC",
    "date": "2025-07-27"
  },
  {
    "id": 18,
    "operator": "Orange Travels",
    "from": "Chennai",
    "to": "Guntur",
    "departure": "06:38 AM",
    "arrival": "10:14 AM",
    "seatsAvailable": 30,
    "fare": 1105,
    "busType": "Deluxe",
    "date": "2025-07-23"
  },
  {
    "id": 19,
    "operator": "Morning Star",
    "from": "Guntur",
    "to": "Kurnool",
    "departure": "18:27 PM",
    "arrival": "00:39 AM",
    "seatsAvailable": 8,
    "fare": 546,
    "busType": "Deluxe",
    "date": "2025-08-11"
  },
  {
    "id": 20,
    "operator": "Sree Travels",
    "from": "Hyderabad",
    "to": "Proddatur",
    "departure": "23:23 PM",
    "arrival": "06:58 AM",
    "seatsAvailable": 23,
    "fare": 933,
    "busType": "Volvo B9R",
    "date": "2025-07-05"
  },
  {
    "id": 21,
    "operator": "CSR Travels",
    "from": "Guntur",
    "to": "Vijayawada",
    "departure": "07:45 AM",
    "arrival": "14:54 PM",
    "seatsAvailable": 28,
    "fare": 1180,
    "busType": "Deluxe",
    "date": "2025-07-30"
  },
  {
    "id": 22,
    "operator": "CSR Travels",
    "from": "Nellore",
    "to": "Vijayawada",
    "departure": "09:00 AM",
    "arrival": "16:15 PM",
    "seatsAvailable": 25,
    "fare": 1135,
    "busType": "Deluxe",
    "date": "2025-08-24"
  },
  {
    "id": 23,
    "operator": "Morning Star",
    "from": "Hyderabad",
    "to": "Proddatur",
    "departure": "17:25 PM",
    "arrival": "01:07 AM",
    "seatsAvailable": 16,
    "fare": 1010,
    "busType": "Volvo B9R",
    "date": "2025-08-07"
  },
  {
    "id": 24,
    "operator": "Orange Travels",
    "from": "Nellore",
    "to": "Proddatur",
    "departure": "15:44 PM",
    "arrival": "21:20 PM",
    "seatsAvailable": 31,
    "fare": 408,
    "busType": "Luxury AC",
    "date": "2025-08-19"
  },
  {
    "id": 25,
    "operator": "Orange Travels",
    "from": "Kurnool",
    "to": "Bangalore",
    "departure": "15:27 PM",
    "arrival": "20:36 PM",
    "seatsAvailable": 31,
    "fare": 659,
    "busType": "Non-AC Express",
    "date": "2025-08-30"
  },
  {
    "id": 26,
    "operator": "Orange Travels",
    "from": "Chennai",
    "to": "Hyderabad",
    "departure": "14:39 PM",
    "arrival": "22:40 PM",
    "seatsAvailable": 13,
    "fare": 397,
    "busType": "Luxury AC",
    "date": "2025-07-14"
  },
  {
    "id": 27,
    "operator": "CSR Travels",
    "from": "Guntur",
    "to": "Kurnool",
    "departure": "11:56 AM",
    "arrival": "16:41 PM",
    "seatsAvailable": 17,
    "fare": 905,
    "busType": "Deluxe",
    "date": "2025-08-28"
  },
  {
    "id": 28,
    "operator": "Morning Star",
    "from": "Guntur",
    "to": "Hyderabad",
    "departure": "12:29 PM",
    "arrival": "18:33 PM",
    "seatsAvailable": 40,
    "fare": 757,
    "busType": "AC Sleeper",
    "date": "2025-07-31"
  },
  {
    "id": 29,
    "operator": "CSR Travels",
    "from": "Bangalore",
    "to": "Hyderabad",
    "departure": "12:35 PM",
    "arrival": "17:40 PM",
    "seatsAvailable": 22,
    "fare": 540,
    "busType": "Non-AC Express",
    "date": "2025-08-18"
  },
  {
    "id": 30,
    "operator": "Orange Travels",
    "from": "Guntur",
    "to": "Vijayawada",
    "departure": "02:00 AM",
    "arrival": "06:27 AM",
    "seatsAvailable": 16,
    "fare": 399,
    "busType": "AC Sleeper",
    "date": "2025-07-06"
  },
  {
    "id": 31,
    "operator": "Mahi Travels",
    "from": "Nellore",
    "to": "Hyderabad",
    "departure": "07:29 AM",
    "arrival": "13:25 PM",
    "seatsAvailable": 8,
    "fare": 334,
    "busType": "Luxury AC",
    "date": "2025-08-16"
  },
  {
    "id": 32,
    "operator": "SVR Travels",
    "from": "Proddatur",
    "to": "Bangalore",
    "departure": "16:46 PM",
    "arrival": "00:54 AM",
    "seatsAvailable": 21,
    "fare": 1108,
    "busType": "Volvo B9R",
    "date": "2025-07-06"
  },
  {
    "id": 33,
    "operator": "TSRTC",
    "from": "Kurnool",
    "to": "Bangalore",
    "departure": "00:19 AM",
    "arrival": "05:01 AM",
    "seatsAvailable": 10,
    "fare": 542,
    "busType": "Deluxe",
    "date": "2025-07-24"
  },
  {
    "id": 34,
    "operator": "SVR Travels",
    "from": "Hyderabad",
    "to": "Guntur",
    "departure": "19:58 PM",
    "arrival": "02:13 AM",
    "seatsAvailable": 6,
    "fare": 600,
    "busType": "Volvo B9R",
    "date": "2025-08-24"
  },
  {
    "id": 35,
    "operator": "TSRTC",
    "from": "Guntur",
    "to": "Bangalore",
    "departure": "09:09 AM",
    "arrival": "14:57 PM",
    "seatsAvailable": 11,
    "fare": 923,
    "busType": "AC Sleeper",
    "date": "2025-08-23"
  },
  {
    "id": 36,
    "operator": "Sree Travels",
    "from": "Chennai",
    "to": "Guntur",
    "departure": "14:02 PM",
    "arrival": "22:51 PM",
    "seatsAvailable": 14,
    "fare": 487,
    "busType": "Volvo B9R",
    "date": "2025-07-12"
  },
  {
    "id": 37,
    "operator": "Orange Travels",
    "from": "Proddatur",
    "to": "Guntur",
    "departure": "19:07 PM",
    "arrival": "00:38 AM",
    "seatsAvailable": 18,
    "fare": 788,
    "busType": "AC Sleeper",
    "date": "2025-07-21"
  },
  {
    "id": 38,
    "operator": "Orange Travels",
    "from": "Guntur",
    "to": "Nellore",
    "departure": "12:19 PM",
    "arrival": "19:37 PM",
    "seatsAvailable": 5,
    "fare": 1113,
    "busType": "Volvo B9R",
    "date": "2025-08-17"
  },
  {
    "id": 39,
    "operator": "SVR Travels",
    "from": "Kurnool",
    "to": "Vijayawada",
    "departure": "17:50 PM",
    "arrival": "00:40 AM",
    "seatsAvailable": 39,
    "fare": 634,
    "busType": "AC Semi-Sleeper",
    "date": "2025-07-02"
  },
  {
    "id": 40,
    "operator": "Mahi Travels",
    "from": "Kurnool",
    "to": "Bangalore",
    "departure": "07:10 AM",
    "arrival": "13:40 PM",
    "seatsAvailable": 6,
    "fare": 635,
    "busType": "AC Semi-Sleeper",
    "date": "2025-07-25"
  },
  {
    "id": 41,
    "operator": "TSRTC",
    "from": "Chennai",
    "to": "Nellore",
    "departure": "09:42 AM",
    "arrival": "15:50 PM",
    "seatsAvailable": 37,
    "fare": 319,
    "busType": "Deluxe",
    "date": "2025-08-25"
  },
  {
    "id": 42,
    "operator": "APSRTC",
    "from": "Bangalore",
    "to": "Vijayawada",
    "departure": "19:21 PM",
    "arrival": "02:46 AM",
    "seatsAvailable": 30,
    "fare": 1194,
    "busType": "Deluxe",
    "date": "2025-07-19"
  },
  {
    "id": 43,
    "operator": "Morning Star",
    "from": "Chennai",
    "to": "Proddatur",
    "departure": "23:15 PM",
    "arrival": "04:50 AM",
    "seatsAvailable": 18,
    "fare": 915,
    "busType": "Volvo B9R",
    "date": "2025-07-15"
  },
  {
    "id": 44,
    "operator": "Sree Travels",
    "from": "Hyderabad",
    "to": "Vijayawada",
    "departure": "01:46 AM",
    "arrival": "08:08 AM",
    "seatsAvailable": 29,
    "fare": 695,
    "busType": "AC Semi-Sleeper",
    "date": "2025-08-04"
  },
  {
    "id": 45,
    "operator": "Orange Travels",
    "from": "Chennai",
    "to": "Vijayawada",
    "departure": "02:26 AM",
    "arrival": "09:50 AM",
    "seatsAvailable": 36,
    "fare": 457,
    "busType": "AC Sleeper",
    "date": "2025-08-21"
  },
  {
    "id": 46,
    "operator": "Orange Travels",
    "from": "Proddatur",
    "to": "Chennai",
    "departure": "02:12 AM",
    "arrival": "08:00 AM",
    "seatsAvailable": 25,
    "fare": 1092,
    "busType": "Non-AC Express",
    "date": "2025-08-13"
  },
  {
    "id": 47,
    "operator": "Sree Travels",
    "from": "Kurnool",
    "to": "Vijayawada",
    "departure": "22:52 PM",
    "arrival": "06:56 AM",
    "seatsAvailable": 30,
    "fare": 722,
    "busType": "Deluxe",
    "date": "2025-07-05"
  },
  {
    "id": 48,
    "operator": "CSR Travels",
    "from": "Guntur",
    "to": "Bangalore",
    "departure": "14:57 PM",
    "arrival": "22:36 PM",
    "seatsAvailable": 22,
    "fare": 964,
    "busType": "Luxury AC",
    "date": "2025-08-14"
  },
  {
    "id": 49,
    "operator": "Sree Travels",
    "from": "Vijayawada",
    "to": "Kurnool",
    "departure": "03:32 AM",
    "arrival": "08:15 AM",
    "seatsAvailable": 20,
    "fare": 304,
    "busType": "Volvo B9R",
    "date": "2025-08-24"
  },
  {
    "id": 50,
    "operator": "Mahi Travels",
    "from": "Guntur",
    "to": "Chennai",
    "departure": "18:36 PM",
    "arrival": "02:38 AM",
    "seatsAvailable": 28,
    "fare": 1071,
    "busType": "Deluxe",
    "date": "2025-07-09"
  }
]

const getBusImage = (busType) => {
  switch (busType.toLowerCase()) {
    case "ac sleeper":
      return "https://i.ytimg.com/vi/nNs9_GNVUc8/maxresdefault.jpg";
    case "luxury ac":
      return "https://th.bing.com/th/id/R.ca754dfbb6c4b2ebd8dfdb783296eace?rik=vJKil6tS2VfAug&riu=http%3a%2f%2f5.imimg.com%2fdata5%2fLH%2fVG%2fMY-16810%2fluxury-bus-rental.jpg";
    case "non-ac express":
      return "https://coachbuildersindia.com/wp-content/uploads/2023/09/Interior-image-of-a-Sleeper-cum-Seater-Hybrid-Bus-in-21-layout-1024x577.webp";
    case "deluxe":
      return "https://tse4.mm.bing.net/th/id/OIP.A_q1q028ZSQOcN3uuuvjJgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
    case "ac semi-sleeper":
    case "volvo b9r":
      return "https://coachbuildersindia.com/wp-content/uploads/2023/09/Interior-of-Sleeper-Buses-in-India-1024x577.webp";
    default:
      return "https://images.unsplash.com/photo-1549921296-3a6b50648a47?auto=format&fit=crop&w=800&q=80";
  }
};

const BusList = ({ filters }) => {
  const [cart, setCart] = useState([]);
  const [totalFare, setTotalFare] = useState(0);

  const { from, to, date } = filters;

  const filteredBuses = busData.filter(
    (bus) =>
      bus.from === from &&
      bus.to === to &&
      bus.date === date
  );

  const handleAddToCart = (bus) => {
    setCart([...cart, bus]);
    setTotalFare(totalFare + bus.fare);
  };

  return (
    <section className="bus-list">
      <h2>Available Buses</h2>

      {/* Cart Summary */}
      <div className="bus-cart-summary">
        <p><strong>Items in Cart:</strong> {cart.length}</p>
        <p><strong>Total Fare:</strong> ₹{totalFare.toLocaleString()}</p>
      </div>

      {filteredBuses.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No buses found. Try a different route or date.</p>
      ) : (
        filteredBuses.map((bus) => (
          <div className="bus-card" key={bus.id}>
            <img
              src={getBusImage(bus.busType)}
              alt={`${bus.busType} bus`}
              className="bus-image"
            />
            <h3>{bus.operator} ({bus.busType})</h3>
            <p><strong>From:</strong> {bus.from} → <strong>To:</strong> {bus.to}</p>
            <p><strong>Departure:</strong> {bus.departure} | <strong>Arrival:</strong> {bus.arrival}</p>
            <p><strong>Seats Left:</strong> {bus.seatsAvailable}</p>
            <p><strong>Fare:</strong> ₹{bus.fare}</p>
            <button className="book-btn" onClick={() => handleAddToCart(bus)}>Add to Cart</button>
          </div>
        ))
      )}
    </section>
  );
};

export default BusList;