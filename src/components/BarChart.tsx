interface BarChartProps {
  data: number[];
  highlightLast?: boolean;
  height?: number;
}

const BarChart = ({ data, highlightLast = false, height = 100 }: BarChartProps) => {
  const max = Math.max(...data, 1);

  return (
    <div className="flex items-end gap-0.5" style={{ height: `${height}px` }}>
      {data.map((value, i) => {
        const isHighlighted = highlightLast && i === data.length - 1;
        const heightPct = (value / max) * 100;
        return (
          <div
            key={i}
            className={`flex-1 rounded-t transition-colors ${isHighlighted ? 'bg-teal' : 'bg-teal-surface'}`}
            style={{ height: `${heightPct}%` }}
            title={String(value)}
          />
        );
      })}
    </div>
  );
};

export default BarChart;
