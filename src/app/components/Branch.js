"use client";
import React, { useState,  useEffect } from "react";
import Image from "next/image";
// import "../../../public/assets/styles/branch.scss";
import {
  ClockMSP1,
  ClockMSP2,
  ClockMSP3,
  ClockMSP4,
  ClockMSP5,
  ClockMSP6,
  ClockMSP7,
  ClockMSP8,
  ClockMSP9,
  ClockMSP10,
  ClockMSP11,
} from "../../../public/assets/svgs/svgs";

import Branch_Bg1 from "../../../public/assets/images/brc-bg1.jpeg";
import Branch_Bg2 from "../../../public/assets/images/brc-bg2.jpeg";
import Branch_Bg3 from "../../../public/assets/images/brc-bg3.jpeg";
import Branch_Bg4 from "../../../public/assets/images/brc-bg4.jpeg";
import Branch_Bg5 from "../../../public/assets/images/brc-bg5.jpeg";
import Branch_Bg6 from "../../../public/assets/images/brc-bg6.jpeg";
import Branch_Bg7 from "../../../public/assets/images/brc-bg7.jpg";
import Branch_Bg8 from "../../../public/assets/images/brc-bg8.jpeg";
import Branch_Bg9 from "../../../public/assets/images/brc-bg9.jpeg";
import Branch_Bg10 from "../../../public/assets/images/brc-bg10.jpeg";
import Branch_Bg11 from "../../../public/assets/images/brc-bg11.jpeg";
export default function Branch() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    // Remove fade-in class immediately
    setFadeClass("");
    // Then re-add it on next tick so CSS transition can re-run
    const timer = setTimeout(() => {
      setFadeClass("fade-in");
    }, 300); // you can adjust delay if needed
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const branchinfo = [
    {
      brc_title: "MSP",
      brc_clock: <ClockMSP1 />,
      brc_place: "Minneapolis, MN",
      brc_phn: "612-392-7580",
      brc_email: "MSP@horizontal.com",
      brc_bg: Branch_Bg1,
    },
    {
      brc_title: "DEN",
      brc_clock: <ClockMSP2 />,
      brc_place: "Denver, CO",
      brc_phn: "",
      brc_email: "DEN@horizontal.com",
      brc_bg: Branch_Bg2,
    },
    {
      brc_title: "DFW",
      brc_clock: <ClockMSP3 />,
      brc_place: "Dallas, TX",
      brc_phn: "214-446-5441",
      brc_email: "DFW@horizontal.com",
      brc_bg: Branch_Bg3,
    },
    {
      brc_title: "IND",
      brc_clock: <ClockMSP4 />,
      brc_place: "Indianapolis, IN",
      brc_phn: "",
      brc_email: "IND@horizontal.com",
      brc_bg: Branch_Bg4,
    },
    {
      brc_title: "BDQ",
      brc_clock: <ClockMSP5 />,
      brc_place: "Vadodara, India",
      brc_phn: "+91-265-232-3272",
      brc_email: "BDQ@horizontal.com",
      brc_bg: Branch_Bg5,
    },
    {
      brc_title: "BLR",
      brc_clock: <ClockMSP6 />,
      brc_place: "Bengaluru, India",
      brc_phn: "+91-80-6178-7600",
      brc_email: "BLR@horizontal.com",
      brc_bg: Branch_Bg6,
    },
    {
      brc_title: "LDN",
      brc_clock: <ClockMSP7 />,
      brc_place: "London, UK",
      brc_phn: "+44-20-36277249",
      brc_email: "LDN@horizontal.com",
      brc_bg: Branch_Bg7,
    },
    {
      brc_title: "DXB",
      brc_clock: <ClockMSP8 />,
      brc_place: "Dubai, UAE",
      brc_phn: "+971-04-566-9301",
      brc_email: "DXB@horizontal.com",
      brc_bg: Branch_Bg8,
    },
    {
      brc_title: "RUH",
      brc_clock: <ClockMSP9 />,
      brc_place: "Riyadh, KSA",
      brc_phn: "+966-53-5718547",
      brc_email: "RUH@horizontal.com",
      brc_bg: Branch_Bg9,
    },
    {
      brc_title: "KUL",
      brc_clock: <ClockMSP10 />,
      brc_place: "Kuala Lumpur, Malaysia",
      brc_phn: "+603 2246 6090",
      brc_email: "KUL@horizontal.com",
      brc_bg: Branch_Bg10,
    },
    {
      brc_title: "JAI",
      brc_clock: <ClockMSP11 />,
      brc_place: "Jaipur, India",
      brc_phn: " +91-84-8797-2272",
      brc_email: "JAI@horizontal.com",
      brc_bg: Branch_Bg11,
    },
  ];
  return (
    <>
      <div className="branch">
        <div className="branch-wrapper">
          <div className="container">
            <div className="branch-inner">
              <div className="branch-top">
                <span className="thk-lin"></span>
                <h1 className="serv-title">
                  We operate as a boutique at a global level
                </h1>
              </div>
              <div className="branch-bottom">
                <div
                  className={`bg-overlay ${fadeClass}`}
                  style={{
                    backgroundImage: `url(${branchinfo[activeIndex].brc_bg.src})`,
                    
                  }}
                />
                <div className="brc-inner">
                  {branchinfo.map((item, index) => (
                    <div
                    className={`brc-wrap ${activeIndex === index ? "active" : ""}`}
                      key={index}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      <div className="brc-tlt">
                        <h2>{item.brc_title}</h2>
                        {item.brc_clock}
                      </div>
                      <h4 className="brc-place">{item.brc_place}</h4>
                      <div className="brc-txt">
                        <p className="brc-phn">{item.brc_phn}</p>
                        <p className="brc-email">{item.brc_email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
