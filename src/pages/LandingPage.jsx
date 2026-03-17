import "./LandingPage.css";
import Navbar from "../components/Navbar";
import housePhoto from "../images/home1.jpg";
import owner1 from "../images/owner1.jpg";
import owner2 from "../images/owner2.png";
import Footer from "../components/Footer";


function LandingPage() {
    return (
        <div className="landing-wrapper">
         <Navbar />
         {/* HERO SECTION ! */}
        <section id="hero" className="hero">
            <div className="hero-inner">
                <div className="hero-text">
                    <h1>We Buy Houses In<span className="highlight-it"> Oklahoma</span></h1>
                    <p>Family-owned cash home buyers offering fair, fast & simple home sales across Oklahoma!</p>
                    <div className="hero-divider"></div>
                    <p className="hero-tagline">New, Local & Family-Owned in Oklahoma</p>
                   <div className="hero-features">
                    <span>✓ No repairs or cleaning needed</span>
                     <span>✓ No agent commissions or fees</span>
                      <span>✓ Flexible closing timeline</span>
                   </div>
                </div>

                <div className="hero-image-wrapper">
                   <div className="hero-house"></div>
                </div>
            </div>
        </section>

        {/* ABOUT SECTION ! */}
        <section id="about" className="about section-divider">

           <h2 className="about-heading">Meet the <span className="highlight-it">Pomleon Partners</span></h2>

            <div className="about-inner">

                <div className="about-photos">

                    <div className="about-person">
                    <div className="about-photo-circle">
                        <img 
                           src={owner1}
                           alt="Owner 1 Pomleon Partners"
                           />
                     </div>
                    <p className="about-name">[ Stacey Pacas ]</p>
                    <p className="about-role">Co-Owner</p>
                    </div>
                    
                    <div className="about-person">
                    <div className="about-photo-circle">
                        <img 
                           src={owner2}
                           alt="Owner 2 Pomleon Partners"
                           />
                    </div>
                    <p className="about-name">[ Tony Pacas ]</p>
                    <p className="about-role">Co-Owner</p>
                </div>
                </div>

            <div className="about-text">
            <p>
                <span className="about-lead">A family-run team you can trust</span> We help Oklahoma homeowners sell quickly
                without the hassles of agents, repairs or long waits. 
            </p>
            <p>
                We don't flip homes for quick gains, we invest in homes the right way. Our approach is 
                conservative, transparent & built on the responsible renovations that add 
                long-term value to the community. 
            </p>
          </div>
          </div>
        </section>

       {/* HOW SECTION ! */}
       <section id="how" className="how section-divider">
        <div className="how-inner">
            <p className="how-kicker">3-Step Process</p>
            <h2 className="how-heading">How It Works</h2>
            <p className="how-intro">
                Selling your home should be simple. Here's how our 3-step process works from the first call to closing.
            </p>

        {/* CIRCLES W ARROWS */}
         <div className="how-timeline">
      <div className="how-timeline-item">
        <div className="how-timeline-circle">1</div>
      </div>
      <div className="how-timeline-line"></div>
      <div className="how-timeline-item">
        <div className="how-timeline-circle">2</div>
      </div>
      <div className="how-timeline-line"></div>
      <div className="how-timeline-item">
        <div className="how-timeline-circle">3</div>
      </div>
    </div>
 
    {/* STEP CARDS */}
    <div className="how-cards">
   
     {/* STEP #1 */}
     <div className="how-card">
        <span className="how-step-label">Step 1</span>
        <span className="how-emoji">📞</span>
        <h3 className="how-card-title">Tell Us About Your Home</h3>
        <p className="how-card-text">
            Call or email with some basic details about your property.
            No pressure, no-obligation, just a conversation to see if we're a good fit.
        </p>
     </div>

     {/* STEP #2 */}
     <div className="how-card">
        <span className="how-step-label">Step 2</span>
        <span className="how-emoji">🤝</span>
        <h3 className="how-card-title">Get Your Fair Cash Offer</h3>
        <p className="how-card-text">
            We review your home, look at the numbers and present a fair cash offer.
            No repairs, showings or cleaning needed. We'll buy it as is.
        </p>
     </div>

     {/* STEP #3 */}
     <div className="how-card">
       <span className="how-step-label">Step 3</span>
       <span className="how-emoji">🏡</span>
       <h3 className="how-card-title">You Choose the Closing Date</h3>
       <p className="how-card-text">
        If you like the offer, you pick the date that works best for you. 
        We handle the details so you can move on stress-free.
       </p>
     </div>
    </div>
        </div>
       </section>

       {/* CONTACT SECTION ! */}
       <section id="contact" className="contact section-divider">
         <div className="contact-inner">

            <h2 className="contact-heading">
                Contact <span className="highlight-it">Pomleon Partners</span>
            </h2>

            <p className="contact-subtext">
                Have questions or want to learn more? Get in touch with us anytime.
            </p>

            <div className="contact-grid">

                <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <h4>Phone</h4>
                    <p>
                       <a href="tel:7027936624">(702) 793-6624</a><br />
                       <a href="tel:7022690177">(702) 269-0177</a>
                    </p>
                    <p className="contact-note">Call or text either number.</p>
                </div>

            <div className="contact-item">
                <div className="contact-icon">📧</div>
                <h4>Email</h4>
                <p>
                    <a href="mailto:stacey@pomleonpartners.com">stacey@pomleon.com</a><br />
                </p>
                <p className="contact-note">We reply within 1-2 business days.</p>
            </div>

            </div>
         </div>
       </section>
       <Footer />
        </div>
    );
}

export default LandingPage;