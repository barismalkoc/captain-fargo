import React from 'react';
import './footer.scss'
import {Link, NavLink} from "react-router-dom";

function Footer() {
    return (
      <div className={"footer"}>
        <div className={"container"}>
          <div className={"left-side"}>
            <Link to={"/"}>
              <img src="https://captainfargo.com/static/main/logo_white.e7a528a00d67.png"/>
            </Link>

            <p className={"address"}>Ömer Avni Mah. Beytül Malcı Sk. No: 10/9 Kabataş Beyoğlu/İstanbu</p>
            <hr/>
            <p className={"tel-no"}>
              0850 304 85 99
            </p>
            <p className={"mail"}>
              info@captainfargo.com
            </p>
          </div>
          <div className={"right-side"}>
            <ul>
              <NavLink to={"/blueVoyage"}>Mavi Yolculuk</NavLink>
              <Link to={"/about"}>Hakkımızda</Link>
              <li>SSS</li>
              <Link to={"/blog"}>Blog</Link>
              <li>Giriş Yap</li>
              <li>Üye Ol</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Footer;
