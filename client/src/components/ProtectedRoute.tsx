import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import type { JSX } from 'react';

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;