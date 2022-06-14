import React from 'react';
import './header.scss'

function Header() {
    return (
        <div className={"header"}>
            <nav>
                <img src="https://captainfargo.com/static/main/logo_cf.883785491523.png"/>
                <ul>
                    <li>Mavi Yolculuk</li>
                    <li>Hakkımızda</li>
                    <li>SSS</li>
                    <li>Blog</li>
                    <li>Giriş Yap</li>
                    <li>Üye Ol</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
