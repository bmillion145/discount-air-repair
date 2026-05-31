import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Discount Air Repair',
};

export default function ContactPage() {
  return (
    <>
      <header className="header-bar">
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
          Discount Air Repair
        </Link>
        <Link href="/contact" className="contact-btn">Contact Us</Link>
      </header>

      <main className="main-content">

        {/* Phone & Email */}
        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>Phone: (XXX) XXX-XXXX</p>
          <p>Email: info@discountairrepair.com</p>
        </section>

        {/* Submission form */}
        {/*
          TO WIRE UP SUBMISSIONS:
          Replace action="#" below with your Formspree endpoint, e.g.:
            action="https://formspree.io/f/YOUR_FORM_ID"
          Or swap in any other backend/API route here.
        */}
        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form action="#" method="POST">

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="(XXX) XXX-XXXX" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Describe your AC issue or question..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </section>

      </main>
    </>
  );
}
