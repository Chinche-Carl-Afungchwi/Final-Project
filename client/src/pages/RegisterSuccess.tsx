// src/pages/RegisterSuccess.tsx
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

const RegisterSuccess = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center text-white text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Registration Successful!</h2>
        <p className="mb-6">Your account has been created successfully.</p>
        <Link
          to="/dashboard"
          className="bg-yellow-400 hover:bg-[var(--color-accent)] text-white font-bold py-2 px-6 rounded-lg transition"
        >
          Visit Your Dashboard
        </Link>
      </div>
    </MainLayout>
  );
};

export default RegisterSuccess;
