'use client'
import React, {useState, useEffect} from 'react'
// import "../../../public/assets/styles/navbar.css"

import { Hori } from "../../../public/assets/svgs/svgs"
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen]=useState(false);

  const toggleMenu=()=>{
    setIsOpen((prev)=>!prev)
  }

  useEffect(()=>{
    if(isOpen){
      document.body.classList.add('open')
    }
    else{
      document.body.classList.remove('open')
    }
  },[isOpen])

  return (
    <>
    <section className="header">
    <div className="nav-wrapper">
    <div className="container">
      <div className="nav-inner">
          <div className="nav-logo">
            <Hori/>
          </div>
          <div className="nav-item">
          <button className="ham-btn" onClick={toggleMenu}>
            <span className={`ham-1 ${isOpen ? 'active' : ''}`}></span>
            <span className={`ham-2 ${isOpen ? 'active': ''}`}></span>
            <span className={`ham-3 ${isOpen ? 'active' : ''}`}></span>
            <span className={`ham-4 ${isOpen ? 'active' : ''}`}></span>
          </button>
          <div className="overlay">
            <ul className="nav-link">
              <li>
                <Link href="/work" className="fs-82">Work</Link>
              </li>
              <li>
                <Link href="/services" className="fs-82">Services</Link>
              </li>
              <li>
                <Link href="/platforms" className="fs-82">Platforms</Link>
              </li>
              <li>
                <Link href="/insights" className="fs-82">Insights</Link>
              </li>
              <li>
                <Link href="/about" className="fs-42">About Us</Link>
              </li>
              <li>
                <Link href="/careers" className="fs-42">Careers</Link>
              </li>
              <li>
                <Link href="/news" className="fs-42">News</Link>
              </li>
              <li>
                <Link href="/contact" className="fs-42">Contact Us</Link>
              </li>
            </ul>
           </div>
          </div>
        </div>
    </div>
      
    </div>
    </section>
    </>
  )
}
