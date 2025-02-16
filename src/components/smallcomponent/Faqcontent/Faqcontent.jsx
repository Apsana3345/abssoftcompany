import React, { useState } from 'react'
import imgfaq from '../../../assets/shape.svg'
import Wrapper from '../../layout/Wrapper'
import './Faqcontent.css'
import { Faqconstant } from '../../../constant/Faqconstant'

const Faqcontent = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };



  return (
    <section className="faqcontent-section">
      <Wrapper>
        <div className="faqimg"><img src={imgfaq}alt="" />
        <span className='faq-span'>FAQ</span>
        
        </div>
        <h1 className="Faqtitle">Talk To About Any Question?</h1>
        <div className="detail-main">
          {Faqconstant.map((item,index) => (
            <div className="detailssection" key={item.id}>
              <details className="faq-details"   open={openIndex === index}
               onClick={(e) =>{
                e.preventDefault();
                handleToggle(index);
                
          }}>
                <summary className="faq-summary">
                {item.title}
                  <span className="faq-sign"></span>
                  
                </summary>
                <p className="faqpara">{item.description}</p>
              </details>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Faqcontent
