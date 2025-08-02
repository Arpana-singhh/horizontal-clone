import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterLogo from "../../../public/assets/images/footer-logo.png";
import Instagram from "../../../public/assets/images/instagram.svg";
import LinkedIn from "../../../public/assets/images/linkedin.svg";
import Vimeo from "../../../public/assets/images/vimeo.svg";

import "../../../public/assets/styles/global.css";

import { Boxarrow, Boxarw } from "../../../public/assets/svgs/svgs";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="container">
            <div className="footer-inner">
              <div className="footer-left">
                <div className="footer-logo">
                  <Link href="#nogo">
                    {" "}
                    <Image src={FooterLogo} alt="Horizontal Logo" />
                  </Link>
                </div>
                <p className="ft-txt">© Horizontal Digital 2025 – Legal</p>
              </div>
              <div className="footer-right">
                <ul className="ft-link">
                  <li>
                    <Link href="#nogo" className="ft-lnk">
                      <span>Blog</span>
                      <Boxarrow />
                    </Link>
                  </li>
                  <li>
                    <Link href="#nogo" className="ft-lnk">
                      <span> Contact Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#nogo" className="ft-lnk">
                      <span> Videos</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#nogo" className="ft-lnk">
                      <span>Privacy Policy</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#nogo" className="ft-lnk">
                      <span>Disclaimer</span>
                    </Link>
                  </li>
                </ul>

                <div className="icn-lnk">
                  <Link href="#">
                    <Image
                      src={LinkedIn}
                      alt="LinkedIn"
                      width={18}
                      height={18}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src={Instagram}
                      alt="Instagram"
                      width={18}
                      height={18}
                    />
                  </Link>
                  <Link href="#">
                    <Image src={Vimeo} alt="Vimeo" width={18} height={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="container">
          <p className="cpy-txt">
            Need a staffing solution?
            <strong>
              Visit our sister company
              <Link href="#nogo" target="_blank"> <span>Horizontal Talent</span>  <Boxarw />
              </Link>
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}
