import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import StatusPill from '../components/StatusPill';
import { mockComplaints, type ComplaintStatus } from '../data/mockData';

const statusLabel: Record<ComplaintStatus, string> = {
  open: 'Open',
  reviewing: 'Reviewing',
  resolved: 'Resolved',
  dismissed: 'Dismissed',
};

const statusVariant: Record<ComplaintStatus, 'teal' | 'amber' | 'red' | 'gray'> = {
  open: 'red',
  reviewing: 'amber',
  resolved: 'teal',
  dismissed: 'gray',
};

type Filter = 'all' | ComplaintStatus;

const ComplaintsPage = () => {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = mockComplaints.filter(
    (c) => filter === 'all' || c.status === filter,
  );

  const tabs: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'open', label: 'Open' },
    { key: 'reviewing', label: 'Reviewing' },
    { key: 'resolved', label: 'Resolved' },
    { key: 'dismissed', label: 'Dismissed' },
  ];

  return (
    <>
      <PageHeader
        title="Complaints"
        subtitle="Review and resolve passenger reports"
        action={
          <div className="text-xs text-sos font-semibold">
            {mockComplaints.filter((c) => c.status === 'open').length} open
          </div>
        }
      />

      <div className="flex gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              filter === tab.key
                ? 'bg-teal text-white'
                : 'bg-white text-ink-500 border border-ink-200 hover:border-ink-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map((c) => (
          <div key={c.id} className="bg-white rounded-xl p-4 border border-ink-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-[10px] text-ink-500">#{c.id}</span>
              <StatusPill status={statusLabel[c.status]} variant={statusVariant[c.status]} />
            </div>

            <div className="text-xs font-bold text-ink-900 mb-1">
              {c.emoji} {c.reason}
            </div>

            <div className="text-[10px] text-ink-500 mb-2">
              {c.againstSerial ? `Against ${c.againstSerial}` : 'No driver ID (colorum)'}
              {' · '}Filed by {c.filedBy}
              {' · '}{c.date}, {c.time}
              {c.hasPhoto && ' · 📎 Photo attached'}
            </div>

            <p className="text-xs text-ink-700 line-clamp-2 mb-3">{c.description}</p>

            {(c.status === 'open' || c.status === 'reviewing') ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert(`Resolved ${c.id} (prototype)`)}
                  className="bg-teal-surface text-teal text-[10px] font-bold px-3 py-1 rounded-md hover:bg-teal hover:text-white transition-colors"
                >
                  ✓ Resolve
                </button>
                <button
                  onClick={() => alert(`Dismissed ${c.id} (prototype)`)}
                  className="bg-ink-100 text-ink-500 text-[10px] font-bold px-3 py-1 rounded-md hover:bg-ink-200 transition-colors"
                >
                  Dismiss
                </button>
                <button className="text-[10px] text-blue-500 font-semibold ml-auto">
                  View details →
                </button>
              </div>
            ) : (
              <div className="text-[10px] text-ink-400 italic">
                Closed · {c.date}
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="py-10 text-center text-xs text-ink-400">No complaints in this category.</div>
        )}
      </div>
    </>
  );
};

export default ComplaintsPage;
