import React from "react";
import "./style.css";

function Header({black}) {
  return (
    <header className={black ? 'black' : '  '}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo"
          ></img>
        </a>
        </div>
        <div className="header--user">
          <a href="https://github.com/ceconcarlsen" target="_blank" rel="noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user"></img>
          </a>
        </div>
    </header>
  );
}

export default Header;
