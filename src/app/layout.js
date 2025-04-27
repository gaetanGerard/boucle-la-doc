import '@/sass/styles.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body_layout">
        <div className="layout">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
