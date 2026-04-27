import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { mockAnnouncements } from '../data/mockData';

const AnnouncementsPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [sendPush, setSendPush] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [audience, setAudience] = useState('All users');

  return (
    <>
      <PageHeader
        title="Announcements"
        subtitle="Post updates for passengers and drivers"
      />

      {/* Create form */}
      <div className="bg-white rounded-xl p-5 border border-ink-200 mb-6">
        <h3 className="text-sm font-bold text-ink-900 mb-4">Create Announcement</h3>

        <input
          type="text"
          placeholder="Title…"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-ink-50 border border-ink-200 rounded-lg px-3 py-2.5 text-sm mb-3 focus:outline-none focus:border-teal"
        />

        <textarea
          placeholder="Body…"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={4}
          className="w-full bg-ink-50 border border-ink-200 rounded-lg px-3 py-2.5 text-sm mb-3 focus:outline-none focus:border-teal resize-none"
        />

        <div className="flex items-center gap-5 mb-4">
          <label className="flex items-center gap-2 text-xs font-semibold text-ink-500 cursor-pointer">
            <input
              type="checkbox"
              checked={sendPush}
              onChange={(e) => setSendPush(e.target.checked)}
              className="accent-teal"
            />
            Send push notification
          </label>
          <label className="flex items-center gap-2 text-xs font-semibold text-ink-500 cursor-pointer">
            <input
              type="checkbox"
              checked={isPinned}
              onChange={(e) => setIsPinned(e.target.checked)}
              className="accent-teal"
            />
            Pin to top
          </label>
          <select
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="ml-auto bg-white border border-ink-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:border-teal"
          >
            <option>All users</option>
            <option>Passengers only</option>
            <option>Drivers only</option>
          </select>
        </div>

        <Button
          variant="primary"
          onClick={() => {
            if (!title.trim()) { alert('Please enter a title.'); return; }
            alert('Announcement published (prototype)');
            setTitle('');
            setBody('');
          }}
        >
          Publish Announcement
        </Button>
      </div>

      {/* Published list */}
      <h3 className="text-sm font-bold text-ink-900 mb-3">Published</h3>
      <div className="space-y-2">
        {mockAnnouncements.map((a) => (
          <div key={a.id} className="bg-white rounded-lg px-4 py-3 border border-ink-200 flex gap-3">
            <div className="text-lg flex-shrink-0">{a.isPinned ? '📌' : '📄'}</div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-ink-900 mb-0.5 flex items-center gap-2">
                {a.title}
                {a.pushSent && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 bg-teal-surface text-teal rounded">
                    Push sent
                  </span>
                )}
              </div>
              <p className="text-[11px] text-ink-500 line-clamp-2 mb-2">{a.body}</p>
              <div className="flex items-center gap-4">
                <span className="text-[10px] text-ink-400 font-mono">
                  {a.date} · {a.audience}
                </span>
                <button className="text-[10px] text-ink-500 font-semibold hover:text-ink-900">Edit</button>
                <button className="text-[10px] text-ink-500 font-semibold hover:text-ink-900">
                  {a.isPinned ? 'Unpin' : 'Pin'}
                </button>
                <button className="text-[10px] text-sos font-semibold hover:text-red-700">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnnouncementsPage;
