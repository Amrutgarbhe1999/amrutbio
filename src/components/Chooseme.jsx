import React from 'react'

function Chooseme() {
  return (
    <>
        <div className="container">
            <h1  data-aos="fade-up">WHY CHOOSE ME</h1>
            <p data-aos="fade-up">Professionality at every state and quality delivery</p>
            <div className="row choose-row" data-aos="fade-up"
      data-aos-duration="1000" data-aos-delay="500">
                <div className="col-md-3 choose-content choose-hover" style={{background:'#89715b'}}>
                    <h5>profressional and dedicate team</h5>
                    
                    <p>Professional and dedicated team delivering excellence with unwavering commitment.</p>

                    <img src="https://img.icons8.com/?size=100&id=11168&format=png&color=FFFFFF" alt="" />
                </div>
                <div className="col-md-3 choose-content choose-hover-revert">
                    <h5>unique design</h5>
                    
                    <p>Crafting unique, user-friendly designs with innovation and seamless functionality.</p>

                    <img src="https://img.icons8.com/?size=100&id=2799&format=png&color=89715b" alt="" />
                </div>
                <div className="col-md-3 choose-content choose-hover" style={{background:'#89715b'}} >
                    <h5>affordable and flexiable</h5>
                    
                    <p>Providing affordable and flexible web solutions tailored to your needs.</p>

                    <img src="https://img.icons8.com/?size=100&id=209&format=png&color=FFFFFF" alt="" />
                </div>
                <div className="col-md-3 choose-content choose-hover-revert">
                    <h5>24/7 support</h5>
                    
                    <p>Offering 24/7 support to ensure seamless web development solutions.</p>

                    <img src="https://img.icons8.com/?size=100&id=11227&format=png&color=89715b" alt="" />
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Chooseme
