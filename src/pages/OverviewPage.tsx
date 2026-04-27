import { Users, Map, AlertTriangle, FileCheck } from 'lucide-react';
import KpiCard from '../components/KpiCard';
import PageHeader from '../components/PageHeader';
import BarChart from '../components/BarChart';
import { mockKPIs, mockTripsPerDay, mockActivityFeed } from '../data/mockData';

const dotColor: Record<string, string> = {
  trip: 'bg-teal',
  complaint: 'bg-sos',
  driver: 'bg-blue-500',
  doc: 'bg-amber_s',
};

const OverviewPage = () => (
  <>
    <PageHeader
      title="Overview"
      subtitle="Snapshot of system activity"
      action={
        <div className="text-xs text-ink-500 font-mono">
          {new Date().toLocaleDateString('en-PH', { dateStyle: 'long' })}
        </div>
      }
    />

    <div className="grid grid-cols-4 gap-4 mb-6">
      <KpiCard
        label="Registered Drivers"
        value={mockKPIs.totalDrivers.toLocaleString()}
        trend="+12 this week"
        trendVariant="up"
        icon={Users}
      />
      <KpiCard
        label="Active Trips Now"
        value={mockKPIs.activeTrips}
        trend="🟢 Live"
        trendVariant="up"
        icon={Map}
      />
      <KpiCard
        label="Open Complaints"
        value={mockKPIs.openComplaints}
        trend="Needs review"
        trendVariant="warn"
        icon={AlertTriangle}
      />
      <KpiCard
        label="Pending Verifications"
        value={mockKPIs.pendingVerifications}
        trend="Action needed"
        trendVariant="neutral"
        icon={FileCheck}
      />
    </div>

    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 bg-white rounded-xl p-5 border border-ink-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-ink-900">Trips per day (last 30)</h3>
          <span className="text-[10px] text-ink-500 font-mono">Last update: Apr 22</span>
        </div>
        <BarChart data={mockTripsPerDay} highlightLast height={120} />
        <div className="flex justify-between mt-2 text-[10px] text-ink-400 font-mono">
          <span>Mar 23</span>
          <span>Apr 22</span>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 border border-ink-200">
        <h3 className="text-sm font-bold text-ink-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {mockActivityFeed.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs">
              <div
                className={`w-2 h-2 mt-1 rounded-full flex-shrink-0 ${dotColor[item.type] ?? 'bg-ink-300'}`}
              />
              <div className="flex-1">
                <p className="text-ink-700 leading-snug">{item.message}</p>
                <p className="text-[10px] text-ink-400 mt-0.5 font-mono">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default OverviewPage;
