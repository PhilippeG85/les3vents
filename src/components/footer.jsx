import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container footer-content">
        <h1>Les Trois Mâts</h1>
        <div className="footer-laptop">
          <div>
            <p>22 Promenade Georges Godet</p>
            <p>85100 Les Sables d&apos;Olonne</p>
          </div>
          <div>
            <p>Tel: 06-50-72-86-32</p>
            <p>Email: elisabeth.gonse@gmail.com</p>
          </div>
        </div>
        <div className="footer-mobile">
          <div style={{ paddingBottom: "6px" }}>
            <p>22 Promenade Georges Godet</p>
            <p>85100 Les Sables d&apos;Olonne</p>
          </div>
          <div>
            <p>Tel: 06-50-72-86-32</p>
            <p>Email: elisabeth.gonse@gmail.com</p>
          </div>
        </div>
      </div>
      <p className="legal-footer">SARL ELJA & fils - RCS La Roche Sur Yon - 879 767 812 00016</p>
    </div>
  );
}

export default Footer;
