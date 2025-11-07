import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import { Login } from './pages/auth/Login.jsx';
import { Signup } from './pages/auth/Signup.jsx';

function App() {
  return (
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
