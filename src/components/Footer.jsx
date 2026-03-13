import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <div className="footer-brand">
            <img
              src="/images/logo-iiv.png"
              alt="Infinite Imperial Ventures logo"
              className="footer-logo"
            />
            <span>Infinite Imperial Ventures</span>
          </div>
          <p className="footer-text">
            Verified Dubai property opportunities for international investors. RERA-aligned
            process, escrow protection, and transparent guidance.
          </p>
          <p className="footer-text footer-meta">RERA No. 46838</p>
        </div>
        <div className="footer-col">
          <div className="footer-title">Investor Support</div>
          <ul className="footer-links">
            <li>Free consultation</li>
            <li>Payment plan review</li>
            <li>Developer verification</li>
            <li>Dubai Land Department registration support</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-title">Disclaimer</div>
          <p className="footer-text">
            This page is for informational purposes only and does not constitute financial
            advice. Investment values and yields are indicative and may vary.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Infinite Imperial Ventures</span>
          <span>Privacy protected</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

