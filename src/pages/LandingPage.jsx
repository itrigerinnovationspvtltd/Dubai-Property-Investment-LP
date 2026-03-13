import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "917011202967";
const IMAGE_HERO = "/images/hero-skyline.png";
const IMAGE_FEATURE_1 = "/images/project-skyvue-spectra.jpg";
const IMAGE_FEATURE_2 = "/images/project-avarra-palace.png";
const IMAGE_FEATURE_3 = "/images/project-lagoon.jpg";
const IMAGE_ABOUT = "/images/project-c07.jpg";
const IMAGE_GALLERY_1 = "/images/premium-communities.png";
const IMAGE_GALLERY_2 = "/images/skyline.png";
const IMAGE_GALLERY_3 = "/images/lifestyle-amenities.png";
const IMAGE_PROTECTION = "/images/img_0012.png";
const IMAGE_FORM = "/images/img_0013.png";

const DEV_LOGOS = [
  { name: "Danube", src: "/images/DANUBE.jpeg" },
  { name: "DAMAC", src: "/images/DAMAC.jpeg" },
  { name: "Binghatti", src: "/images/BINGHATTI.jpeg" },
  { name: "Sobha", src: "/images/SOBHS.jpeg" },
  { name: "Azizi", src: "/images/AZIZI.jpeg" },
  { name: "Object 1", src: "/images/OBJECT1.jpeg" },
  { name: "Emaar", src: "/images/emaar.png" },
  { name: "Nakheel", src: "/images/nakheel.png" },
];

function Icon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "svg-icon",
    "aria-hidden": "true",
  };

  switch (name) {
    case "shield":
      return (
        <svg {...common}>
          <path
            d="M12 2l7 4v6c0 5-3.5 9.3-7 10-3.5-.7-7-5-7-10V6l7-4z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M9.5 12l1.8 1.8 3.6-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "escrow":
      return (
        <svg {...common}>
          <path
            d="M4 10l8-6 8 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 14h6M10 18h4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "usd":
      return (
        <svg {...common}>
          <path
            d="M12 3v18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M16 7.5c0-1.7-1.8-3-4-3s-4 1.3-4 3 1.8 3 4 3 4 1.3 4 3-1.8 3-4 3-4-1.3-4-3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "safe":
      return (
        <svg {...common}>
          <path
            d="M12 21s7-3.8 7-10V6l-7-4-7 4v5c0 6.2 7 10 7 10z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.5a2.5 2.5 0 0 0-2.5 2.5V13a2.5 2.5 0 1 0 5 0v-2A2.5 2.5 0 0 0 12 8.5z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path
            d="M4 19V5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4 19h16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7 15l3-3 3 2 4-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "tax":
      return (
        <svg {...common}>
          <path
            d="M7 7h10v10H7V7z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 9l6 6M15 9l-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "price":
      return (
        <svg {...common}>
          <path
            d="M20 10l-8 8-8-8 8-8 8 8z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 8v4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 15h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "time":
      return (
        <svg {...common}>
          <path
            d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 6v6l4 2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "passport":
      return (
        <svg {...common}>
          <path
            d="M7 3h8a2 2 0 0 1 2 2v16H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M9 8h6M9 12h6M9 16h4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path
            d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
  }
}

function LandingPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    whatsapp: "",
    email: "",
    budget: "",
    timeline: "",
  });
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");
  const [showLeadPopup, setShowLeadPopup] = React.useState(false);

  React.useEffect(() => {
    const key = "leadPopupDismissed";
    const dismissed = sessionStorage.getItem(key) === "1";
    if (dismissed) return;

    let ticking = false;
    let fired = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        const doc = document.documentElement;
        const scrollTop = doc.scrollTop || document.body.scrollTop || 0;
        const maxScroll = Math.max(1, doc.scrollHeight - doc.clientHeight);
        const progress = scrollTop / maxScroll; // 0 - 1
        if (!fired && progress >= 0.52) {
          fired = true;
          sessionStorage.setItem(key, "1");
          setShowLeadPopup(true);
          window.removeEventListener("scroll", onScroll);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (source) => async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const waWindow = window.open("", "_blank");

    try {
      const response = await fetch("/send.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit. Please try again.");
      }

      const json = await response.json().catch(() => null);
      if (json?.whatsapp_url && waWindow && !waWindow.closed) {
        waWindow.location.href = json.whatsapp_url;
      } else if (waWindow && !waWindow.closed) {
        waWindow.close();
      }

      navigate("/thank-you");
      setShowLeadPopup(false);
      sessionStorage.setItem("leadPopupDismissed", "1");
    } catch (err) {
      if (waWindow && !waWindow.closed) waWindow.close();
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const openWhatsAppChat = () => {
    const message = encodeURIComponent(
      "Hi, I’m interested in Dubai property investment opportunities."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="page">
      <Header
        onWhatsApp={openWhatsAppChat}
        onPrimaryCta={() => {
          const el = document.getElementById("main-form");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />
      {/* Floating WhatsApp Button */}
      <button className="floating-whatsapp" onClick={openWhatsAppChat}>
        Chat with a Dubai Property Advisor
      </button>

      {/* HERO SECTION */}
      <section className="section hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${IMAGE_HERO})` }} />
        <div className="container hero-grid">
          <div className="hero-left">
            <h1>Dubai Real Estate. Stable, Tax-Free, and Built for Global Investors.</h1>
            <p className="hero-subtitle">
              Tax-free rental income potential, high demand areas, and a globally regulated market.
            </p>
       
            <button className="btn primary" onClick={() => {
              const el = document.getElementById("main-form");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}>
              Get Investment Options →
            </button>
            <p className="supporting-text">
              Free consultation with a Dubai property specialist.
            </p>
          </div>

            <div className="hero-right">
            <div className="card form-card">
              <h2>Get Curated Dubai Property Options</h2>
              <form onSubmit={handleSubmit("Landing Page - Hero Form")}>
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="whatsapp">WhatsApp Number</label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="With country code, e.g. +91..."
                  />
                </div>
                <div className="field">
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="₹2–3 Cr">₹2–3 Cr</option>
                    <option value="₹3–4 Cr">₹3–4 Cr</option>
                    <option value="₹4–6 Cr">₹4–6 Cr</option>
                    <option value="₹6 Cr+">₹6 Cr+</option>
                  </select>
                </div>
                {error && <p className="error-text">{error}</p>}
                <button className="btn primary full-width" type="submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Get Investment Options"}
                </button>
                <p className="small-note">Your information is private and secure.</p>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* MARKET SNAPSHOT */}
      <section className="section subtle-bg">
        <div className="container">
          <div className="stats-strip">
            {[
              { label: "Deals in 2025", value: "270,000+", icon: "chart" },
              { label: "Market Value (approx.)", value: "₹ 20T+", icon: "price" },
              { label: "Rental Yield", value: "6–10%", icon: "chart" },
              { label: "Nationalities Investing", value: "200+", icon: "passport" },
              { label: "Property Tax", value: "0%", icon: "tax" },
            ].map((item) => (
              <div key={item.label} className="stat-card">
                <div className="stat-row">
                  <div className="stat-icon">
                    <Icon name={item.icon} />
                  </div>
                  <div className="stat-text">
                    <p className="stat-value">{item.value}</p>
                    <p className="stat-label">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STABILITY & INVESTOR CONFIDENCE */}
      <section className="section">
        <div className="container two-col">
          <div>
            <h2>A Market Built on Stability</h2>
            <p>
              While global markets experience uncertainty, Dubai continues to operate
              normally with strong governance, transparent regulation, and consistent
              real estate activity.
            </p>
            <p>
              Property transactions are regulated by the Dubai Land Department and the
              Real Estate Regulatory Authority (RERA), ensuring secure ownership and
              investor protection.
            </p>
          </div>
          <div className="icon-list">
            {[
              { icon: "shield", text: "Government-regulated property transactions" },
              { icon: "escrow", text: "Escrow protection for off-plan developments" },
              { icon: "usd", text: "Stable currency pegged to the US Dollar" },
              { icon: "safe", text: "One of the safest cities globally" },
            ].map((item) => (
              <div key={item.text} className="icon-list-item">
                <span className="icon-bubble">
                  <Icon name={item.icon} />
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INDIAN INVESTORS CHOOSE DUBAI */}
      <section className="section subtle-bg">
        <div className="container">
          <h2>Why Indian Investors Choose Dubai</h2>
          <div className="grid cards-3">
            {[
              { icon: "time", text: "Only 3–4 hours from major Indian cities" },
              { icon: "passport", text: "One of the largest Indian communities globally" },
              { icon: "shield", text: "Simple international property ownership process" },
              { icon: "price", text: "Flexible developer payment plans" },
              { icon: "chart", text: "Strong rental demand across key areas" },
              { icon: "passport", text: "Golden Visa eligibility for investments above ₹4.5 Cr+ (approx.)" },
              { icon: "usd", text: "AED pegged to USD - protecting returns from INR depreciation" },
            ].map((item) => (
              <div key={item.text} className="card feature-card">
                <div className="feature-icon">
                  <Icon name={item.icon} />
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <p className="highlight-line">
            Dubai offers Indian investors a stable international asset with tax-free income
            potential.
          </p>
        </div>
      </section>

      {/* INVESTMENT OPPORTUNITY / RETURNS */}
      <section className="section">
        <div className="container">
          <h2>Strong Rental Demand and Long-Term Growth</h2>
          <p>
            Dubai’s expanding economy and growing population continue to support strong
            housing demand.
          </p>
          <div className="grid cards-3">
            <div className="card metric-card">
              <h3>Rental Yield</h3>
              <p className="metric-value">6–10%</p>
            </div>
            <div className="card metric-card">
              <h3>Property Tax</h3>
              <p className="metric-value">0%</p>
            </div>
            <div className="card metric-card">
              <h3>Starting Price</h3>
              <p className="metric-value">₹ 1.9 Cr+</p>
            </div>
          </div>
          <div className="image-collage">
            <div className="image-tile">
              <img
                src={IMAGE_GALLERY_1}
                alt="Premium communities"
                loading="lazy"
                decoding="async"
              />
              <div className="image-tile-caption">Premium communities</div>
            </div>
            <div className="image-tile">
              <img
                src={IMAGE_GALLERY_2}
                alt="Dubai skyline"
                loading="lazy"
                decoding="async"
              />
              <div className="image-tile-caption">Dubai skyline</div>
            </div>
            <div className="image-tile">
              <img
                src={IMAGE_GALLERY_3}
                alt="Lifestyle amenities"
                loading="lazy"
                decoding="async"
              />
              <div className="image-tile-caption">Lifestyle amenities</div>
            </div>
          </div>
          <p className="supporting-text">
            Areas like JVC, Dubai Marina, and Business Bay consistently deliver 7–9% annual
            rental returns, with zero property tax on residential rental income and flexible
            developer payment plans.
          </p>
        </div>
      </section>

      {/* TRUSTED DEVELOPERS */}
      <section className="section subtle-bg">
        <div className="container">
          <h2>Projects From Leading Dubai Developers</h2>
          <div className="logo-carousel" aria-label="Developer logos">
            <div className="logo-track">
              {[...DEV_LOGOS, ...DEV_LOGOS].map((logo, idx) => (
                <div className="logo-item" key={`${logo.name}-${idx}`}>
                  <img src={logo.src} alt={`${logo.name} logo`} loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
          <p className="supporting-text">
            All projects are registered with Dubai Land Department and protected through
            escrow regulations.
          </p>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="section">
        <div className="container two-col media-two-col">
          <div>
            <h2>About Us</h2>
            <p>
            Infinite Imperial Ventures is a Dubai-based real estate brokerage helping international investors access verified property opportunities across the city’s leading developments.
            </p>
            <p>
            Our team brings over 10 years of combined experience in the Dubai real estate market, working closely with RERA-registered developers and Dubai Land Department–regulated transactions to ensure a transparent and secure investment process.
<br></br>
We guide investors through the entire journey — from property selection and payment planning to final registration — making international property investment in Dubai simple and structured.
            </p>
          </div>
          <div className="media-card about-media">
            <img src={IMAGE_ABOUT} alt="Dubai project view" loading="lazy" decoding="async" />
            <div className="media-overlay">
              <div className="media-title">Dubai-based guidance</div>
              <div className="media-sub">Transparent process • Verified projects</div>
            </div>
          </div>
          <div>
            <p>
            Our focus is on clear advice, trusted developer partnerships, and long-term relationships with our clients.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section subtle-bg">
        <div className="container">
          <h2>Your Investment Journey in Four Steps</h2>
          <div className="grid cards-4">
            {[
              { step: "1", title: "Share preferences", text: "Share your investment preferences and budget." },
              { step: "2", title: "Receive options", text: "Receive curated property options aligned with your goals." },
              { step: "3", title: "Review details", text: "Review payment plans, developer reputation, and location advantages." },
              { step: "4", title: "Secure property", text: "Secure your property through Dubai Land Department registration." },
            ].map((item) => (
              <div key={item.step} className="card step-card">
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MONEY PROTECTION */}
      <section className="section">
        <div className="container two-col media-two-col">
          <div>
            <h2>Your Investment Is Protected by UAE Law</h2>
            <p>
              Off-plan payments are held in <strong>RERA regulated escrow accounts</strong>.
            </p>
            <div className="protection-points">
              <div className="protection-point">
                <span className="dot" aria-hidden="true" />
                Funds are released only after verified construction milestones.
              </div>
              <div className="protection-point">
                <span className="dot" aria-hidden="true" />
                Transparent registration through Dubai Land Department.
              </div>
              <div className="protection-point">
                <span className="dot" aria-hidden="true" />
                Clear developer checks and documentation support.
              </div>
            </div>
          </div>
          <div className="media-card protection-card">
            <img
              src={IMAGE_PROTECTION}
              alt="Dubai development"
              loading="lazy"
              decoding="async"
            />
            <div className="media-overlay">
              <div className="media-title">Escrow-protected payments</div>
              <div className="media-sub">Milestone-based releases • Investor safeguards</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN LEAD FORM (moved higher for 70% scroll visibility) */}
      <section className="section" id="main-form">
        <div className="container">
          <div className="two-col form-section media-two-col">
            <div>
              <h2>Receive Curated Dubai Investment Opportunities</h2>
              <p>
                Submit your details to receive verified property options aligned with your
                investment goals.
              </p>
              <div className="media-card mini-media">
                <img
                  src={IMAGE_FORM}
                  alt="Verified Dubai developments"
                  loading="lazy"
                  decoding="async"
                />
                <div className="media-overlay">
                  <div className="media-title">Curated options for your budget</div>
                  <div className="media-sub">Payment plans • Rental yield focus</div>
                </div>
              </div>
            </div>
            <div className="card form-card">
              <form onSubmit={handleSubmit("Landing Page - Main Form")}>
                <div className="field">
                  <label htmlFor="name-main">Full Name</label>
                  <input
                    id="name-main"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="whatsapp-main">WhatsApp Number</label>
                  <input
                    id="whatsapp-main"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="With country code, e.g. +91..."
                  />
                </div>
                <div className="field">
                  <label htmlFor="email-main">Email Address</label>
                  <input
                    id="email-main"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="field">
                  <label htmlFor="budget-main">Budget Range</label>
                  <select
                    id="budget-main"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="₹2–3 Cr">₹2–3 Cr</option>
                    <option value="₹3–4 Cr">₹3–4 Cr</option>
                    <option value="₹4–6 Cr">₹4–6 Cr</option>
                    <option value="₹6 Cr+">₹6 Cr+</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="timeline">Investment Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Select timeline</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="3–6 months">3–6 months</option>
                    <option value="6–12 months">6–12 months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>
                {error && <p className="error-text">{error}</p>}
                <button className="btn primary full-width" type="submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Send Me Investment Options →"}
                </button>
                <p className="small-note">Your information is private and secure.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="section reviews-section">
        <div className="container">
          <div className="reviews-header">
            <div className="reviews-brand">
              <span className="google-g" aria-hidden="true">
                <svg
                  viewBox="0 0 48 48"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 5.96 1.54 7.33 2.84l5.37-5.26C33.64 3.48 29.36 1.5 24 1.5 14.82 1.5 7.06 6.98 3.69 14.65l6.92 5.38C12.3 14.84 17.62 9.5 24 9.5z"
                  />
                  <path
                    fill="#34A853"
                    d="M46.5 24.5c0-1.7-.15-2.94-.47-4.23H24v8.06h12.9c-.26 2.02-1.67 5.06-4.8 7.1l7.39 5.73C43.57 37.93 46.5 31.94 46.5 24.5z"
                  />
                  <path
                    fill="#4A90E2"
                    d="M10.61 28.02A14.5 14.5 0 0 1 9.5 24c0-1.4.24-2.76.66-4.02l-6.92-5.33C1.78 17.31 1 20.57 1 24c0 3.36.78 6.61 2.22 9.48l7.39-5.46z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M24 46.5c5.85 0 10.77-1.93 14.36-5.25l-7.39-5.73C29.14 36.83 26.88 37.5 24 37.5c-6.38 0-11.7-4.34-13.61-9.48l-7.39 5.46C7.06 41.02 14.82 46.5 24 46.5z"
                  />
                </svg>
              </span>
              <div>
                <div className="reviews-title">Google Reviews</div>
                <div className="reviews-sub">
                  <span className="stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </span>{" "}
                  <span className="reviews-count">12+ reviews</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reviews-grid">
            {[
              {
                name: "khushi saraf saraf",
                initial: "K",
                quote:
                  "I had a wonderful experience working with Chanderkant Pasari from Infinite Imperial Ventures. He was professional, patient, and truly understood what I was looking for. Found my dream home in no time. Highly recommend!",
              },
              {
                name: "Hajra Mahmood",
                initial: "H",
                quote:
                  "I recently purchased a property from Dalvinder kour and my experience was excellent. The team was professional, knowledgeable, and supportive throughout the process. They made the entire journey smooth and stress-free. The property I purchased exceeded my expectations in every way, from location to quality. I highly recommend to anyone looking for a reliable and trustworthy real estate service!",
              },
              {
                name: "Sudarshan Reddy",
                initial: "S",
                quote:
                  "I had a very good experience with Infinite imperial ventures. Arjun sharma and Dalvi were very supportive and helpful in identifying the perfect property for the requirement i had. It's been a very good and pleasant experience dealing with them. The whole experience was so smooth and memorable. It's a five star experience guys .",
              },
            ].map((r) => (
              <div key={r.name} className="review-card">
                <div className="review-stars" aria-hidden="true">
                  ★★★★★
                </div>
                <p className="review-quote">“{r.quote}”</p>
                <div className="review-user">
                  <div className="review-avatar" aria-hidden="true">
                    {r.initial}
                  </div>
                  <div className="review-name">{r.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section subtle-bg">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <details className="faq-item">
              <summary>Is it legal for Indian residents to invest in Dubai property?</summary>
              <p>
              Yes. Indian residents can invest in overseas real estate under the RBI’s Liberalised Remittance Scheme (LRS), which allows remittances of up to USD 250,000 per financial year for international investments, including property.

              </p>
            </details>
            <details className="faq-item">
              <summary>How do I transfer money from India to Dubai for the purchase?</summary>
              <p>
              Funds are transferred through your Indian bank using the LRS foreign outward remittance process. Payments are typically made to the developer’s RERA-regulated escrow account, ensuring investor funds are protected and released only as construction milestones are completed.
              </p>
            </details>
            <details className="faq-item">
              <summary>Do I need to travel to Dubai to complete the purchase?</summary>
              <p>
              Not necessarily. In many cases, property selection, documentation, and payments can be handled remotely. Final registration can also be completed through a Power of Attorney, depending on the transaction.
              </p>
            </details>
            <details className="faq-item">
              <summary>What rental returns can I realistically expect?</summary>
              <p>
              Dubai residential properties typically offer 6–10% annual rental yields, depending on location and property type. Areas such as JVC, Dubai Marina, and Business Bay often see strong rental demand.
              </p>
            </details>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final-cta-section">
        <div className="container final-cta">
          <h2>Speak With a Dubai Property Specialist</h2>
          <p>Connect with an advisor who works with international investors in Dubai.</p>
          <p>No obligation. Just honest guidance.</p>
          <div className="cta-buttons">
            <button className="btn final-cta-whatsapp" onClick={openWhatsAppChat}>
              WhatsApp Us
            </button>
            <button
              className="btn final-cta-callback"
              onClick={() => {
                const el = document.getElementById("main-form");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request a Callback
            </button>
          </div>
        </div>
      </section>

      {showLeadPopup && (
        <div
          className="lead-popup-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Investment options form"
          onClick={() => {
            setShowLeadPopup(false);
            sessionStorage.setItem("leadPopupDismissed", "1");
          }}
        >
          <div className="lead-popup" onClick={(e) => e.stopPropagation()}>
            <div className="lead-popup-header">
              <div>
                <div className="lead-popup-title">Get Curated Dubai Options</div>
                <div className="lead-popup-sub">Share your details. We’ll send verified options.</div>
              </div>
              <button
                type="button"
                className="lead-popup-close"
                aria-label="Close"
                onClick={() => {
                  setShowLeadPopup(false);
                  sessionStorage.setItem("leadPopupDismissed", "1");
                }}
              >
                ✕
              </button>
            </div>
            <div className="lead-popup-body">
              <form onSubmit={handleSubmit("Landing Page - Scroll Popup")}>
                <div className="field">
                  <label htmlFor="name-popup">Full Name</label>
                  <input
                    id="name-popup"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="whatsapp-popup">WhatsApp Number</label>
                  <input
                    id="whatsapp-popup"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="With country code, e.g. +91..."
                  />
                </div>
                <div className="field">
                  <label htmlFor="budget-popup">Budget Range</label>
                  <select
                    id="budget-popup"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="₹2–3 Cr">₹2–3 Cr</option>
                    <option value="₹3–4 Cr">₹3–4 Cr</option>
                    <option value="₹4–6 Cr">₹4–6 Cr</option>
                    <option value="₹6 Cr+">₹6 Cr+</option>
                  </select>
                </div>
                {error && <p className="error-text">{error}</p>}
                <button className="btn primary full-width" type="submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Send Me Options →"}
                </button>
                <p className="small-note">Your information is private and secure.</p>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default LandingPage;

