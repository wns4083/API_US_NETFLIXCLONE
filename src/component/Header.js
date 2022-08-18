import React,{useEffect, useState} from 'react'
import {RiNetflixFill} from 'react-icons/ri'
import {IoPerson} from 'react-icons/io5'

import './Header.css'

function Header() {
    const [show, handleShow] =useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>150){
                handleShow(true);
            }else{
                handleShow(false);
            }
        })
    })
  return (
    <header className={`headers ${show && "black"}`}>
        <div className='logo'>
            <RiNetflixFill style={{color:"red"}} alt="company_logo" className="company_logo"/>
        </div>
        <div className='status'>
            <IoPerson style={{color:"blue"}} alt="member_status" className='member_status'/>
        </div>
    </header>
  )
}

export default Header