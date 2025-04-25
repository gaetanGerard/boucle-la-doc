import "@/sass/styles.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
