import React from "react";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container-fluid">
          <h3 className="head-about text-center">About Us</h3>
          <div className="row rh">
            <div className="col-md-6">
              <h3 className="about-title">Our Story...</h3>
              <p>
                Gomatifood groundnut oil mill is established with aim to promote
                and to provode healthy, natural and 100% pure oil from best
                quality groundnut to customer with preserving inherent
                antioxidant, vitamin and mineral. Our motto is customer
                satisfaction is our priority.
              </p>
              <p>
                Groundnut oil contains absolutely no cholesterol and therefore
                does not add unnecessary dietary cholesterol to our daily
                consumption. Atherosclerosis, a condition in which plaque forms
                around the arteries and leads to thickening, can thus be
                avoided. It also has a substance called resveratrol that
                decreases blood pressure and reduces stress on the
                cardiovascular system.
              </p>
              <p>
                Groundnut oil has a strong flavor when smelt raw, but after
                cooking it doesn’t leave any unwelcome smell on food and
                actually enhances flavours. It can easily be used for cooking
                various dishes. You can use this oil for the purpose of shallow
                frying or even deep frying. This oil has a high smoke point and
                is a very versatile all-purpose cooking oil.
              </p>
            </div>
            <div className="col-md-6">
              <div className="about-img-sec">
                <img src="../img/magfali.jpg" className="img-fluid" alt="no img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
