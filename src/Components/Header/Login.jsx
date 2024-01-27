import React from "react";

const Login = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 d-flex align-items-center justify-content-center vh-100">
            <div class="container ">
              <div class="row no-gutters shadow loginminheight ">
                <div class="col-md-6 loginbg"></div>
                <div class="col-md-6 d-flex align-items-center">
                  <div class="card logincontent forcustom  border-0 w-100 ">
                    <div class="card-body pt-md-4 pb-mg-4">
                      <h2 class="text-center orangetext">Login</h2>

                      <div class="input-group mb-4 formimg">
                        <div class="input-group-prepend">
                          {" "}
                          <span class="input-group-text" id="basic-addon1">
                            {" "}
                            <img
                              src="img/svg/login-user.svg"
                              alt=""
                              class="img-fluid loginicon"
                            />{" "}
                          </span>{" "}
                        </div>
                        <input
                          type="text"
                          class="form-control border-radius-0"
                          placeholder="Full Name"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div class="input-group mb-4 formimg">
                        <div class="input-group-prepend">
                          {" "}
                          <span class="input-group-text" id="basic-addon1">
                            {" "}
                            <img
                              src="img/svg/login-lock.svg"
                              alt=""
                              class="img-fluid loginicon"
                            />{" "}
                          </span>{" "}
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Full Name"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>

                      {/* <div class="row justify-content-between flex-md-nowrap flex-wrap">
                    <div class="col-md mb-4">
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                        <label class="custom-control-label" for="customCheck1">I agree to the </label>
                        <a href="#" class=" orangetext font-weight-semi-bold underline"> Terms & Conditions </a>
                      </div>
                    </div>
                    <div class="col-md text-md-right mb-4">
                      <a href="#" class="orangetext font-weight-semi-bold underline">Forgot Password?</a>
                    </div>

                  </div> */}

                      <div class="form-group text-center">
                        <a href="#" class="btn orangebtn">
                          <span>Login</span>
                        </a>
                      </div>

                      {/* <div class="form-group text-center mb-2"> <a href="#"
                      class="orangetext underline text-center font-weight-semi-bold">Create New Account</a> </div> */}
                      <div class="form-group text-center mb-2">
                        {" "}
                        <a
                          href="#"
                          class="orangetext underline text-center font-weight-semi-bold"
                        >
                          Skip Login
                        </a>{" "}
                      </div>
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

export default Login;
