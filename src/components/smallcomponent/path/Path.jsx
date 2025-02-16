import React from 'react'
import Wrapper from '../../layout/Wrapper'
import { useLocation } from 'react-router-dom';
import imgpath from '../../../assets/Aboutpagebg.jpg'
import './Path.css'
const Path = () => {
    const location = useLocation();
    const {pathname} = location;
    // console.log(pathname)
    const name =  pathname.replace("-",' ').replace("/",'')
    const pathtitle =name.charAt(0).toUpperCase() + name.slice(1)
    console.log(pathtitle,name)

  return (
    <section className="path-main"
    
    style={{ backgroundImage: `url(${imgpath})` }}
    >
<Wrapper>
    <div className="path-section">
    <h1 className='pathtitle'>{pathtitle}</h1>
    <h2 className='pathname'>Home <span className='home-text'>  {">> "} </span>{name}</h2>
    </div>

</Wrapper>



    </section>
  )
}

export default Path
