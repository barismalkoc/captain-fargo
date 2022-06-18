import React, {useState} from 'react';
import './header.scss'
import {Link} from "react-router-dom";
import {HeaderData} from "./HeaderData";
import LoginModal from "../LoginModal/LoginModal";
import SignInModal from "../SignInModal/SignInModal";

function Header() {

  const [onOpenModalLogin, setOnOpenModalLogin] = useState(false);
  const [onOpenModalSignIn, setOnOpenModalSignIn] = useState(false);


  function openModalLogin() {
    setOnOpenModalLogin(true);
  }

  function closeModalLogin() {
    setOnOpenModalLogin(false);
  }

  function openModalSignIn() {
    setOnOpenModalSignIn(true);
  }

  function closeModalSignIn() {
    setOnOpenModalSignIn(false);
  }


  const logoData = HeaderData.logo;
  const headerLink = HeaderData.headerLink;
  return (
    <div className={"header"}>
      <nav>
        {logoData.map(((info, index) => {
          return (
            <Link to={info.url} key={index}>
              <img src={info.imageUrl}/>
            </Link>
          )
        }))}
        <ul>
          {headerLink.map((link, index) => {
            return (
              <Link to={link.url} key={index}>{link.title}</Link>
            )
          })}
          <li onClick={openModalLogin}>Giriş Yap</li>
          <li onClick={openModalSignIn}>Üye Ol</li>
        </ul>
      </nav>
      <SignInModal show={onOpenModalSignIn} handleClose={() => closeModalSignIn()}></SignInModal>
      <LoginModal show={onOpenModalLogin} handleClose={() => closeModalLogin()}></LoginModal>


    </div>
  );
}

export default Header;
