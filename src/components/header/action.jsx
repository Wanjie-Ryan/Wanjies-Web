import React from 'react'
import cv from '../../cv/Resume.pdf'




function Action() {


  return (

    <>
    
        <div className = 'cta'>
            
            <a href={cv} download >Download CV</a>
            <a href='#contact'>Let's Talk</a>
            
        </div>



    </>
  )
}

export default Action