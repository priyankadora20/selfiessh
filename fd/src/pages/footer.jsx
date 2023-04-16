import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
      <>
    <div id='footercont'>

          <div className='footerbox'>
              <h3>STORE INFO</h3>
              <p>123 London street, United Kingdom </p>
              <p>(+012)3456 789</p>
              <p>hello@domain.com</p>

           <div id="socials">
                        <div>
                        <h3>SOCIALS:</h3>
                        </div>

                        <div id="social-icon">

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/900px-Instagram_logo_2022.svg.png?20220518162235" alt="instagram" />
                        <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="" />
                        <img src="https://spng.pngfind.com/pngs/s/181-1815591_facebook-circle-icon-facebook-icon-png-brown-transparent.png" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/512/145/145808.png" alt="" />
             
                        </div>           
                        </div>

          </div>
          
          <div className='footerbox'>
              <h3 >COMPANY</h3>

              
                  <li>Careers</li>
                  <li>Business with us</li>
                  <li>Contact us</li>
                  <li>About us</li>
                  <li>FAQs</li>
              

          </div>

          <div className='footerbox'>
              <h3 >Account</h3>
              
                  <li>My account</li>
                  <li>My cart</li>
                  <li>Track my order</li>
                  <li>Checkout</li>
                  <li>Terms of use</li>
              
          </div>

          <div className='footerbox' id="contact">
              <h3>GET IN TOUCH</h3>
              <p>Sign up to receive amazing offers & deals</p>
             
                <div id="cont"> 
                        
              
                
                <input id="inpu" type="email" placeholder='Enter Your Email' /> 
                <button id="btnfoot" >SUBSCRIBE</button>   
                
               
                </div>     
             
          </div>



            </div>
            <div>
                <p>Copyright @ 2023 Selfieesh. All Right Reserved.</p>
           
            </div>
            </>
  )
}

export default Footer;