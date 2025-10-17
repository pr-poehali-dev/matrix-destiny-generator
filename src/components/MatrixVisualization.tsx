import { Card } from '@/components/ui/card';

interface MatrixData {
  birthDay: number;
  birthMonth: number;
  birthYear: number;
  destinyNumber: number;
  personalNumber: number;
  socialNumber: number;
  spiritualNumber: number;
  topNumbers: number[];
  bottomNumbers: number[];
  centerNumber: number;
}

interface MatrixVisualizationProps {
  data: MatrixData;
}

const MatrixVisualization = ({ data }: MatrixVisualizationProps) => {
  return (
    <Card className="p-8 shadow-xl border-2">
      <h3 className="text-2xl font-bold text-center text-primary mb-8">
        Ваша матрица судьбы
      </h3>

      <div className="relative w-full max-w-2xl mx-auto aspect-square">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#6E59A5', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#9b87f5', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          <line
            x1="200"
            y1="50"
            x2="50"
            y2="200"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            opacity="0.6"
          />
          <line
            x1="200"
            y1="50"
            x2="350"
            y2="200"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            opacity="0.6"
          />
          <line
            x1="50"
            y1="200"
            x2="200"
            y2="350"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            opacity="0.6"
          />
          <line
            x1="350"
            y1="200"
            x2="200"
            y2="350"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            opacity="0.6"
          />
          
          <line
            x1="50"
            y1="200"
            x2="350"
            y2="200"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            opacity="0.6"
          />
          <line
            x1="200"
            y1="50"
            x2="200"
            y2="350"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            opacity="0.6"
          />

          <circle cx="200" cy="50" r="35" fill="#6E59A5" />
          <text
            x="200"
            y="50"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-2xl font-bold fill-white"
          >
            {data.birthDay}
          </text>

          <circle cx="50" cy="200" r="35" fill="#6E59A5" />
          <text
            x="50"
            y="200"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-2xl font-bold fill-white"
          >
            {data.birthMonth}
          </text>

          <circle cx="350" cy="200" r="35" fill="#6E59A5" />
          <text
            x="350"
            y="200"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-2xl font-bold fill-white"
          >
            {data.birthYear}
          </text>

          <circle cx="200" cy="350" r="35" fill="#6E59A5" />
          <text
            x="200"
            y="350"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-2xl font-bold fill-white"
          >
            {data.destinyNumber}
          </text>

          <circle cx="125" cy="125" r="30" fill="#9b87f5" />
          <text
            x="125"
            y="125"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-xl font-semibold fill-white"
          >
            {data.topNumbers[0]}
          </text>

          <circle cx="275" cy="125" r="30" fill="#9b87f5" />
          <text
            x="275"
            y="125"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-xl font-semibold fill-white"
          >
            {data.topNumbers[1]}
          </text>

          <circle cx="125" cy="275" r="30" fill="#9b87f5" />
          <text
            x="125"
            y="275"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-xl font-semibold fill-white"
          >
            {data.bottomNumbers[0]}
          </text>

          <circle cx="275" cy="275" r="30" fill="#9b87f5" />
          <text
            x="275"
            y="275"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-xl font-semibold fill-white"
          >
            {data.bottomNumbers[1]}
          </text>

          <circle cx="200" cy="125" r="28" fill="#E5DEFF" />
          <text
            x="200"
            y="125"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-lg font-semibold fill-primary"
          >
            {data.personalNumber}
          </text>

          <circle cx="125" cy="200" r="28" fill="#E5DEFF" />
          <text
            x="125"
            y="200"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-lg font-semibold fill-primary"
          >
            {data.spiritualNumber}
          </text>

          <circle cx="275" cy="200" r="28" fill="#E5DEFF" />
          <text
            x="275"
            y="200"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-lg font-semibold fill-primary"
          >
            {data.socialNumber}
          </text>

          <circle cx="200" cy="275" r="28" fill="#E5DEFF" />
          <text
            x="200"
            y="275"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-lg font-semibold fill-primary"
          >
            {data.personalNumber}
          </text>

          <circle cx="200" cy="200" r="40" fill="#FFFFFF" stroke="#6E59A5" strokeWidth="3" />
          <text
            x="200"
            y="200"
            textAnchor="middle"
            dominantBaseline="central"
            className="text-3xl font-bold fill-primary"
          >
            {data.centerNumber}
          </text>
        </svg>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <div className="p-3 bg-secondary/50 rounded-lg">
            <div className="font-semibold text-primary">День</div>
            <div className="text-2xl font-bold text-primary">{data.birthDay}</div>
          </div>
          <div className="p-3 bg-secondary/50 rounded-lg">
            <div className="font-semibold text-primary">Месяц</div>
            <div className="text-2xl font-bold text-primary">{data.birthMonth}</div>
          </div>
          <div className="p-3 bg-secondary/50 rounded-lg">
            <div className="font-semibold text-primary">Год</div>
            <div className="text-2xl font-bold text-primary">{data.birthYear}</div>
          </div>
          <div className="p-3 bg-secondary/50 rounded-lg">
            <div className="font-semibold text-primary">Судьба</div>
            <div className="text-2xl font-bold text-primary">{data.destinyNumber}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MatrixVisualization;
