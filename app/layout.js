import './globals.css';

export const metadata = {
  title: 'Discount Air Repair',
  description: 'Air conditioning repair in the Dallas area.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
