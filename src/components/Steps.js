import React from 'react';
import './Steps.css';
import Button from '@mui/material/Button';

const Steps = ({openPopup}) => {
  return (
    <section className="relative text-center steps">
      <h2 className='absolute'>How Do I Refer?</h2>
      
      <img className="absolute steps-refer" src={"steps_refer.png"} alt="" />
      <img className="absolute add-friend" src={"add_friend.png"} alt="" />
      <img  className="absolute layer-10" src={"layer_10.png"} alt="" />
      <img className="absolute group-22036" src={"group_22036.png"} alt="" />
      <p className='absolute add-friend-desc steps-desc'>Submit referrals easily via our website’s referral section.</p>
      
      <p className='absolute layer-10-desc steps-desc'>Earn rewards once your referral joins an Accredian program.</p>
      <p className='absolute group-22036-desc steps-desc'>Both parties receive a bonus 30 days after program enrollment.</p>
      <Button variant='contained' sx={{textTransform:'none', fontSize:17.02, margin:"0px 0px", width:"236px", height:"64px", position:"absolute", bottom:"30px", left:"848px", borderRadius:"8px"}} onClick={openPopup} >Refer Now</Button>
    </section>
  );
};

export default Steps;
