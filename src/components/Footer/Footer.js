import React from "react";
import Button from "../Button/Button";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-box">
        <div className="footer-top">
          <div className="footer-contact">
            <div className="footer-contact-item">
              <h5 className="heading-5">Address</h5>
              <p>
                St Xizhiman Inner, 5th Floor-Building Sojhu 5333 Xinjiekou
                Residential District, Beijing, China.
              </p>
            </div>
            <div className="footer-contact-item">
              <h5>Email</h5>
              <p>info@nggon.com</p>
            </div>
            <div className="footer-contact-item">
              <h5>Phone</h5>
              <p>+86 (406) 555-0120</p>
            </div>
            <div className="footer-contact-item ">
              <h5>Branch Office</h5>
              <p className="footer-branch footer-branch-1">
                <span className="footer-contact-item-info">
                  <b>Berlin</b>,Germany
                </span>
                <span className="footer-contact-item-line"></span>
                <span className="footer-contact-item-info">
                  <b>Washington</b>,USA
                </span>
                <span className="footer-contact-item-line"></span>
                <span className="footer-contact-item-info">
                  <b>Jakarta</b>,Indonesia
                </span>
              </p>
              <p className="footer-branch footer-branch-2">
                <span className="footer-contact-item-info">
                  <b>Canberra</b>,Australia
                </span>
                <span className="footer-contact-item-line"></span>
                <span className="footer-contact-item-info">
                  <b>Abu Dhabi</b>,UEA
                </span>
              </p>
            </div>
          </div>
          <form className="footer-form">
            <input type="text" placeholder="Full Name"></input>
            <input type="email" placeholder="Email Address"></input>
            <textarea rows="4" placeholder="Message"></textarea>
            <Button children="Send Message" buttonStyle="button button-dark" />
          </form>
        </div>

        <div className="footer-bottom">
          <div className="footer-icons">
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram-square"></i>
          </div>
          <div className="footer-copywright">
            <p>All rights reserved.2021 Nggon</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
