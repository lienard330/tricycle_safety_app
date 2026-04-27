import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import StatusPill from '../components/StatusPill';
import { mockTrips, type TripStatus } from '../data/mockData';

const statusLabel: Record<TripStatus, string> = {
  active: 'Active',
  sos: 'SOS',
  tracking: 'Tracking',
  completed: 'Completed',
};

const statusVariant = (t: TripStatus, hasSOS: boolean): 'teal' | 'amber' | 'red' | 'gray' => {
  if (hasSOS) return 'red';
  if (t === 'active') return 'teal';
  if (t === 'completed') return 'gray';
  return 'gray';
};

const dotClass: Record<TripStatus, string> = {
  sos: 'bg-sos animate-pulse',
  active: 'bg-teal',
  tracking: 'bg-ink-400',
  completed: 'bg-ink-200',
};

type Filter = 'all' | 'active' | 'sos' | 'completed';

const TripsPage = () => {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = mockTrips.filter((t) => {
    if (filter === 'all') return true;
    if (filter === 'sos') return t.hasSOS;
    if (filter === 'active') return t.status === 'active' || t.status === 'tracking';
    return t.status === filter;
  });

  const tabs: { key: Filter; label: string }[] = [
    { key: 'all', label: `All (${mockTrips.length})` },
    { key: 'active', label: `Active (${mockTrips.filter((t) => t.status === 'active' || t.status === 'tracking').length})` },
    { key: 'sos', label: `SOS (${mockTrips.filter((t) => t.hasSOS).length})` },
    { key: 'completed', label: `Completed (${mockTrips.filter((t) => t.status === 'completed').length})` },
  ];

  return (
    <>
      <PageHeader
        title="Trip Monitoring"
        action={
          <div className="text-xs text-teal font-semibold">
            ● {mockTrips.filter((t) => t.status === 'active' || t.status === 'sos').length} active now
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
        {filtered.map((trip) => (
          <div
            key={trip.id}
            className={`bg-white rounded-xl px-4 py-3 border flex items-center gap-3 ${
              trip.hasSOS ? 'border-sos border-2 bg-sos-surface' : 'border-ink-200'
            }`}
          >
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${dotClass[trip.status]}`} />

            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-ink-900">
                {trip.hasSOS && '⚠️ SOS — '}
                {trip.passengerName}
              </div>
              <div className="text-[10px] text-ink-500 font-mono mt-0.5">
                {trip.driverSerial} · {trip.location} · {trip.startedAgo}
              </div>
            </div>

            <div className="font-mono text-[10px] text-ink-400 hidden sm:block">{trip.id}</div>

            <StatusPill
              status={statusLabel[trip.status]}
              variant={statusVariant(trip.status, trip.hasSOS)}
            />

            <button className="text-xs font-semibold text-blue-500 ml-1 flex-shrink-0">
              View →
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="py-10 text-center text-xs text-ink-400">No trips match this filter.</div>
        )}
      </div>
    </>
  );
};

export default TripsPage;
