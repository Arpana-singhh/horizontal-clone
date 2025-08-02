'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Works from '../../../public/assets/images/Work.png'
import { Boxarrow, Boxarw } from "../../../public/assets/svgs/svgs";
// import "../../../public/assets/styles/work.css"


export default function Work() {
      const workRef = useRef(null);
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
      
              if (workRef.current) {
                  observer.observe(workRef.current);
              }
      
              return () => {
                  if (workRef.current) {
                      observer.unobserve(workRef.current);
                  }
              };
          }, []);
  return (
    <>
    <div className="insight" ref={workRef}>
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
                        <h5 className="sub-ttl">Shure</h5>
                        <h2 className="main-ttl">Harmonizing digital customer journeys for a legendary audio brand</h2>
                        <p className="cmn-text">Discover how Horizontal Digital revamped Shure's user experience and implemented a modern tech stack that drives efficiency, growth, and seamless end-to-end customer journeys.</p>
                        <Link href="/" className="watch-btn">
                            <span>Learn More</span>
                           <Boxarw/>
                        </Link>
                    </div>
                  </div>
                  <div className="insight-right">
                    <div className="ins-rgt-inner">
                        <div className={`insight-img ${isVisible ? "animate" : ""}`}>
                        <Image src={Works} alt="Work"/>
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


