import React, {useState} from 'react';
import Header from './components/Headers';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Popup from './components/Popup';
import './App.css';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (

    <div className="App">
      <Header  />
      <Hero openPopup={openPopup} />
      <Steps openPopup={openPopup} />
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
     
    </div>
  );
};

export default App;
