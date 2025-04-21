import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import LeaveMessage from './pages/LeaveMessage';
import Dashboard from './pages/Dashboard';
import MessagesPage from './pages/MessagesPage';
import RegisterSuccess from './pages/RegisterSuccess';
import ProtectedRoute from './components/ProtectedRoute';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/leave/:slug" element={<LeaveMessage />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/terms" element={<TermsPage />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/messages/:slug"
        element={
          <ProtectedRoute>
            <MessagesPage />
          </ProtectedRoute>
        }
      />

      {/* Other Routes (future placeholders) */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* <Route path="/settings" element={<Settings />} /> */}
    </Routes>
  );
}

export default App;
