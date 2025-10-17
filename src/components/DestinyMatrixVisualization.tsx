import { Card } from '@/components/ui/card';
import type { FullMatrixData } from './DestinyMatrixCalculator';

interface DestinyMatrixVisualizationProps {
  data: FullMatrixData;
}

const DestinyMatrixVisualization = ({ data }: DestinyMatrixVisualizationProps) => {
  return (
    <Card className="p-8 shadow-xl border-2">
      <h3 className="text-2xl font-bold text-center text-primary mb-8">
        Ваша матрица судьбы
      </h3>

      <div className="relative w-full max-w-3xl mx-auto">
        <svg
          viewBox="0 0 600 700"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#6E59A5', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#9b87f5', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>

          <line x1="300" y1="80" x2="150" y2="300" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="300" y1="80" x2="450" y2="300" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="150" y1="300" x2="300" y2="520" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="450" y1="300" x2="300" y2="520" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="150" y1="300" x2="450" y2="300" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="300" y1="80" x2="300" y2="520" stroke="url(#lineGrad)" strokeWidth="2" />

          <line x1="300" y1="80" x2="225" y2="190" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="225" y1="190" x2="150" y2="300" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="300" y1="80" x2="375" y2="190" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="375" y1="190" x2="450" y2="300" stroke="url(#lineGrad)" strokeWidth="2" />

          <line x1="150" y1="300" x2="225" y2="410" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="225" y1="410" x2="300" y2="520" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="450" y1="300" x2="375" y2="410" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="375" y1="410" x2="300" y2="520" stroke="url(#lineGrad)" strokeWidth="2" />

          <circle cx="300" cy="80" r="30" fill="#6E59A5" />
          <text x="300" y="80" textAnchor="middle" dominantBaseline="central" className="text-xl font-bold fill-white">
            {data.birthDay}
          </text>

          <circle cx="150" cy="300" r="30" fill="#6E59A5" />
          <text x="150" y="300" textAnchor="middle" dominantBaseline="central" className="text-xl font-bold fill-white">
            {data.birthMonth}
          </text>

          <circle cx="450" cy="300" r="30" fill="#6E59A5" />
          <text x="450" y="300" textAnchor="middle" dominantBaseline="central" className="text-xl font-bold fill-white">
            {data.birthYear}
          </text>

          <circle cx="300" cy="520" r="30" fill="#6E59A5" />
          <text x="300" y="520" textAnchor="middle" dominantBaseline="central" className="text-xl font-bold fill-white">
            {data.destinyNumber}
          </text>

          <circle cx="225" cy="190" r="26" fill="#9b87f5" />
          <text x="225" y="190" textAnchor="middle" dominantBaseline="central" className="text-lg font-semibold fill-white">
            {data.talentLeft}
          </text>

          <circle cx="375" cy="190" r="26" fill="#9b87f5" />
          <text x="375" y="190" textAnchor="middle" dominantBaseline="central" className="text-lg font-semibold fill-white">
            {data.talentRight}
          </text>

          <circle cx="225" cy="410" r="26" fill="#9b87f5" />
          <text x="225" y="410" textAnchor="middle" dominantBaseline="central" className="text-lg font-semibold fill-white">
            {data.purposeUp}
          </text>

          <circle cx="375" cy="410" r="26" fill="#9b87f5" />
          <text x="375" y="410" textAnchor="middle" dominantBaseline="central" className="text-lg font-semibold fill-white">
            {data.purposeDown}
          </text>

          <circle cx="300" cy="190" r="24" fill="#E5DEFF" />
          <text x="300" y="190" textAnchor="middle" dominantBaseline="central" className="text-base font-semibold fill-primary">
            {data.personalNumber}
          </text>

          <circle cx="225" cy="300" r="24" fill="#E5DEFF" />
          <text x="225" y="300" textAnchor="middle" dominantBaseline="central" className="text-base font-semibold fill-primary">
            {data.spiritualNumber}
          </text>

          <circle cx="375" cy="300" r="24" fill="#E5DEFF" />
          <text x="375" y="300" textAnchor="middle" dominantBaseline="central" className="text-base font-semibold fill-primary">
            {data.socialNumber}
          </text>

          <circle cx="300" cy="410" r="24" fill="#E5DEFF" />
          <text x="300" y="410" textAnchor="middle" dominantBaseline="central" className="text-base font-semibold fill-primary">
            {data.planetNumber}
          </text>

          <circle cx="262" cy="135" r="18" fill="#D6BCFA" />
          <text x="262" y="135" textAnchor="middle" dominantBaseline="central" className="text-sm font-semibold fill-primary">
            {data.diadema[0]}
          </text>

          <circle cx="338" cy="135" r="18" fill="#D6BCFA" />
          <text x="338" y="135" textAnchor="middle" dominantBaseline="central" className="text-sm font-semibold fill-primary">
            {data.diadema[1]}
          </text>

          <circle cx="262" cy="245" r="18" fill="#D6BCFA" />
          <text x="262" y="245" textAnchor="middle" dominantBaseline="central" className="text-sm font-semibold fill-primary">
            {data.diadema[2]}
          </text>

          <circle cx="338" cy="245" r="18" fill="#D6BCFA" />
          <text x="338" y="245" textAnchor="middle" dominantBaseline="central" className="text-sm font-semibold fill-primary">
            {data.diadema[3]}
          </text>

          <circle cx="187" cy="245" r="18" fill="#FDE1D3" />
          <text x="187" y="245" textAnchor="middle" dominantBaseline="central" className="text-sm font-semibold fill-primary">
            {data.leftLine[0]}
          </text>

          <circle cx="187" cy="355" r="18" fill="#FDE1D3" />
          <text x="187" y="355" textAnchor="middle" dominantBaseline="central" className="text-sm font-semibold fill-primary">
            {data.leftLine[1]}
          </text>

          <circle cx="413" cy="245" r="18" fill="#FDE1D3" />
          <text x="413" y="245" textAnchor="middle" dominantBaseline="central" className="text-sm font-semibold fill-primary">
            {data.rightLine[0]}
          </text>

          <circle cx="413" cy="355" r="18" fill="#FDE1D3" />
          <text x="413" y="355" textAnchor="middle" dominantBaseline="central" className="text-sm font-semibold fill-primary">
            {data.rightLine[1]}
          </text>

          <circle cx="300" cy="300" r="35" fill="#FFFFFF" stroke="#6E59A5" strokeWidth="3" />
          <text x="300" y="300" textAnchor="middle" dominantBaseline="central" className="text-2xl font-bold fill-primary">
            {data.centerNumber}
          </text>

          <circle cx="300" cy="30" r="22" fill="#7E69AB" />
          <text x="300" y="30" textAnchor="middle" dominantBaseline="central" className="text-base font-bold fill-white">
            {data.pastLife}
          </text>

          <circle cx="262" cy="355" r="18" fill="#F2FCE2" />
          <text x="262" y="355" textAnchor="middle" dominantBaseline="central" className="text-sm font-semibold fill-primary">
            {data.skyLine[0]}
          </text>

          <circle cx="338" cy="355" r="18" fill="#F2FCE2" />
          <text x="338" y="355" textAnchor="middle" dominantBaseline="central" className="text-sm font-semibold fill-primary">
            {data.skyLine[1]}
          </text>

          <circle cx="262" cy="465" r="18" fill="#FFDEE2" />
          <text x="262" y="465" textAnchor="middle" dominantBaseline="central" className="text-sm font-semibold fill-primary">
            {data.earthLine[0]}
          </text>

          <circle cx="338" cy="465" r="18" fill="#FFDEE2" />
          <text x="338" y="465" textAnchor="middle" dominantBaseline="central" className="text-sm font-semibold fill-primary">
            {data.earthLine[1]}
          </text>

          <text x="300" y="600" textAnchor="middle" className="text-sm fill-muted-foreground font-medium">
            Комфорт: {data.comfort}
          </text>
          <text x="300" y="630" textAnchor="middle" className="text-sm fill-muted-foreground font-medium">
            Мужское/Женское: {data.maleFemale[0]} / {data.maleFemale[1]}
          </text>
          <text x="300" y="660" textAnchor="middle" className="text-sm fill-muted-foreground font-medium">
            Здоровье: {data.health[0]}, {data.health[1]}, {data.health[2]}
          </text>
        </svg>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
          <div className="p-4 bg-secondary/50 rounded-lg">
            <div className="font-semibold text-primary mb-1">День</div>
            <div className="text-2xl font-bold text-primary">{data.birthDay}</div>
          </div>
          <div className="p-4 bg-secondary/50 rounded-lg">
            <div className="font-semibold text-primary mb-1">Месяц</div>
            <div className="text-2xl font-bold text-primary">{data.birthMonth}</div>
          </div>
          <div className="p-4 bg-secondary/50 rounded-lg">
            <div className="font-semibold text-primary mb-1">Год</div>
            <div className="text-2xl font-bold text-primary">{data.birthYear}</div>
          </div>
          <div className="p-4 bg-secondary/50 rounded-lg">
            <div className="font-semibold text-primary mb-1">Судьба</div>
            <div className="text-2xl font-bold text-primary">{data.destinyNumber}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DestinyMatrixVisualization;
