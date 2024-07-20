import React from 'react';
import './Popup.css';
import { handleSubmit } from '../api/api.js';

const Popup = ({ isOpen, onClose }) => {
  
 
  if (!isOpen) return null;

  return (
    <div className='fixed flex justify-center items-center popup-overlay'>
      <div className='popup-container' style={{transform: isOpen ? 'translateX(0)' : 'translateX(100%)',transition: "transform 20s",opacity: isOpen ? 1 : 0}}>

        <button className='absolute popup-closebutton' onClick={onClose}>&times;</button>
        <h2>Refer a Friend</h2>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <input type="text" name="referrer" placeholder="Referrer Name" required />
          <input type="text" name="referee" placeholder="Referee Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <button className='popup-submitbutton' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
