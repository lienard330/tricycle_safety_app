import PageHeader from '../components/PageHeader';
import { mockTrips } from '../data/mockData';

const activeTripDotClass = (hasSOS: boolean, status: string) => {
  if (hasSOS || status === 'sos') return 'bg-sos';
  if (status === 'tracking') return 'bg-ink-400';
  return 'bg-teal';
};

const MapPage = () => {
  const nonCompleted = mockTrips.filter((t) => t.status !== 'completed');

  return (
    <>
      <PageHeader
        title="Live Map"
        action={
          <div className="text-xs text-teal font-semibold">
            ● {nonCompleted.length} active trips
          </div>
        }
      />

      {/* Faux map */}
      <div
        className="bg-[#E8F0EB] rounded-xl h-96 relative overflow-hidden border border-ink-200 mb-4"
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),' +
              'linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Faux roads (SVG) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
        >
          <path d="M0 250 Q200 230 800 280" stroke="#b5bdb4" strokeWidth="10" fill="none" />
          <path d="M160 0 Q200 150 220 400" stroke="#b5bdb4" strokeWidth="7" fill="none" />
          <path d="M400 0 Q420 150 440 400" stroke="#b5bdb4" strokeWidth="6" fill="none" />
          <path d="M0 100 Q400 80 800 120" stroke="#b5bdb4" strokeWidth="5" fill="none" />
          <path d="M580 0 Q600 200 620 400" stroke="#b5bdb4" strokeWidth="5" fill="none" />
        </svg>

        {/* SOS pin */}
        <div className="absolute top-[35%] left-[25%] flex items-center gap-1.5">
          <div className="w-4 h-4 bg-sos rounded-full border-2 border-white ring-4 ring-sos/30 animate-pulse" />
          <div className="bg-sos text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
            SOS
          </div>
        </div>

        {/* Active trips */}
        <div className="absolute top-[50%] left-[55%] w-3 h-3 bg-teal rounded-full border-2 border-white shadow" />
        <div className="absolute top-[25%] left-[65%] w-3 h-3 bg-teal rounded-full border-2 border-white shadow" />
        <div className="absolute top-[62%] left-[40%] w-3 h-3 bg-teal rounded-full border-2 border-white shadow" />
        <div className="absolute top-[40%] left-[75%] w-3 h-3 bg-teal rounded-full border-2 border-white shadow" />

        {/* Tracking only */}
        <div className="absolute top-[28%] left-[82%] w-3 h-3 bg-ink-400 rounded-full border-2 border-white shadow" />

        {/* City label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold text-ink-400 opacity-40 select-none pointer-events-none">
          CALBAYOG CITY
        </div>

        {/* Legend */}
        <div className="absolute bottom-3 right-3 bg-white/90 rounded-lg p-2.5 text-[10px] space-y-1.5 shadow">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-sos rounded-full" />
            <span className="text-ink-700">SOS Alert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-teal rounded-full" />
            <span className="text-ink-700">Active trip</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-ink-400 rounded-full" />
            <span className="text-ink-700">Safety tracking</span>
          </div>
        </div>
      </div>

      {/* Active trips list */}
      <div className="bg-white rounded-xl p-5 border border-ink-200">
        <h3 className="text-sm font-bold text-ink-900 mb-3">Active Trips</h3>
        <div className="space-y-1">
          {nonCompleted.map((t) => (
            <div
              key={t.id}
              className="flex items-center gap-3 py-2 border-b border-ink-100 last:border-0 text-xs"
            >
              <div
                className={`w-2 h-2 rounded-full flex-shrink-0 ${activeTripDotClass(t.hasSOS, t.status)}`}
              />
              <div className="flex-1 font-semibold text-ink-900">
                {t.hasSOS && '⚠️ '}
                {t.passengerName}
              </div>
              <div className="text-ink-500">{t.location}</div>
              <div className="text-ink-400 font-mono text-[10px]">{t.startedAgo}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MapPage;
