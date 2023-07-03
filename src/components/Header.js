import React from 'react';

import Logo from "../assets/logo.svg";

import { sendEmail } from '../functions';

const Header = () => {
  return (
  <header className="py-8">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        <button onClick={sendEmail} className="btn btn-sm">Work with me</button>
      </div>
    </div>
  </header>);
};

export default Header;
