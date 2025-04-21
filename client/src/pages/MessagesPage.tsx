import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MessageCard from '@/components/MessageCard';
import MainLayout from '@/layouts/MainLayout';
import { useAuth } from '@/context/AuthContext';

interface Message {
  id: string;
  content: string;
  createdAt: string;
  linkId: string;
}

const MessagesPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { token } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/messages/${slug}`);
      setMessages(res.data);
    } catch (err: any) {
      console.error(err);
      setError('Failed to fetch messages.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteMessage = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/messages/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    } catch (err) {
      console.error('Failed to delete message', err);
    }
  };

  const handleExportCSV = () => {
    const csvContent = [
      ['ID', 'Message', 'Created At'],
      ...messages.map((msg) => [
        msg.id,
        `"${msg.content.replace(/"/g, '""')}"`, // escape quotes
        new Date(msg.createdAt).toLocaleString()
      ])
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `messages_${slug}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (slug) fetchMessages();
  }, [slug]);

  return (
    <MainLayout>
      <div className="p-4 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Messages</h2>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && messages.length > 0 && (
          <div className="text-center mb-6">
            <button
              onClick={handleExportCSV}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition"
            >
              Download CSV
            </button>
          </div>
        )}

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {!loading &&
            !error &&
            messages.map((msg) => (
              <MessageCard
                key={msg.id}
                message={msg.content}
                timestamp={new Date(msg.createdAt).toLocaleString()}
                onDelete={token ? () => handleDeleteMessage(msg.id) : undefined}
              />
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MessagesPage;
