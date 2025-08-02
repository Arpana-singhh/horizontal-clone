'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
// import "../../../public/assets/styles/hero.css"

export default function Hero() {
    const [isScroll, issetScroll]=useState(false);
    useEffect(()=>{
       const handleScroll =()=>{
        if(window.scrollY > 50){
            issetScroll(true);
        }
        else{
            issetScroll(false);
        }
       }


      window.addEventListener('scroll', handleScroll);
      return ()=>window.removeEventListener('scroll', handleScroll);
    },[])
   
  return (
    <>
    <div  className={`hero ${isScroll ? "scrolled" : ""}`}>
        <div className="hero-wrapper">
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-video-container">
                        <div className="hero-video-wrap">
                            <div className="hero-video">
                                <video autoPlay loop muted playsInline>
                                    <source 
                                        src="/sample-view.mp4" 
                                        type="video/mp4"
                                    />
                                </video>
                                <div className="video-overlay"></div>
                                <div className="bg-pg">
                                    <div className="bg-pg-wrap">
                                        <div className="bg-pg-inner">
                                            <Link href="/" className="txt-lst">We put people at the center of everything we do</Link>
                                            <span className="grn-arrow"><i className="fa-solid fa-arrow-right-long"></i></span>
                                        </div>
                                
                                    </div>
                                </div>
                             </div>
                            <p className="hero-video-title">
                                <span className="hero-title">We are</span>
                                <span className="hero-title">Horizontal</span>
                                <span className="hero-title hero-title3"> Digital
                                    <span className="hero-sub-title">
                                        <span>An Experience</span>
                                        <span>Forward</span>
                                        <span>Consultancy</span>
                                    </span>
                                </span>
                            </p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
