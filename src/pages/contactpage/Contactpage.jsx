import React from 'react'
import Path from '../../components/smallcomponent/path/Path'
import Contactdata from '../../components/smallcomponent/contactdata/Contactdata'
import Contactform from '../../components/smallcomponent/contactform/Contactform'
import Mapcontainer from '../../components/smallcomponent/mapcontain/Mapcontainer'

const Contact = () => {
  return (
    <section className='contactpage-section'>
      <Path/>
<Contactdata/>
<Contactform/>
<Mapcontainer/>


    </section>
  )
}

export default Contact
