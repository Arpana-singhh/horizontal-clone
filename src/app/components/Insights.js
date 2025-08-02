'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Insight from '../../../public/assets/images/Insight.png'

// import "../../../public/assets/styles/insights.css"

export default function Insights() {
    const insightRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } 
        );

        if (insightRef.current) {
            observer.observe(insightRef.current);
        }

        return () => {
            if (insightRef.current) {
                observer.unobserve(insightRef.current);
            }
        };
    }, []);

  return (
    <>
    <div className="insight" ref={insightRef}>
        <div className="insight-wrapper">
            <div className="container">
                <div className="insight-inner">
                  <div className={`insight-left ${isVisible ? "animate" : ""}`}>
                      <div className="ins-left-inner">
                        <p>Insights</p>
                      </div>
                  </div>
                  <div className="insight-middle">
                    <div className="ins-mid-inner">
                        <h5 className="sub-ttl">Introducing</h5>
                        <h2 className="main-ttl">Marketing Cloud Master Class</h2>
                        <p className="cmn-text">Class is in session. Horizontal’s Marketing Cloud Master Class is a video series packed with expert tips, strategies, and real-life use cases to help you maximize your Marketing Cloud potential.</p>
                        <Link href="/" className="watch-btn">
                            <span>Watch Now</span>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                  </div>
                  <div className="insight-right">
                    <div className="ins-rgt-inner">
                        <div className={`insight-img ${isVisible ? "animate" : ""}`}>
                        <Image src={Insight} alt="Insight"/>
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


