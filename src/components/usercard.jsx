// write the component code here
// write the component code here
import React from 'react';
import './Usercard.css';

const Usercard = () => {
  // Static user details
  const profilePhoto = 'https://randomuser.me/api/portraits/men/75.jpg';
  const name = 'Tanishq Singhal';
  const email = 'tanishqsinghal483@gmail.com';
  const phone = '+91 6375518346';
  const address = 'haldighati, jaipur ';

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="user-photo" />
      <h3 className="user-name">{name}</h3>
      <p className="user-info"><strong>Email:</strong> {email}</p>
      <p className="user-info"><strong>Phone:</strong> {phone}</p>
      <p className="user-info"><strong>Address:</strong> {address}</p>
    </div>
  );
};

export default Usercard;
