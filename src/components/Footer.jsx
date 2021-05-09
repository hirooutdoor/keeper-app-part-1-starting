import React from "react";

function Footer() {
  
  const currentYear = new Date().getFullYear().toString();
  
  return(
    <footer>
      <p>Copyrights©︎{currentYear}.</p>
    </footer>
  );
}

export default Footer;