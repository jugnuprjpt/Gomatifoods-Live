import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
    
      <div className="container-fluid commoncl carbg filldetail d-flex align-items-center justify-content-center">
        <div className="row flex-grow-1">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-12 col-xl-10 offset-xl-1 pt-3 pb-3 ">
                  <div className="card commoncard ">
                    <div className="card-header d-flex justify-content-center align-items-center">
                      <h1>Fill Your Details </h1>
                      <img
                        src="img/logo-wh.png"
                        alt=" "
                        className="img-fluid whitelogo"
                      />
                    </div>
                    <div className="card-body">
                      <div className="form-container">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control text-center"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control text-center"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control text-center"
                            placeholder="Mobile No."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control text-center"
                            placeholder="Enter OTP"
                          />
                        </div>

                        <div className="row">
                          <div className="col-12 text-right mb-3">
                            <a href="#" className="orangetext underline">
                           
                              Click here to get OTP
                            </a>
                          </div>
                        </div>
                      </div>
                      <Link to="/Health/HealthInsurance">
                        <div className="row">
                          <div className="col-12 text-center">
                            <button className="btn orangebtn mb-3 bigbutton">
                            
                              Get Quote
                            </button>
                          </div>
                        </div>
                      </Link>

                      <p className="text-center">
                        By clicking on "Get Quote", you agree to our{" "}
                        <a href="#" className="orangetext">
                          {" "}
                          Privacy Policy{" "}
                        </a>{" "}
                        &
                        <a href="#" className="orangetext">
                          {" "}
                          Terms of Use{" "}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
