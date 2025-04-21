// src/pages/LeaveMessage.tsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import axios from 'axios';

const LeaveMessage = () => {
  const { slug } = useParams();
  const [creatorName, setCreatorName] = useState('the creator');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const res = await axios.get(`https://underbelle-backend.onrender.com/api/links/${slug}`);
        setCreatorName(res.data.username || 'the creator');
      } catch (err) {
        console.error(err);
        setCreatorName('Unknown');
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchCreator();
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      setSubmitting(true);
      await axios.post(`https://underbelle-backend.onrender.com/api/messages/${slug}`, {
        content: message,
      });
      setStatus('✅ Message sent successfully!');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to send message.');
    } finally {
      setSubmitting(false);
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center text-white text-center">
        <h3 className="text-2xl sm:text-3xl mb-6 font-semibold">
          Leave an anonymous message for {loading ? '...' : creatorName}
        </h3>

        <form className="w-full max-w-xl space-y-4" onSubmit={handleSubmit}>
          <textarea
            placeholder={`Leave an anonymous message for ${creatorName}...`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="w-full px-4 py-2 rounded text-black bg-white resize-none"
          />

          {status && <p className="text-sm text-yellow-300">{status}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="bg-yellow-400 hover:bg-[var(--color-accent)] text-white font-bold py-2 px-6 rounded-lg transition disabled:opacity-50"
          >
            {submitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default LeaveMessage;
