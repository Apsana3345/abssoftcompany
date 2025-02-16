import React from 'react'
import './Aboutpage.css'
import About from '../../components/about/About'
import Path from '../../components/smallcomponent/path/Path'
import Aboutusdata from '../../components/smallcomponent/aboutusdata/Aboutusdata'
import Aboutusaspects from '../../components/smallcomponent/aboutusaspects/Aboutusaspects'

const Aboutpage = () => {
  return (
    <div className='aboutpage-section'>
        <Path/>

      <About/>
<Aboutusdata/>
<Aboutusaspects/>



    </div>
  )
}

export default Aboutpage
