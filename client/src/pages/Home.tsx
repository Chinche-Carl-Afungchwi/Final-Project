import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-64px)]">
        
        <img src="/logo.png" alt="Under Belle Logo" className="w-64 sm:w-80 mb-6" />

        
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
          Get anonymous messages<br />from friends and followers
        </h2>

    
        <Link
          to="/register"
          className="bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-lg transition mb-4"
        >
          Get Started
        </Link>

        {/* Subtext */}
        <p className="text-white text-sm">
          Sign up to receive your own anonymous messages link.
        </p>

        {/* Login link */}
        <Link to="/login" className="text-yellow-300 font-medium mt-2 hover:text-white">
          Log in
        </Link>
      </div>
    </MainLayout>
  );
};

export default Home;
