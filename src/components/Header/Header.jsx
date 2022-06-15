import React from 'react';
import './header.scss'
import {Link} from "react-router-dom";
import {HeaderData} from "./HeaderData";

function Header() {
    const logoData = HeaderData.logo;
    const headerLink = HeaderData.headerLink;
    return (
        <div className={"header"}>
            <nav>
            {logoData.map(((info, index) => {
                return(
                  <Link to={info.url}  key={index}>
                      <img src={info.imageUrl}/>
                  </Link>
                )
            }))}
                <ul>
                {headerLink.map((link, index) => {
                    return (
                      <Link to={link.url}  key={index}>{link.title}</Link>
                      )
                })}
                  <li>Giriş Yap</li>
                  <li>Üye Ol</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
