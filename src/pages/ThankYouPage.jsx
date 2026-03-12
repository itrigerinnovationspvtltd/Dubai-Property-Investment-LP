import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "917011202967";

function ThankYouPage() {
  const openWhatsAppChat = () => {
    const message = encodeURIComponent(
      "Hi, I submitted an enquiry and would like to speak with an advisor."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="page thank-you-page">
      <Header
        onWhatsApp={openWhatsAppChat}
        onPrimaryCta={() => {
          window.location.href = "/";
        }}
      />
      <section className="section thank-you-section">
        <div className="container">
          <div className="card thank-you-card">
            <h1>Thank You for Your Enquiry</h1>
            <p>
              Our Dubai property specialist will contact you shortly on WhatsApp or email
              with curated investment options.
            </p>
            <p className="supporting-text">
              You can keep this page as a confirmation for your records. Google Tag Manager
              can use this URL for conversion tracking.
            </p>
            <div className="cta-buttons">
              <button className="btn secondary" onClick={openWhatsAppChat} type="button">
                WhatsApp
              </button>
              <Link to="/" className="btn primary">
                Back to Landing Page
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ThankYouPage;

