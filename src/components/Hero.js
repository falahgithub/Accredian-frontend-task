import React, {useState} from 'react';
import './Hero.css';
import Button from '@mui/material/Button';

const Hero = ({openPopup}) => {

  const [activeIndex, setActiveIndex] = useState(null);
  const options = ['Refer', 'Benefits', 'FAQs', 'Support'];


  return (<>
   
   <div className="group-22081 flex justify-around items-center">
   {options.map((option, index) => (
        <div
          key={index}
          className={`group-22081-options ${activeIndex === index ? 'active' : ''}`}
          onClick={() => setActiveIndex(index)}
        >
          {option}
          {activeIndex === index && <div className="blue-dot"></div>}
        </div>
      ))}
   </div>
      
    
    <section className="flex justify-between items  relative text-left hero">
    
      <div className="hero-content">
        <h1>Let’s Learn & Earn</h1>
        <div className="hero-content-desc">
  
        <p>Get a chance to win up-to <span style={{color:"#1A73E8"}}>Rs. 15,000</span></p>
        </div>
        {/* font-SOurce sans Pro regular */}
        
      </div>
      <div className=" hero-image">
        <img src={"Anniversary_7_1.png"} alt="Refer and Earn" />
      </div>
      
      <img className='absolute anni_8_4' src={"Anniversary_8_4.png"} alt="" />
      <img className='absolute anni_8_3' src={"Anniversary_8_3.png"} alt="" />
      <img className='absolute anni_8_5' src={"Anniversary_8_5.png"} alt="" />
      <img className='absolute anni_8_2' src={"Anniversary_8_2.png"} alt="" />
      <img className='absolute anni_8_1' src={"Anniversary_8_1.png"} alt="" />
      <Button  variant='contained' sx={{textTransform:'none', fontSize:20, width:"192px", height:"54px", 
        position:"absolute",top:"555px",
        left:"45px",borderRadius:"8px"}} onClick={openPopup}>Refer Now</Button>
    </section>
    </>
  );
};

export default Hero;
