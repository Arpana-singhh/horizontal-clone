import React from 'react'
import Link from "next/link"
import Services from '../../../public/assets/images/Faq-bg.jpeg'
// import "../../../public/assets/styles/service.css"

export default function Service() {
  return (
    <>
    <div className="service">
        <div className="service-wrapper">
            <div className="container">
                <div className="service-inner">
                     <div className="service-top">
                      <span className="thk-lin"></span>
                      <h1 className="serv-title">We architect meaningful, end‑to‑end experiences through strategy, creativity and technology.</h1>
                     </div>
                     <div className="service-bottom">
                      <div className="serv-link">
                        <div className="serv-link-inner">
                          <Link href="#nogo" className="serv-link-wrap">
                            <h4 className="lnk-ttl">CX Strategy & Design</h4>
                            <div className="lnk-arrow-btn">
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                          </Link>
                          <Link href="#nogo" className="serv-link-wrap">
                            <h4 className="lnk-ttl">Sales, Service & CRM</h4>
                            <div className="lnk-arrow-btn">
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                          </Link>
                          <Link href="#nogo" className="serv-link-wrap">
                            <h4 className="lnk-ttl">Commerce</h4>
                            <div className="lnk-arrow-btn">
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                          </Link>
                          <Link href="#nogo" className="serv-link-wrap">
                            <h4 className="lnk-ttl">Customer Data Management</h4>
                            <div className="lnk-arrow-btn">
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                          </Link>
                          <Link href="#nogo" className="serv-link-wrap">
                            <h4 className="lnk-ttl">Digital Experience Management</h4>
                            <div className="lnk-arrow-btn">
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                          </Link>
                          <Link href="#nogo" className="serv-link-wrap">
                            <h4 className="lnk-ttl">Infrastructure, Integrations & Governance</h4>
                            <div className="lnk-arrow-btn">
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                          </Link>
                          <Link href="#nogo" className="serv-link-wrap">
                            <h4 className="lnk-ttl">Analytics & AI</h4>
                            <div className="lnk-arrow-btn">
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                          </Link>
                          <Link href="#nogo" className="serv-link-wrap">
                            <h4 className="lnk-ttl">Marketing Automation</h4>
                            <div className="lnk-arrow-btn">
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                          </Link>
                          <Link href="#nogo" className="serv-link-wrap">
                            <h4 className="lnk-ttl">Managed Services</h4>
                            <div className="lnk-arrow-btn">
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                          </Link>
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
