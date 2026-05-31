import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Discount Air Repair',
  description: 'Residential air conditioning repair in the Dallas-Fort Worth area.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* Top Utility Bar */}
        <div className="utility-bar">
          <div className="utility-bar-inner">
            <span>
              ☎ (XXX) XXX-XXXX
              <span className="utility-sep">|</span>
              ✉ info@discountairrepair.com
            </span>
            <span>Serving the Dallas–Fort Worth Area</span>
            <span>Residential AC Repair Specialists</span>
          </div>
        </div>

        {/* Site Header */}
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="site-logo">
              <div className="site-logo-name">Discount Air Repair</div>
              <div className="site-logo-sub">Heating &amp; Air Conditioning</div>
            </Link>
            <a href="tel:XXXXXXXXXX" className="call-btn">Call (XXX) XXX-XXXX</a>
          </div>
        </header>

        {/* Nav Bar */}
        <nav className="site-nav">
          <div className="site-nav-inner">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}
