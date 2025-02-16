import React from 'react'
import imgfaq from '../../../assets/shape.svg'
import Wrapper from '../../layout/Wrapper'
import './Faqcontent.css'
import { Faqconstant } from '../../../constant/Faqconstant'

const Faqcontent = () => {
  return (
    <section className="faqcontent-section">
      <Wrapper>
        <div className="faqimg"><img src={imgfaq}alt="" />
        <span className='faq-span'>FAQ</span>
        
        </div>
        <h1 className="Faqtitle">Talk To About Any Question?</h1>
        <div className="detail-main">
          {Faqconstant.map((item) => (
            <div className="detailssection" key={item.id}>
              <details className="faq-details">
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
