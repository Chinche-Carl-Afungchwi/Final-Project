// src/components/MessageCard.tsx
import { FC, useRef } from 'react';
import html2canvas from 'html2canvas';

interface MessageCardProps {
  message: string;
  timestamp: string;
  onDelete?: () => void;
}

const MessageCard: FC<MessageCardProps> = ({ message, timestamp, onDelete }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current);
    const dataUrl = canvas.toDataURL('image/jpeg');

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `message_${timestamp.replace(/\W+/g, '_')}.jpg`;
    link.click();
  };

  return (
    <div className="relative">
      <div
        ref={cardRef}
        style={{
          backgroundColor: '#ffffff',
          color: '#000000',
          borderRadius: '0.5rem',
          padding: '1rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '160px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#A02C74',
            opacity: 0.35,
            transform: 'rotate(-5deg)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          @UnderBelle
        </div>

        <p
          style={{
            fontSize: '14px',
            marginBottom: '1rem',
            whiteSpace: 'pre-line',
            zIndex: 1,
          }}
        >
          {message}
        </p>
        <div
          style={{
            fontSize: '12px',
            color: '#6b7280',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1,
          }}
        >
          <span>{timestamp}</span>
        </div>
      </div>

      {/* Export button */}
      <button
        onClick={handleExport}
        title="Export to JPG"
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: onDelete ? '2.5rem' : '0.5rem',
          backgroundColor: '#ffffff',
          borderRadius: '9999px',
          padding: '2px 8px',
          fontSize: '18px',
          cursor: 'pointer',
          color: '#85286F',
          zIndex: 10,
        }}
      >
        📸
      </button>

      {/* Delete button */}
      {onDelete && (
        <button
          onClick={onDelete}
          title="Delete message"
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            backgroundColor: '#ffffff',
            borderRadius: '9999px',
            padding: '2px 8px',
            fontSize: '18px',
            cursor: 'pointer',
            color: '#dc2626',
            zIndex: 10,
          }}
        >
          🗑️
        </button>
      )}
    </div>
  );
};

export default MessageCard;
