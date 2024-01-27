import React from "react";
import { Link } from "react-router-dom";
import ProductCardApi from "../../Api/ProductCardApi";


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md flex-wrap menu innerpagemenu" style={{position:"sticky", top:"0", zIndex:"100"}}>
        <div className="row flex-grow-1">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-md-auto d-flex">
                <a className="navbar-brand order-md-1" href="#">
                  <img src="../img/Logo-g.jpeg" alt="" style={{width:"100px", height:"85px", top:"10px", marginLeft:"20px"}}/>
                </a>
                <button
                  className="navbar-toggler ml-auto"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExampleDefault"
                  aria-controls="navbarsExampleDefault"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div className="col-12 col-md flex-grow-1 d-flex align-items-center flex-column">
                <div className="d-flex flex-grow-1 w-100 flex-wrap ">
                  <div
                    className="collapse navbar-collapse  justify-content-center order-2 order-md-0"
                    id="navbarsExampleDefault"
                  >
                    <ul className="navbar-nav d-md-flex flex-md-wrap ">
                      <li className="nav-item">
                        <Link
                          to="/Home" href=""
                          className="nav-link"
                          title="Home"
                        >
                          Home
                        </Link>
                        {/* <a href="https://uat.veritasins.com/Home/AboutUs"> About Us</a> */}
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/AboutUs"
                          href=""
                          className="nav-link"
                          title="About-us"
                        >
                        About-us
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                        <a
                          to="/Support"
                          href=""
                          className="nav-link"
                          title="Support"
                        >
                          We deliver
                        </a>
                      </li> */}
                      <li className="nav-item">
                        <Link
                          to="/OurService"
                          href=""
                          className="nav-link"
                          title=" OurService "
                        >
                          Our Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/ProductNew"
                          href=""
                          className="nav-link"
                          title=" ProductNew "
                        >
                          Products
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/GetInTouch"
                          href=""
                          className="nav-link"
                          title="GetInTouch"
                        >
                          Get In Touch
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/Fqc"
                          href=""
                          className="nav-link"
                          title="Fqc"
                        >
                          FAQ
                        </Link>
                      </li>
                     {/*  <li className="nav-item">
                        <a
                          to="/GetPolicyPDF"
                          href=""
                          className="nav-link"
                          title=" Get PolicyPDF "
                        >
                          Contact
                        </a>
                      </li> */}
                     
                    </ul>
                  </div>
                  
                  <div className="order-0 order-md-1 ml-md-auto mt-4">
                     {/*  <a
                      href=""
                      className="orangebtn  text-nowrap mr-2 d-inline-block"
                    >  */}
                     {/*  <img src="img/Login_Icon_1.png" alt="" /> */}
                      {/*  My account
                    </a>  */}
                   {/*  <Link to = "/Login">
                    <a
                      href="#"
                      className="orangebtn text-nowrap d-inline-block"
                    > */}
                    {/*   <img src="img/Login_Icon_1.png" alt="" /> */}
                    {/*   Login
                    </a>
                    </Link> */}
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
