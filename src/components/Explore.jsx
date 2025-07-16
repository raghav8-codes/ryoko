import React, { useState } from 'react';
import './explore.css';

const travelPackages = [
  {
    id: 1,
    title: "Andaman Islands Getaway",
    description: "5 nights, 6 days tour including scuba diving, snorkeling, and beach stays.",
    price: 25999,
    location: "Port Blair, Havelock, Neil Island",
    image: "https://tse4.mm.bing.net/th/id/OIP.h7aJmlbaOa1JcnWhqrRGqwHaEb"
  },
  {
    id: 2,
    title: "Ladakh Adventure",
    description: "6 nights, 7 days bike trip through Leh, Nubra, Pangong Lake.",
    price: 32499,
    location: "Leh, Ladakh",
    image: "https://www.traveltourguru.in/wp-content/uploads/2022/07/Leh-Ladakh-Adventure-Package-768x469.jpg"
  },
  {
    id: 3,
    title: "Kerala Backwaters",
    description: "4 nights, 5 days through Alleppey houseboats and Munnar tea plantations.",
    price: 18750,
    location: "Alleppey, Munnar",
    image: "https://tse3.mm.bing.net/th/id/OIP.VEsQqc9x09LVd1b__c144AHaEs"
  },
  {
    id: 4,
    title: "Golden Triangle Tour",
    description: "6 nights, 7 days covering Delhi, Agra, and Jaipur.",
    price: 21999,
    location: "Delhi, Agra, Jaipur",
    image: "https://storage.googleapis.com/prune/blog_image/Golden-tringle.jpg"
  },
  {
    id: 5,
    title: "Kashmir Paradise",
    description: "5 nights, 6 days trip to Srinagar, Gulmarg, and Pahalgam.",
    price: 27500,
    location: "Kashmir",
    image: "https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407-scaled.jpg"
  },
  {
    id: 6,
    title: "Goa Beach Retreat",
    description: "3 nights, 4 days beach party and leisure stay in North and South Goa.",
    price: 15200,
    location: "Goa",
    image: "https://www.agoda.com/wp-content/uploads/2023/02/North-goa-beaches-things-to-do-in-goa.jpg"
  }
];

const Explore = () => {
  const [cart, setCart] = useState({});

  const handleAdd = (pkg) => {
    setCart((prev) => {
      const currentQty = prev[pkg.id]?.quantity || 0;
      return {
        ...prev,
        [pkg.id]: {
          ...pkg,
          quantity: currentQty + 1,
          subtotal: (currentQty + 1) * pkg.price,
        },
      };
    });
  };

  const handleRemove = (pkg) => {
    setCart((prev) => {
      const currentQty = prev[pkg.id]?.quantity || 0;
      if (currentQty > 1) {
        return {
          ...prev,
          [pkg.id]: {
            ...pkg,
            quantity: currentQty - 1,
            subtotal: (currentQty - 1) * pkg.price,
          },
        };
      } else {
        const updated = { ...prev };
        delete updated[pkg.id];
        return updated;
      }
    });
  };

  const totalItems = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = Object.values(cart).reduce((acc, item) => acc + item.subtotal, 0);

  return (
    <div className="explore-page">
      <h1>Explore Tour Packages</h1>

      <div className="package-list">
        {travelPackages.map(pkg => {
          const inCart = cart[pkg.id]?.quantity || 0;

          return (
            <div className="package-card" key={pkg.id}>
              <img src={pkg.image} alt={pkg.title} className="package-image" />
              <div className="package-details">
                <h2>{pkg.title}</h2>
                <p><strong>Location:</strong> {pkg.location}</p>
                <p>{pkg.description}</p>
                <p><strong>Price:</strong> ₹{pkg.price.toLocaleString()}</p>

                <div className="quantity-controls">
                  <button onClick={() => handleRemove(pkg)} disabled={inCart === 0}>−</button>
                  <span>{inCart}</span>
                  <button onClick={() => handleAdd(pkg)}>+</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cart-summary">
        <h2>Your Cart</h2>
        {totalItems === 0 ? (
          <p>No packages added yet.</p>
        ) : (
          <>
            <ul>
              {Object.values(cart).map(item => (
                <li key={item.id}>
                  {item.title} × {item.quantity} = ₹{item.subtotal.toLocaleString()}
                </li>
              ))}
            </ul>
            <h3>Total: ₹{totalPrice.toLocaleString()}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Explore;
