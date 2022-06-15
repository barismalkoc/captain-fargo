import React from 'react';
import './header.scss'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className={"header"}>
            <nav>
                <Link to={"/"}>
                    <img src="https://captainfargo.com/static/main/logo_cf.883785491523.png"/>
                </Link>

                <ul>
                    <Link to={"/blueVoyage"}>Mavi Yolculuk</Link>
                    <Link to={"/about"}>Hakkımızda</Link>
                    <Link to={"/faq"}>SSS</Link>
                    <Link to={"/blog"}>Blog</Link>
                    <li>Giriş Yap</li>
                    <li>Üye Ol</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
