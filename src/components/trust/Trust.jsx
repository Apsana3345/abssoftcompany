import React from 'react'
import './Trust.css'
import imagehead from '../../assets/shape.svg'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import Wrapper from '../layout/Wrapper'

const Trust = () => {
  return (
    <section className='trust-main'>
<Wrapper>
<div className="Main">
<div className="clients">


    <div className="Uppersection">
    <div className="leftsection">
    
    <img  className="logoimg" src={imagehead} alt="" />
    <h2 className="about-title">Latest Clients</h2>

    </div>
    <p className="trust">Trusted <span className="by">By</span></p>


    </div>
<div className="rightsection">
    <button className="whatsappbtn">
Whatsapp Now →

    </button>
</div>

</div>
<div className="imagesClients">
<img className="imagelist" src={img1} alt="" />
<img className="imagelist"src={img2} alt="" />
<img className="imagelist"src={img3} alt="" />
<img className="imagelist"src={img4} alt="" />


</div>



</div>




</Wrapper>


    </section>
  )
}

export default Trust
