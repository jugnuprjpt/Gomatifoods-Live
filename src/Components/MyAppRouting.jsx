import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import Home from "./Home/Home"; */
import Header from "./Header/Header";
/* import Login from "./Header/Login.jsx";
import Health from "./Home/Health"; */
import Footer from "./Footer/Footer";
import MainPage from "./MainPage/MainPage";
import Slider from "./Slider/Slider";
/* import Card from "./Card/Card";  */
/* import Resuable from "./Resuable/Resuable"; */
import Product from "./Product/Product";
import ResuableService from "./Resuable/ResuableService";
import ProductCard from "./ProductCard/ProductCard";
/* import ResuableProd from "./Resuable/ResuableProd"; */
/* import About from "./About/About";
import Contact from "./Contact/Contact";
import Amezon from "./Resuable/Amezon";
import Trolly from "./ProductCard/Trolly";
import NewPage from "../NewPage"; */

import Home from "../Components/Home/Home" 
import AboutUs from "../Components/Home/AboutUs" 
import OurService from "./Home/OurService.jsx" 
import ProductNew from "./Home/ProductNew.jsx" 
import GetInTouch from "./Home/GetInTouch.jsx" 
import FormInput from "../Components/FormInput/FormInput.jsx"
/* import Payment from "../Components/Payment/Payment.jsx" */
import Fqc from "../Components/Fqc/Fqc.jsx"


function MyAppRouting() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
       
         <Route path="/" element={<MainPage/>}></Route>
         <Route path="/Home" element={<Home />} />
         <Route path="/AboutUs" element={<AboutUs />} />
         <Route path="/OurService" element={<OurService />} />
         <Route path="/ProductNew" element={<ProductNew />} />
         <Route path="/GetInTouch" element={<GetInTouch />} />
         <Route path="/FormInput" element={<FormInput />} />
        {/*  <Route path="/Payment" element={<Payment />} /> */}
         <Route path="/Fqc" element={<Fqc />} />
       {/*  <Route path="/Blank" element={<NewPage/>}></Route>  */}

       </Routes>
        
    
        <Footer />
       {/*  <LogJu></LogJu> */}
      

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />}></Route>
          <Route path="/Health">
             <Route index element={<Health />}/>
             <Route path="HealthFamilyDetail" element={<HealthFamilyDetail />} />
             <Route path="HealthInsurance" element={<HealthInsurance />} />
             <Route path="HealthReviewPay" element={<HealthReviewPay />} />
             <Route path="HealthProposal" element={<HealthProposal />} />
             <Route path="HealthRaviewPay" element={<HealthRaviewPay />} />
             <Route path="HealthPayment" element={<HealthPayment />} />
             <Route path="HealthPaymentSucess" element={<HealthPaymentSucess />} />
        </Route>
        </Routes> */}
       {/*  <Footer /> */}
      </BrowserRouter> 
      
    </>
  );
}

export default MyAppRouting;
