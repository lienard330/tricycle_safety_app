import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { mockFareTiers, type FareTier } from '../data/mockData';

interface EditableTier extends FareTier {
  editing: boolean;
  baseFareStr: string;
  perKmStr: string;
  shortTripStr: string;
}

const FareRow = ({
  label,
  value,
  editing,
  onChange,
}: {
  label: string;
  value: string;
  editing: boolean;
  onChange: (v: string) => void;
}) => (
  <div className="flex items-center justify-between py-2 border-b border-ink-100 last:border-0">
    <span className="text-xs text-ink-500">{label}</span>
    {editing ? (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-ink-50 border border-teal rounded px-2 py-1 text-sm font-mono w-28 text-right focus:outline-none"
      />
    ) : (
      <span className="text-sm font-bold font-mono text-ink-900">{value}</span>
    )}
  </div>
);

const FaresPage = () => {
  const [tiers, setTiers] = useState<EditableTier[]>(
    mockFareTiers.map((t) => ({
      ...t,
      editing: false,
      baseFareStr: t.baseFare.toFixed(2),
      perKmStr: t.perKmRate.toFixed(2),
      shortTripStr: t.shortTripRate.toFixed(2),
    })),
  );

  const toggleEdit = (i: number) => {
    setTiers((prev) =>
      prev.map((t, idx) =>
        idx === i ? { ...t, editing: !t.editing } : t,
      ),
    );
  };

  const update = (i: number, key: keyof EditableTier, val: string) => {
    setTiers((prev) =>
      prev.map((t, idx) => (idx === i ? { ...t, [key]: val } : t)),
    );
  };

  return (
    <>
      <PageHeader
        title="Fare Tariff"
        subtitle="LTFRB-approved rates for Calbayog City"
        action={
          <div className="text-xs text-teal font-semibold">Active · Effective Apr 22</div>
        }
      />

      <div className="space-y-4 mb-6">
        {tiers.map((tier, i) => (
          <div key={tier.tier} className="bg-white rounded-xl border border-ink-200 p-5">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-ink-200">
              <div>
                <h3 className="text-sm font-bold text-ink-900">{tier.label}</h3>
                {tier.discountPercent > 0 && (
                  <span className="text-[10px] text-teal font-semibold">
                    {tier.discountPercent}% discount applied
                  </span>
                )}
              </div>
              <button
                onClick={() => toggleEdit(i)}
                className="text-xs text-teal font-semibold hover:text-teal-dark"
              >
                {tier.editing ? '✓ Save' : 'Edit'}
              </button>
            </div>

            <FareRow
              label="Base Fare (first 2km)"
              value={tier.editing ? tier.baseFareStr : `₱ ${tier.baseFareStr}`}
              editing={tier.editing}
              onChange={(v) => update(i, 'baseFareStr', v)}
            />
            <FareRow
              label="Per km rate"
              value={tier.editing ? tier.perKmStr : `₱ ${tier.perKmStr} / km`}
              editing={tier.editing}
              onChange={(v) => update(i, 'perKmStr', v)}
            />
            <FareRow
              label="Short trip (under 1km)"
              value={tier.editing ? tier.shortTripStr : `₱ ${tier.shortTripStr}`}
              editing={tier.editing}
              onChange={(v) => update(i, 'shortTripStr', v)}
            />
            {tier.tier !== 'regular' && (
              <FareRow
                label="Discount"
                value={`${tier.discountPercent}%`}
                editing={false}
                onChange={() => {}}
              />
            )}
          </div>
        ))}
      </div>

      <Button
        variant="primary"
        fullWidth
        onClick={() => alert('Tariff published (prototype)')}
      >
        Publish Updated Tariff
      </Button>
    </>
  );
};

export default FaresPage;
