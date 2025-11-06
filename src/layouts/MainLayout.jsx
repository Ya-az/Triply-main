import PropTypes from 'prop-types';
import { Navbar } from '../components/Navbar.jsx';
import { Footer } from '../components/Footer.jsx';

export function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-triply-sand/30">
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node
};
