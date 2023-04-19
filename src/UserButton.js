import React from 'react';
import './UserButton.css';

const UserButton = ({ label }) => {
  return <button className="custom-button">{label}</button>;
};

export default UserButton;
