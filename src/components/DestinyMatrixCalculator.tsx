import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DestinyMatrixVisualization from './DestinyMatrixVisualization';
import YearMatrixVisualization from './YearMatrixVisualization';

export interface FullMatrixData {
  birthDay: number;
  birthMonth: number;
  birthYear: number;
  destinyNumber: number;
  personalNumber: number;
  spiritualNumber: number;
  socialNumber: number;
  planetNumber: number;
  talentLeft: number;
  talentRight: number;
  purposeUp: number;
  purposeDown: number;
  pastLife: number;
  diadema: number[];
  leftLine: number[];
  rightLine: number[];
  earthLine: number[];
  skyLine: number[];
  maleFemale: number[];
  comfort: number;
  health: number[];
  centerNumber: number;
}

export interface YearMatrixData {
  year: number;
  yearSum: number;
  personalYear: number;
  threeYears: number[];
  forecast: string;
}

const DestinyMatrixCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [yearDate, setYearDate] = useState('');
  const [matrixData, setMatrixData] = useState<FullMatrixData | null>(null);
  const [yearMatrixData, setYearMatrixData] = useState<YearMatrixData | null>(null);

  const reduceToArcana = (num: number): number => {
    if (num === 0) return 22;
    if (num <= 22) return num;
    const sum = String(num).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    return sum <= 22 ? sum : reduceToArcana(sum);
  };

  const calculateDestinyMatrix = () => {
    if (!birthDate) return;

    const [year, month, day] = birthDate.split('-').map(Number);
    
    const daySum = reduceToArcana(day);
    const monthSum = reduceToArcana(month);
    const yearDigits = String(year).split('').map(Number);
    const yearSum = reduceToArcana(yearDigits.reduce((a, b) => a + b, 0));

    const destinyNumber = reduceToArcana(day + month + year);
    const personalNumber = reduceToArcana(daySum + monthSum);
    const spiritualNumber = reduceToArcana(daySum + yearSum);
    const socialNumber = reduceToArcana(monthSum + yearSum);
    const planetNumber = reduceToArcana(personalNumber + spiritualNumber + socialNumber);

    const talentLeft = reduceToArcana(daySum + personalNumber);
    const talentRight = reduceToArcana(monthSum + personalNumber);
    const purposeUp = reduceToArcana(daySum + spiritualNumber);
    const purposeDown = reduceToArcana(yearSum + spiritualNumber);

    const pastLife = reduceToArcana(destinyNumber + planetNumber);

    const diadema1 = reduceToArcana(daySum + talentLeft);
    const diadema2 = reduceToArcana(talentLeft + personalNumber);
    const diadema3 = reduceToArcana(personalNumber + talentRight);
    const diadema4 = reduceToArcana(talentRight + monthSum);

    const leftLine1 = reduceToArcana(daySum + purposeUp);
    const leftLine2 = reduceToArcana(purposeUp + spiritualNumber);
    const leftLine3 = reduceToArcana(spiritualNumber + purposeDown);
    const leftLine4 = reduceToArcana(purposeDown + yearSum);

    const rightLine1 = reduceToArcana(monthSum + socialNumber);
    const rightLine2 = reduceToArcana(socialNumber + planetNumber);
    const rightLine3 = reduceToArcana(planetNumber + destinyNumber);

    const earthLine1 = reduceToArcana(yearSum + destinyNumber);
    const earthLine2 = reduceToArcana(destinyNumber + planetNumber);

    const skyLine1 = reduceToArcana(daySum + monthSum);
    const skyLine2 = reduceToArcana(personalNumber + planetNumber);

    const maleFemale1 = reduceToArcana(daySum + yearSum);
    const maleFemale2 = reduceToArcana(monthSum + yearSum);

    const comfort = reduceToArcana(personalNumber + spiritualNumber);
    
    const health1 = reduceToArcana(talentLeft + purposeUp);
    const health2 = reduceToArcana(talentRight + socialNumber);
    const health3 = reduceToArcana(purposeDown + earthLine1);

    const centerNumber = reduceToArcana(personalNumber + spiritualNumber + socialNumber + destinyNumber);

    setMatrixData({
      birthDay: daySum,
      birthMonth: monthSum,
      birthYear: yearSum,
      destinyNumber,
      personalNumber,
      spiritualNumber,
      socialNumber,
      planetNumber,
      talentLeft,
      talentRight,
      purposeUp,
      purposeDown,
      pastLife,
      diadema: [diadema1, diadema2, diadema3, diadema4],
      leftLine: [leftLine1, leftLine2, leftLine3, leftLine4],
      rightLine: [rightLine1, rightLine2, rightLine3],
      earthLine: [earthLine1, earthLine2],
      skyLine: [skyLine1, skyLine2],
      maleFemale: [maleFemale1, maleFemale2],
      comfort,
      health: [health1, health2, health3],
      centerNumber,
    });
  };

  const calculateYearMatrix = () => {
    if (!yearDate || !birthDate) return;

    const [birthYear, birthMonth, birthDay] = birthDate.split('-').map(Number);
    const targetYear = parseInt(yearDate);

    const daySum = reduceToArcana(birthDay);
    const monthSum = reduceToArcana(birthMonth);
    const yearSum = reduceToArcana(
      String(targetYear).split('').reduce((a, b) => a + parseInt(b), 0)
    );

    const personalYear = reduceToArcana(daySum + monthSum + yearSum);

    const year1 = reduceToArcana(personalYear);
    const year2 = reduceToArcana(personalYear + 1);
    const year3 = reduceToArcana(personalYear + 2);

    setYearMatrixData({
      year: targetYear,
      yearSum,
      personalYear,
      threeYears: [year1, year2, year3],
      forecast: `Прогноз на ${targetYear}-${targetYear + 2} годы`,
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <Tabs defaultValue="destiny" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-14">
          <TabsTrigger value="destiny" className="text-lg">
            Матрица Судьбы
          </TabsTrigger>
          <TabsTrigger value="year" className="text-lg">
            Матрица Года
          </TabsTrigger>
        </TabsList>

        <TabsContent value="destiny" className="space-y-8 mt-8">
          <Card className="p-8 shadow-xl border-2">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-primary mb-2">
                  Матрица Судьбы
                </h2>
                <p className="text-muted-foreground">
                  Введите дату рождения для расчёта матрицы
                </p>
              </div>

              <div className="space-y-4 max-w-md mx-auto">
                <div className="space-y-2">
                  <Label htmlFor="birthdate" className="text-base">
                    Дата рождения
                  </Label>
                  <Input
                    id="birthdate"
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>

                <Button
                  onClick={calculateDestinyMatrix}
                  disabled={!birthDate}
                  className="w-full h-12 text-lg font-semibold"
                >
                  Рассчитать матрицу судьбы
                </Button>
              </div>
            </div>
          </Card>

          {matrixData && (
            <div className="animate-fade-in">
              <DestinyMatrixVisualization data={matrixData} />
            </div>
          )}
        </TabsContent>

        <TabsContent value="year" className="space-y-8 mt-8">
          <Card className="p-8 shadow-xl border-2">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-primary mb-2">
                  Матрица Года
                </h2>
                <p className="text-muted-foreground">
                  Рассчитайте энергии года для планирования
                </p>
              </div>

              <div className="space-y-4 max-w-md mx-auto">
                <div className="space-y-2">
                  <Label htmlFor="birthdate-year" className="text-base">
                    Дата рождения
                  </Label>
                  <Input
                    id="birthdate-year"
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year" className="text-base">
                    Год для расчёта
                  </Label>
                  <Input
                    id="year"
                    type="number"
                    min="2000"
                    max="2100"
                    value={yearDate}
                    onChange={(e) => setYearDate(e.target.value)}
                    placeholder="2024"
                    className="text-lg h-12"
                  />
                </div>

                <Button
                  onClick={calculateYearMatrix}
                  disabled={!birthDate || !yearDate}
                  className="w-full h-12 text-lg font-semibold"
                >
                  Рассчитать матрицу года
                </Button>
              </div>
            </div>
          </Card>

          {yearMatrixData && (
            <div className="animate-fade-in">
              <YearMatrixVisualization data={yearMatrixData} />
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DestinyMatrixCalculator;
