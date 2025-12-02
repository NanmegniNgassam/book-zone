import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "BookZone | Your ultimate Booking experience",
  description: "Modern booking blog with latest gaming news, reviews, and insights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="main-content">
          <div className="container">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
