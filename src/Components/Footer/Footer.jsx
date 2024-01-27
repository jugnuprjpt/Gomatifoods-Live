import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footercontainer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg pt-3 pt-xl-0">
                <a href="#" className="mb-3 d-block ">
                  <img src="../img/Logo-g.jpeg" alt="" style={{width:"180px", height:"150px", top:"10px"}}/>
                </a>
                <ul className="d-flex sociallinks pb-3 pb-xl-0 ml-5">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li> */}

                  <li>
                    <a href="https://www.instagram.com/?hl=en">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.youtube.com/">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg">
                <h4>Quick Links</h4>
                <ul className="footerlinks">
                  <li>
                    {/* <a href="#"> Our Partners & Services </a>{" "} */}
                    <Link
                          to="/Home" href=""
                          className="nav-link"
                          title="Home"
                        >
                          Home
                        </Link>
                  </li>
                  
                  <li>
                  <Link
                  to="/AboutUs"
                  href=""
                  className="nav-link"
                  title="About-us"
                  >
                  About-us
                  </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg">
                <h4>Information</h4>
                <ul className="footerlinks">
                  <li>
                    {/* <a href="#"> All products </a>{" "} */}
                    <Link
                          to="/ProductNew"
                          href=""
                          className="nav-link"
                          title=" ProductNew "
                        >
                          Products
                        </Link>
                  </li>
                  <li>
                    {/* <a href="#">Contact Us</a>{" "} */}
                    <Link
                          to="/GetInTouch"
                          href=""
                          className="nav-link"
                          title="GetInTouch"
                        >
                          Get In Touch
                        </Link>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-lg">
                <h4>Legal</h4>
                <ul className="footerlinks">
                  <li>
                    <a href="#"> Privacy Policy </a>{" "}
                  </li>
                  <li>
                    <a href="#">Disclaimer</a>{" "}
                  </li>
                </ul>
              </div>

              <div className="col-6 col-lg">
                <h4>Registered Office</h4>
                <address>
                  M/S GOMATIFOOD PLOT NO 12, GAJANAND MARKET, S.B.PURA PATIYA,
                  GOBARI FATAK ROAD PALANPOR 385001
                </address>
              </div>
            </div>
          </div>
        </div>
        <hr className="horizantalline" />
        <div className="footercontainer copyrighttext pt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md text-center text-md-left">
                <p className="font-14  mb-0">
                  &copy; Gomati 2022 | All rights reserved
                </p>

                <p className="font-14  mb-0">
                  <span
                    style={{
                      fontWeight: "700",
                      fontFamily: "arial",
                      fontSize: "16px",
                    }}
                  >
                    <b>Gomati</b>
                  </span>{" "}
                  is a registered Trademark of Gomati foods
                </p>
              </div>
              <div className="col-12 col-md text-center text-md-right">
                <p className="font-14  mb-0">
                  <span
                    style={{
                      fontWeight: "700",
                      fontFamily: "arial",
                      fontSize: "16px",
                    }}
                  >
                    <b>Gomati foods Palanpur</b>
                  </span>{" "}
                </p>
                <p className="font-11  mb-0" style={{ fontSize: "12px" }}>
                  
                  <span
                    style={{
                      fontWeight: "700",
                      fontFamily: "arial",
                      fontSize: "12px",
                    }}
                  >
                    GST NUMBER:
                  </span>{" "}
                  24DKYPP3942M1Z8{" "}
                 
                 
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center text-md-right">
                <small className="poweredbytext">
                  Powered By{" "}
                  <a href="">
                  Gomati foods
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
