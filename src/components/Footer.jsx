import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="one">
        <div className="footer-left">
          <img
            src="/public/pics/logo.png"
            alt="Logo"
            className="logo"
          />
          <div className="home">
            A home
            <br />
            tailored to <span className="you">you.</span>
          </div>
        </div>
        <div className="footer-center">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Licenses</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <ul>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Cookies policy</a>
              </li>
              <li>
                <a href="#">India</a>
              </li>
          </ul>
        </div>
      </div>
      <div className="footer-icons">
        <a href="mailto:example@email.com">
          <img
            src="/public/pics/image.png"
            alt="Email"
          />
        </a>
        <a href="#">
          <img
            src="https://static.vecteezy.com/system/resources/previews/045/934/243/original/instagram-logo-icon-transparent-background-free-png.png"
            alt="Instagram"
          />
        </a>
        <a href="#">
          <img
            src="/public/pics/X.png"
            alt="X"
          />
        </a>
        <a href="#">
          <img
            src="/public/pics/linked.png"
            alt="LinkedIn"
          />
        </a>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Seculinx Inc. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
