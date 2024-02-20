import React from "react";

const Header = () => {
  return (
    <div className="header">
        <img
          src="../images/troll.svg"
          alt="" className="header--image"
          style={{ width: "50px", height: "60px" }}
        />
        <h1 className="header--title">Meme Generator</h1>
      <h4 className="header--project">React Course - Project 3</h4>
    </div>
  );
};

export default Header;
