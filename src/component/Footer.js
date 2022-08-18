import React,{useState, useEffect} from 'react'

import './Footer.css'
function Footer() {
    const [show, handleShow] =useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if((window.innerHeight+window.pageYOffset)>=document.body.offsetHeight){
                handleShow(true);
            }else{
                handleShow(false);
            }
        })
    })
  return (
    <footer className={`footers ${show && "visible"}`}>
            <dl>
                <dt>CEO</dt>
                <dd>Bilgates</dd>
            </dl>
            <dl>
                <dt>Adress</dt>
                <dd>서울 강남 테헨란로 19022로</dd>
                <dt>Call</dt>
                <dd>010-1111-2222</dd>
            </dl>
            <dl>
                <dt>Clone Site Practice</dt>
                <dd>Youtube<a href="https://www.youtube.com/watch?v=XtMThy8QKqU&amp;t=11267s">Clone</a></dd>
            </dl>
    </footer>
  )
}

export default Footer