import React from 'react'
import './nav.css'
import {BiHomeSmile, BiUserCircle} from 'react-icons/bi'
import {BsBook} from 'react-icons/bs'
import {MdDesignServices} from 'react-icons/md'
import {TiContacts} from 'react-icons/ti'

function Nav() {



  return (

    <>


      <nav>


        <a href ='#home' className='active'> <BiHomeSmile/> </a>
        <a href ='#about'> <BiUserCircle/> </a>
        <a href ='#experience'> <BsBook/> </a>
        <a href ='#services'> <MdDesignServices/> </a>
        <a href ='#contact'> <TiContacts/> </a>


      </nav>
    
  
    </>



  )
}

export default Nav