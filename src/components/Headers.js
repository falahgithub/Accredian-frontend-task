import React from 'react';
import './Header.css';
import Button from '@mui/material/Button';


const Header = () => {
  return (<>
    <div className="flex justify-center items-center alerts">
    <div className='flex alerts-title'><p style={{fontSize:16.88, color:"#262626"}}>Navigate your ideal career path with tailored expert advice</p>
    <Button sx={{textTransform:'none', fontSize:17.02, margin:"0px 8px"}} >Contact Expert</Button>
    </div>
      
    </div>

    <header className='flex justify-between items-center'>
    
      <nav className='flex items-center'>
        <div className="flex logo" >
        <img src={"logo.png"} alt="yyy" />
          <Button variant="contained" color="primary" sx={{padding:"8px 18px", fontSize:14.88, textTransform: 'none'}} >
            Courses <img src={"down_arrow.png"} style={{marginLeft: 4}} alt="" />
          </Button>
        </div>


        <div className="flex justify-end menu">
        <ul className='flex'>
          <li><a href="#refer">Refer & Earn</a></li>
          <li><a href="#benefits">Resources</a></li>
          <li><a href="#faq">About Us</a></li>
          <li>
          <div className='flex submenu'>
            <Button variant="contained"  color="primary" disabled sx={{textTransform: 'none'}}>
             Login 
              </Button>
              <Button variant="contained" color="primary" sx={{textTransform: 'none'}}>
                Try for free 
              </Button>
            </div>
          </li>
          
          

        </ul>
        </div>
        
      </nav>
    </header>
    </>
  );
};

export default Header;
