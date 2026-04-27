import PageHeader from '../components/PageHeader';
import BarChart from '../components/BarChart';
import {
  mockTripsPerDay,
  mockComplaintsPerWeek,
  mockDriverPerformance,
} from '../data/mockData';

const ScoreBar = ({ score }: { score: number }) => {
  const color =
    score >= 80 ? 'bg-teal' : score >= 60 ? 'bg-amber_s' : 'bg-sos';
  const textColor =
    score >= 80 ? 'text-teal' : score >= 60 ? 'text-amber_s' : 'text-sos';

  return (
    <div className="flex items-center gap-3 flex-1">
      <div className="flex-1 h-1.5 bg-ink-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${score}%` }}
        />
      </div>
      <span className={`text-xs font-bold w-8 text-right ${textColor}`}>{score}</span>
    </div>
  );
};

const AnalyticsPage = () => (
  <>
    <PageHeader
      title="Analytics"
      action={
        <select className="bg-white border border-ink-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:border-teal">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>This month</option>
        </select>
      }
    />

    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-white rounded-xl p-5 border border-ink-200">
        <h3 className="text-[10px] font-bold text-ink-500 uppercase tracking-wider mb-4">
          Trips per day
        </h3>
        <BarChart data={mockTripsPerDay} highlightLast height={80} />
        <div className="flex justify-between mt-2">
          <span className="text-[10px] text-ink-400 font-mono">Mar 23</span>
          <span className="text-xs text-ink-500">Peak: Apr 19 (94 trips)</span>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 border border-ink-200">
        <h3 className="text-[10px] font-bold text-ink-500 uppercase tracking-wider mb-4">
          Complaints per week
        </h3>
        <div className="flex items-end gap-1" style={{ height: '80px' }}>
          {mockComplaintsPerWeek.map((v, i) => {
            const max = Math.max(...mockComplaintsPerWeek, 1);
            return (
              <div
                key={i}
                className="flex-1 rounded-t bg-sos-surface hover:bg-sos transition-colors"
                style={{ height: `${(v / max) * 100}%` }}
                title={String(v)}
              />
            );
          })}
        </div>
        <div className="mt-2 text-xs text-ink-500">This week: 12 complaints</div>
      </div>
    </div>

    <div className="bg-white rounded-xl p-5 border border-ink-200">
      <h3 className="text-sm font-bold text-ink-900 mb-4">Driver Reliability Scores</h3>
      <div className="space-y-2">
        {mockDriverPerformance.map((d) => (
          <div
            key={d.serial}
            className="flex items-center gap-3 p-2 hover:bg-ink-50 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-teal-surface text-teal rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0">
              {d.initials}
            </div>
            <div className="w-36 min-w-0">
              <div className="text-xs font-semibold text-ink-900 truncate">{d.name}</div>
              <div className="font-mono text-[10px] text-ink-500">{d.serial}</div>
            </div>
            <ScoreBar score={d.score} />
          </div>
        ))}
      </div>
    </div>
  </>
);

export default AnalyticsPage;
