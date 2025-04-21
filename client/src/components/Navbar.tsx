import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gradient-to-r from-[#4B0056] to-[#A02C74] px-6 py-4 text-white shadow-md">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link to="/">
          <img src="/logo.png" alt="Under Belle logo" className="h-10 sm:h-12" />
        </Link>

        {/* Hamburger icon (mobile only) */}
        <button
          className="sm:hidden text-white focus:outline-none text-2xl"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Nav Links (desktop) */}
        <div className="hidden sm:flex space-x-6 text-sm sm:text-base font-medium">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          {token ? (
            <>
              <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
              <button onClick={handleLogout} className="hover:text-yellow-300">Logout</button>
            </>
          ) : (
            <>
              <Link to="/register" className="hover:text-yellow-300">Sign up</Link>
              <Link to="/login" className="hover:text-yellow-300">Login</Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="sm:hidden mt-4 space-y-3 text-sm font-medium">
          <Link to="/" onClick={toggleMenu} className="block hover:text-yellow-300">Home</Link>
          {token ? (
            <>
              <Link to="/dashboard" onClick={toggleMenu} className="block hover:text-yellow-300">Dashboard</Link>
              <button onClick={() => { handleLogout(); toggleMenu(); }} className="block hover:text-yellow-300">Logout</button>
            </>
          ) : (
            <>
              <Link to="/register" onClick={toggleMenu} className="block hover:text-yellow-300">Sign up</Link>
              <Link to="/login" onClick={toggleMenu} className="block hover:text-yellow-300">Login</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
