import { useState } from 'react';
import { Star } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import StatusPill from '../components/StatusPill';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { mockDrivers, type DriverStatus } from '../data/mockData';

const statusLabel: Record<DriverStatus, string> = {
  full: '✓ Full',
  partial: '⚠ Partial',
  pending: 'Pending',
  rejected: 'Rejected',
};

const statusVariant: Record<DriverStatus, 'teal' | 'amber' | 'red' | 'gray'> = {
  full: 'teal',
  partial: 'amber',
  pending: 'red',
  rejected: 'gray',
};

type FilterKey = 'all' | DriverStatus;

const filterLabels: Record<FilterKey, string> = {
  all: 'All',
  full: 'Full',
  partial: 'Partial',
  pending: 'Pending',
  rejected: 'Rejected',
};

const FormField = ({ label, placeholder }: { label: string; placeholder?: string }) => (
  <div>
    <label className="block text-xs font-semibold text-ink-500 mb-1.5">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full bg-ink-50 border border-ink-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal"
    />
  </div>
);

const DriversPage = () => {
  const [filter, setFilter] = useState<FilterKey>('all');
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const countFor = (f: FilterKey) =>
    f === 'all' ? mockDrivers.length : mockDrivers.filter((d) => d.status === f).length;

  const filteredDrivers = mockDrivers.filter((d) => {
    if (filter !== 'all' && d.status !== filter) return false;
    if (search) {
      const q = search.toLowerCase();
      return d.name.toLowerCase().includes(q) || d.serial.toLowerCase().includes(q);
    }
    return true;
  });

  const filters: FilterKey[] = ['all', 'full', 'partial', 'pending', 'rejected'];

  return (
    <>
      <PageHeader
        title="Driver Management"
        action={
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            + Register Driver
          </Button>
        }
      />

      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
              filter === f
                ? 'bg-teal-surface text-teal border border-teal'
                : 'bg-white text-ink-500 border border-ink-200 hover:border-ink-400'
            }`}
          >
            {filterLabels[f]} ({countFor(f)})
          </button>
        ))}
        <input
          type="text"
          placeholder="Search name or serial…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-auto bg-white border border-ink-200 rounded-md px-3 py-1.5 text-xs w-52 focus:outline-none focus:border-teal"
        />
      </div>

      <div className="bg-white rounded-xl border border-ink-200 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-ink-50 border-b border-ink-200">
              {['Driver', 'Serial', 'Phone', 'Status', 'Trips', 'Rating', 'Action'].map((h) => (
                <th
                  key={h}
                  className="px-4 py-2.5 text-[10px] font-bold text-ink-500 uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredDrivers.map((d) => (
              <tr key={d.id} className="border-b border-ink-100 hover:bg-ink-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    {d.online && <span className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0" />}
                    <span className="text-xs font-semibold text-ink-900">{d.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 font-mono text-xs text-ink-500">{d.serial}</td>
                <td className="px-4 py-3 text-xs text-ink-500">{d.phone}</td>
                <td className="px-4 py-3">
                  <StatusPill status={statusLabel[d.status]} variant={statusVariant[d.status]} />
                </td>
                <td className="px-4 py-3 text-xs text-ink-700">{d.completedTrips}</td>
                <td className="px-4 py-3 text-xs text-ink-700">
                  {d.rating > 0 ? (
                    <span className="flex items-center gap-1">
                      <Star size={11} className="text-amber_s fill-amber_s" />
                      {d.rating}
                    </span>
                  ) : (
                    '—'
                  )}
                </td>
                <td className="px-4 py-3">
                  <button
                    className={`text-xs font-semibold ${
                      d.status === 'pending' ? 'text-sos' : 'text-blue-500'
                    }`}
                  >
                    {d.status === 'pending' ? 'Approve →' : 'View →'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredDrivers.length === 0 && (
          <div className="py-10 text-center text-xs text-ink-400">No drivers match your filter.</div>
        )}
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Register New Driver"
        footer={
          <>
            <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button
              variant="primary"
              onClick={() => {
                alert('Driver registered (prototype)');
                setModalOpen(false);
              }}
            >
              Register
            </Button>
          </>
        }
      >
        <div className="space-y-3">
          <FormField label="Full Name" placeholder="e.g. Juan Dela Cruz" />
          <FormField label="Phone" placeholder="+63 9XX XXX XXXX" />
          <FormField label="Serial Number" placeholder="CCM-XXXX" />
          <FormField label="Plate Number" placeholder="ABC 123" />
          <div>
            <label className="block text-xs font-semibold text-ink-500 mb-1.5">
              Initial Status
            </label>
            <select className="w-full bg-ink-50 border border-ink-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal">
              <option>Partial</option>
              <option>Full</option>
            </select>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DriversPage;
