import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Page Title Strip */}
      <div className="page-title-strip">
        <h1>Residential AC Repair — Dallas Fort Worth</h1>
      </div>

      {/* Two-Column Body */}
      <div className="page-body">

        {/* Main Content */}
        <main className="main-col">
          <p>
            We're not one of those big corporate AC companies that charge crazy
            prices. We know times are tough, and we charge what is fair for the
            work that we do. We buy the same parts, do the same repairs,
            maintenance, and installations — but for a lot less. If we can fix it,
            we do, so you don't have to buy an expensive new unit. If you do need
            a new unit we will discuss the options with you. No pressure.
          </p>

          <p>
            We don't have a ridiculous advertising budget and corporate overhead to
            cover, so our prices are surprisingly great. If you want low cost, no
            gimmick service on your AC/Heating system and want to save money, then
            give us a call.
          </p>

          <p>
            If you want to pay hundreds to thousands more for the same service and
            equipment — then call them.
          </p>
        </main>

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h3>Contact Us</h3>
            <p>☎ (214) 233-5259</p>
            <p>✉ info@discountairrepair.com</p>
            <Link href="/contact" className="sidebar-btn">Send Us a Message</Link>
          </div>
        </aside>

      </div>
    </>
  );
}
