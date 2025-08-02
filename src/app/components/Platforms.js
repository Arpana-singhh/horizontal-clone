'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Platform from '../../../public/assets/images/Platfrom.png'
import { Boxarrow, Boxarw } from "../../../public/assets/svgs/svgs";
// import "../../../public/assets/styles/platform.css"


export default function Platforms() {
    const platformRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

     useEffect(() => {
                  const observer = new IntersectionObserver(
                      ([entry]) => {
                          if (entry.isIntersecting) {
                              setIsVisible(true);
                          }
                      },
                      { threshold: 0.3 } // Trigger when 30% of the component is visible
                  );
          
                  if (platformRef.current) {
                      observer.observe(platformRef.current);
                  }
          
                  return () => {
                      if (platformRef.current) {
                          observer.unobserve(platformRef.current);
                      }
                  };
              }, []);
  return (
    <>
    <div className="insight" ref={platformRef}>
        <div className="insight-wrapper">
            <div className="container">
                <div className="insight-inner">
                  <div className={`insight-left ${isVisible ? "animate" : ""}`}>
                      <div className="ins-left-inner">
                        <p>Work</p>
                      </div>
                  </div>
                  <div className="insight-middle">
                    <div className="ins-mid-inner">
                        <h5 className="sub-ttl">Salesforce Data Cloud</h5>
                        <h2 className="main-ttl">Your data is only as good as the strategy behind it</h2>
                        <p className="cmn-text">Unlock the power of connection with Data Cloud</p>
                        <Link href="/" className="watch-btn">
                            <span>Learn More</span>
                            <Boxarw/>
                        </Link>
                    </div>
                  </div>
                  <div className="insight-right">
                    <div className="ins-rgt-inner">
                        <div className={`insight-img ${isVisible ? "animate" : ""}`}>
                        <Image src={Platform} alt="Platfrom"/>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}


