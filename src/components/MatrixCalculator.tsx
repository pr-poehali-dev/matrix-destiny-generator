import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import MatrixVisualization from './MatrixVisualization';

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

const MatrixCalculator = () => {
  const [date, setDate] = useState('');
  const [matrixData, setMatrixData] = useState<MatrixData | null>(null);

  const reduceToArcana = (num: number): number => {
    if (num <= 22) return num;
    const sum = String(num).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    return sum <= 22 ? sum : reduceToArcana(sum);
  };

  const calculateMatrix = () => {
    if (!date) return;

    const [year, month, day] = date.split('-').map(Number);
    
    const daySum = reduceToArcana(day);
    const monthSum = reduceToArcana(month);
    const yearSum = reduceToArcana(
      String(year).split('').reduce((acc, digit) => acc + parseInt(digit), 0)
    );

    const destinyNumber = reduceToArcana(day + month + year);
    const personalNumber = reduceToArcana(daySum + monthSum);
    const socialNumber = reduceToArcana(monthSum + yearSum);
    const spiritualNumber = reduceToArcana(daySum + yearSum);
    
    const topLeft = reduceToArcana(daySum + personalNumber);
    const topRight = reduceToArcana(monthSum + personalNumber);
    const bottomLeft = reduceToArcana(daySum + spiritualNumber);
    const bottomRight = reduceToArcana(yearSum + spiritualNumber);

    const centerNumber = reduceToArcana(
      topLeft + topRight + bottomLeft + bottomRight
    );

    setMatrixData({
      birthDay: daySum,
      birthMonth: monthSum,
      birthYear: yearSum,
      destinyNumber,
      personalNumber,
      socialNumber,
      spiritualNumber,
      topNumbers: [topLeft, topRight],
      bottomNumbers: [bottomLeft, bottomRight],
      centerNumber,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <Card className="p-8 shadow-xl border-2">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-2">
              Калькулятор матрицы судьбы
            </h2>
            <p className="text-muted-foreground">
              Введите дату рождения для расчёта вашей матрицы
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="birthdate" className="text-base">
                Дата рождения
              </Label>
              <Input
                id="birthdate"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="text-lg h-12"
              />
            </div>

            <Button
              onClick={calculateMatrix}
              disabled={!date}
              className="w-full h-12 text-lg font-semibold"
            >
              Рассчитать матрицу
            </Button>
          </div>
        </div>
      </Card>

      {matrixData && (
        <div className="animate-fade-in">
          <MatrixVisualization data={matrixData} />
        </div>
      )}
    </div>
  );
};

export default MatrixCalculator;
