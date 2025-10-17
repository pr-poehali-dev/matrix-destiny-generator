import { Card } from '@/components/ui/card';
import type { YearMatrixData } from './DestinyMatrixCalculator';

interface YearMatrixVisualizationProps {
  data: YearMatrixData;
}

const YearMatrixVisualization = ({ data }: YearMatrixVisualizationProps) => {
  return (
    <Card className="p-8 shadow-xl border-2">
      <h3 className="text-2xl font-bold text-center text-primary mb-8">
        {data.forecast}
      </h3>

      <div className="relative w-full max-w-2xl mx-auto">
        <svg
          viewBox="0 0 500 400"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="yearGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#6E59A5', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#9b87f5', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#D6BCFA', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          <line
            x1="100"
            y1="200"
            x2="400"
            y2="200"
            stroke="url(#yearGrad)"
            strokeWidth="3"
            opacity="0.6"
          />

          <line
            x1="100"
            y1="200"
            x2="250"
            y2="100"
            stroke="url(#yearGrad)"
            strokeWidth="3"
            opacity="0.6"
          />

          <line
            x1="250"
            y1="100"
            x2="400"
            y2="200"
            stroke="url(#yearGrad)"
            strokeWidth="3"
            opacity="0.6"
          />

          <line
            x1="100"
            y1="200"
            x2="250"
            y2="300"
            stroke="url(#yearGrad)"
            strokeWidth="3"
            opacity="0.6"
          />

          <line
            x1="250"
            y1="300"
            x2="400"
            y2="200"
            stroke="url(#yearGrad)"
            strokeWidth="3"
            opacity="0.6"
          />

          <circle cx="250" cy="100" r="45" fill="#6E59A5" />
          <text
            x="250"
            y="100"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-3xl font-bold fill-white"
          >
            {data.personalYear}
          </text>

          <circle cx="100" cy="200" r="40" fill="#9b87f5" />
          <text
            x="100"
            y="190"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-xl font-bold fill-white"
          >
            {data.threeYears[0]}
          </text>
          <text
            x="100"
            y="210"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-xs font-semibold fill-white"
          >
            {data.year}
          </text>

          <circle cx="250" cy="200" r="40" fill="#9b87f5" />
          <text
            x="250"
            y="190"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-xl font-bold fill-white"
          >
            {data.threeYears[1]}
          </text>
          <text
            x="250"
            y="210"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-xs font-semibold fill-white"
          >
            {data.year + 1}
          </text>

          <circle cx="400" cy="200" r="40" fill="#9b87f5" />
          <text
            x="400"
            y="190"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-xl font-bold fill-white"
          >
            {data.threeYears[2]}
          </text>
          <text
            x="400"
            y="210"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-xs font-semibold fill-white"
          >
            {data.year + 2}
          </text>

          <circle cx="250" cy="300" r="35" fill="#E5DEFF" />
          <text
            x="250"
            y="300"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-2xl font-bold fill-primary"
          >
            {data.yearSum}
          </text>
        </svg>

        <div className="mt-8 space-y-4">
          <div className="p-6 bg-gradient-to-r from-secondary/50 to-secondary/30 rounded-lg">
            <h4 className="font-semibold text-lg text-primary mb-2 text-center">
              Персональный год: {data.personalYear}
            </h4>
            <p className="text-muted-foreground text-center">
              Это главное число вашего года, определяющее основные энергии периода
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-secondary/50 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary mb-1">{data.threeYears[0]}</div>
              <div className="text-sm font-semibold text-muted-foreground">{data.year} год</div>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary mb-1">{data.threeYears[1]}</div>
              <div className="text-sm font-semibold text-muted-foreground">{data.year + 1} год</div>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary mb-1">{data.threeYears[2]}</div>
              <div className="text-sm font-semibold text-muted-foreground">{data.year + 2} год</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default YearMatrixVisualization;
