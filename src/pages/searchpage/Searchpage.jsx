import React from 'react'
import Wrapper from '../../components/layout/Wrapper'
import './Searchpage.css'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useNavigate } from 'react-router-dom'

const Searchpage = () => {
    const navigate=useNavigate();
  return (
    <section className='searchpagesection'>
<Wrapper>
<div className="searchsection">
<input type="text" placeholder="What are you searching ?" />
    <button  className='searchpageiconbtn' onClick={()=>navigate('/services')}>

    <Icon className='searchpageicon' icon="material-symbols:search-rounded" />

    </button>
    

</div>


</Wrapper>

    </section>
  )
}

export default Searchpage
