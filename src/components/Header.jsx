import React from "react";

function Header({ onPrimaryCta, onWhatsApp }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <img src="/images/logo-iiv.png" alt="Infinite Imperial Ventures logo" />
          </div>
    
        </div>

        <nav className="header-actions" aria-label="Primary">
          <button className="btn secondary header-btn" onClick={onWhatsApp} type="button">
            WhatsApp
          </button>
          <button className="btn primary header-btn" onClick={onPrimaryCta} type="button">
            Get Options
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

