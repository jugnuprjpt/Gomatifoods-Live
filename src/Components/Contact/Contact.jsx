import React from 'react'


const Contact = () => {
  return (
    <>
        <section className="contact">
        <div className='container-fluid'>
            <h3 className='head-contact text-center'>Get In Touch</h3>
            <div className='row '>
                <div className='col-md-4' >
                    <div className='phone' style={{boxShadow:"0px 2px 10px 3px black"}}>
                        <img src='../img/Phone.jpg' alt='no img'/>
                        <p>+91 9726009742</p> 
                    </div>
                </div>
                <div className='col-md-4'>
                <div className='Email phone' style={{boxShadow:"0px 2px 10px 3px black"}}>
                <img src='../img/mail.jfif' alt='no img'/>
                        <p className='m-set1'>customercare@gomatifood.com</p> 
                    </div>
                </div>
                <div className='col-md-4'>
                <div className='loction phone'style={{boxShadow:"0px 2px 10px 3px black"}}>
                <img src='../img/Location.png' alt='no img'/>
                        <p className='m-set'>Palanpur,Gujarat,India</p> 
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Contact