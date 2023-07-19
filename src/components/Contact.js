import React from 'react'
import Image from "./image.jpg";


export default function Contact(props) {
  return (
    <>
    <div className='container' >
      <div className="card" style={{width: '18rem' , backgroundColor : props.mode ==='dark' ? '#b4b4e1' : 'white' }} id='contct'>
      <img src={Image} className="card-img-top" alt="..."/>
     <div className="card-body">
    <h3 className="card-title">Contact Us</h3>
    <p className="card-text"> 
          <ul>
          <li><b>App Name = My-app</b></li>
          <li><b>Work = Text Editing</b></li>
          <li><b>Gmail = texteditor@ gmail.com</b></li>
          <li><b>Contact No.= 78697991.., 98930552...</b></li>
          <li><b>Address = 466, Behind Medanta Hospital Scheme no. 56 Vijay Nagar Indore (M.P.) India.</b></li>
           </ul>
    </p>
       </div>
       </div>
       </div>
       </>
  )
}
