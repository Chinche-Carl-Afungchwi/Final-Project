// src/pages/Dashboard.tsx
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { useAuth } from '@/context/AuthContext';

interface Link {
  id: string;
  slug: string;
  createdAt: string;
  messages: { id: string }[];
}

const Dashboard = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const [myLink, setMyLink] = useState('');
  const [messageLinks, setMessageLinks] = useState<Link[]>([]);
  const { token, logout } = useAuth();

  const handleCreateLink = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/links', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const newLink: Link = { ...res.data, messages: [] };
      const fullLink = `http://localhost:5173/leave/${newLink.slug}`;
      setMyLink(fullLink);
      setMessageLinks(prev => [newLink, ...prev]);
    } catch (err) {
      console.error('Error creating link:', err);
    }
  };

  const handleCopy = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('Failed to copy');
    }
  };

  const handleDelete = async (linkId: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/links/${linkId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessageLinks(prev => prev.filter(link => link.id !== linkId));
    } catch (err) {
      console.error('Failed to delete link:', err);
    }
  };

  const fetchLinks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/links/my', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const linksWithMessages = res.data.map((link: Link) => ({
        ...link,
        messages: link.messages || []
      }));
      setMessageLinks(linksWithMessages);
    } catch (err) {
      console.error('Failed to fetch links:', err);
    }
  };

  useEffect(() => {
    if (token) fetchLinks();
  }, [token]);

  return (
    <MainLayout>
      <div className="text-white text-center space-y-6">
        <h2 className="text-3xl font-bold">Welcome back!</h2>

        <button
          onClick={handleCreateLink}
          className="bg-yellow-500 hover:bg-[var(--color-accent)] text-white py-2 px-6 rounded-lg"
        >
          Create New Link
        </button>

        <div className="mt-4">
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Logout
          </button>
        </div>

        {myLink && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-4">
            <span className="text-sm break-all">{myLink}</span>
            <button
              onClick={() => handleCopy(myLink)}
              className="bg-yellow-400 hover:bg-[var(--color-accent)] text-white font-semibold py-2 px-4 rounded-lg"
            >
              Copy Link
            </button>
            {copySuccess && <span className="text-green-400">{copySuccess}</span>}
          </div>
        )}

        <h3 className="text-xl font-semibold mt-10">Your Links</h3>
        <div className="space-y-3 max-w-xl mx-auto">
          {messageLinks.map((link) => {
            const fullLink = `http://localhost:5173/leave/${link.slug}`;
            return (
              <div key={link.id} className="border p-3 rounded flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="text-sm break-all">
                  <a
                    href={`/messages/${link.slug}`}
                    className="underline hover:text-yellow-300"
                  >
                    {fullLink}
                  </a>
                  <span className="ml-2 text-xs text-gray-300">({link.messages.length} messages)</span>
                </div>
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={() => handleCopy(fullLink)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => handleDelete(link.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
