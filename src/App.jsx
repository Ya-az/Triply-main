import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { MainLayout } from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import BookingDetailsPage from './pages/BookingDetailsPage.jsx';
import BookingConfirmationPage from './pages/BookingConfirmationPage.jsx';
import PaymentPage from './pages/PaymentPage.jsx';
import PaymentSuccessPage from './pages/PaymentSuccessPage.jsx';
import { Login } from './pages/auth/Login.jsx';
import { Signup } from './pages/auth/Signup.jsx';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/booking-details"
            element={
              <MainLayout>
                <BookingDetailsPage />
              </MainLayout>
            }
          />
          <Route
            path="/booking-confirmation"
            element={
              <MainLayout>
                <BookingConfirmationPage />
              </MainLayout>
            }
          />
          <Route
            path="/payment"
            element={
              <MainLayout>
                <PaymentPage />
              </MainLayout>
            }
          />
          <Route
            path="/payment-success"
            element={
              <MainLayout>
                <PaymentSuccessPage />
              </MainLayout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
