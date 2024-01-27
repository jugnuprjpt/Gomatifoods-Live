import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormInput = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2qv2kpp",
        "template_t0w6cke",
        form.current,
        "fiIdHXeDmwQ0EmHH_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {/* <form action="" method="get"> */}
      <form ref={form} onSubmit={sendEmail}>
        <div class="container">
          <div class="form-box">
            <h2>Fill your personal detail</h2>
            <div class="input-field">
              <label for="">User name </label>
              <input
                type="text"
                onkeyup="lengthfind(this,'userNameLengthError')"
                onblur="checkreq(this,'userNameError')"
                name="user_name"
                id="Username"
                required
                placeholder="Enter your fullname"
                autocomplete="off"
              />
              <small id="userNameError">This field is required</small>
              <small id="userNameLengthError">Min 6 Max 10 char</small>
            </div>
            <div class="input-field">
              <label for="">Email-id </label>
              <input
                type="email"
                onkeyup="emailpattern(this,'emailPatternError')"
                onblur="checkreq(this,'emailError')"
                name="user_Email"
                id="Email"
                required
                placeholder="Enter your Email"
                autocomplete="off"
              />

              <small id="emailError">Error Msg</small>
              <small id="emailPatternError">Invalid Email</small>
            </div>
            <div class="input-field">
              <label for="">Mobile-number </label>
              <input
                type="tel"
                onkeypress="return (event.which >= 48 && event.which <= 57)"
                onblur="checkreq(this,'mobileError')"
                minlength="10"
                maxlength="10"
                name="user_Phone"
                required
                id="Phone"
                placeholder="Enter your Mobile-number "
                autocomplete="off"
              />
              <small id="mobileError">Error Msg</small>
            </div>
            <div class="input-field">
              <label for="">Address</label>
              <textarea class = "txt-field" name="user_adress" id="" cols="50" rows="3"></textarea>
            </div>
            <div class="input-field">
              <label for="">Product Description </label>
              &nbsp;
              <div
                class="pdkt"
                style={{
                  textAlign:
                    "center" /* position:"absolute",left:"800px", top:"500px" */,
                }}
              >
                <p>
                  <b>Pure filted oil 5kg - Rs.900 </b>
                </p>
                <p>
                  <b>Quntity </b>
                </p>

                <select name="cars" id="cars">
                 
                  <option value="Quntity 0">No.of quntity &nbsp; 0 </option>
                  <option value="Quntity 1">1</option>
                  <option value="Quntity 2">2</option>
                  <option value="Quntity 3">3</option>
                  <option value="Quntity 4">4</option>
                </select>
              </div>
              <br />
              <hr />
              <div
                class="parttwo"
                style={{ textAlign: "center"  }}
              >
                <p>
                  <b>Pure filted oil 15kg - Rs.1000 </b>
                </p>
                <p>
                  <b>Quntity </b>
                </p>

                <select name="newcar" id="new">
                  <option value="Quntity 0">No.of quntity &nbsp; 0 </option>
                  <option value="Quntity 1">1</option>
                  <option value="Quntity 2">2</option>
                  <option value="Quntity 3">3</option>
                  <option value="Quntity 4">4</option>
                </select>
              </div>
              
            </div>

            {/*  <Link to = "/Payment"> */}
            <input
              class="sub"
              type="submit"
              id="submit"
              value="submit"
              style={
                {
                  
                }
              }
            />
            {/* </Link> */}
          </div>
        </div>
      </form>
      {/* </form> */}
    </>
  );
};

export default FormInput;
