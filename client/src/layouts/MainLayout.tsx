import Navbar from '../components/Navbar';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-br from-[#4B0056] to-[#A02C74] text-white">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
