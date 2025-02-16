import React from 'react'
import './FooterSecondSection.css'
import logofooter from '../../../assets/abslogo.png'
import { Icon } from '@iconify/react/dist/iconify.js'
import { FooterConstant } from '../../../constant/Footer'
const FooterSecondSection = () => {
  return (
    <div className='footersecond-main'>
<div className="social-Logo">
   <div className="footerimg">
   <img src={logofooter} alt="" />
    </div> 
    <div className="links">
<Icon   icon="logos:facebook"/>
<Icon   icon="skill-icons:instagram"/>
<Icon   icon="skill-icons:linkedin"/>
    </div>
</div>
{/* <div className="company-main">
<h1 className="company-title">
  OUR COMPANY
</h1>

<div className="texts">
<h2 className="text-below">
<span className="greatersymbol">&gt;</span> Project Partnership
</h2>
<h2 className="text-below">
<span className="greatersymbol">&gt;</span>  About Us
</h2>
<h2 className="text-below">
<span className="greatersymbol">&gt;</span>  Team
</h2>
</div>
</div>
<div className="info-contact">
<h1 className="company-title">
 
</h1>

<div className="texts">
<h2 className="text-below">
<span className="greatersymbol">&gt;</span> Project Partnership
</h2>
<h2 className="text-below">
<span className="greatersymbol">&gt;</span>  About Us
</h2>
<h2 className="text-below">
<span className="greatersymbol">&gt;</span>  Team
</h2>
</div>


</div>
<div className="client-area"></div> */}

<div className="company-main">
{FooterConstant.map((item)=>{

  return(

 
<div className="company-section"  key={item.id} >
 <p className="company-title">
 {item.title}
 </p>
 <p className="texts">
  <Icon className='iconGreater' icon={item.icon}/> {item.label1}
 </p>
 <p className="texts"    >
  
 <a href={item.link2}>  <Icon className='iconGreater' icon={item.icon1}/>{item.label2}</a>
 </p>
 <p className="texts"    >
  
 <a href={item.link3}> <Icon className='iconGreater' icon={item.icon2}/> {item.label3}</a>
 </p>
 <p className="texts"    >
  
 <a href={item.link4}> <Icon className='iconGreater' icon={item.icon3}/>   {item.label4}</a>
 </p>
 <p className="texts"    >
  
 <Icon className='iconGreater' icon={item.icon4}/>  {item.label5}
 </p>
</div>
 );

})}


</div>

      
    </div>
  )
}

export default FooterSecondSection
