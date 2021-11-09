import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made by <span style={{
        color:"#d10c3e",fontFamily: "'Bebas Neue', cursive" }}
        >Ranjan</span></p>
        <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
