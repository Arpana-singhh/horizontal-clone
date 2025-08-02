"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../../../public/assets/styles/about.css";
export default function About() {
  const [addOutClass, setAddOutClass] = useState(false);

  useEffect(() => {
    let timer;
    if (addOutClass) {
      timer = setTimeout(() => {
        setAddOutClass(false);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [addOutClass]);

  const handleMouseLeave = () => {
    setAddOutClass(true);
  };

  return (
    <>
      <div className="about">
        <div className="about-wrapper">
          <div className="container">
            <div className="about-inner">
              <div className="about-cont">
                <div className="cont-inner">
                  <div className="rating-block">
                    <Link href="#nogo" className="rating-link">
                        <div className="rating-card">
                            <span className="cards card-fx-1"></span>
                            <span className="cards card-fx-2"></span>
                            <div className="card-cont">
                                <div className="card-top">
                                <span className="rat-txt">4.9</span>
                                <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="card-bottom">
                                <span>Clutch</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href="#nogo" className="rating-link">
                    <div className="rating-card">
                        <span className="cards card-fx-1"></span>
                        <span className="cards card-fx-2"></span>
                        <div className="card-cont">
                            <div className="card-top">
                            <span className="rat-txt">5.0</span>
                            <i className="fa-solid fa-star"></i>
                            </div>
                            <div className="card-bottom">
                            <span>GoodFirms</span>
                            </div>
                        </div>
                    </div>
                    </Link>

                    <Link href="#nogo" className="rating-link">
                    <div className="rating-card">
                        <span className="cards card-fx-1"></span>
                        <span className="cards card-fx-2"></span>
                        <div className="card-cont">
                            <div className="card-top">
                            <span className="rat-txt">4.8</span>
                            <i className="fa-solid fa-star"></i>
                            </div>
                            <div className="card-bottom">
                            <span>Google</span>
                            </div>
                        </div>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="btnn">
              <Link
                href="#nogo"
                className={`recent-work ${addOutClass ? "ant-out" : ""}`}
                onMouseLeave={handleMouseLeave}
              >
                Recent Work
                <div className="btn-overlay"></div>
              </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
