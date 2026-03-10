import React from "react";

function Header({ onPrimaryCta, onWhatsApp }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true" />
          <div className="brand-text">
            <div className="brand-name">Infinite Imperial Ventures</div>
            <div className="brand-sub">Dubai Real Estate Brokerage</div>
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

