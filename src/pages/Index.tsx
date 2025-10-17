import MatrixCalculator from '@/components/MatrixCalculator';
import ContactSection from '@/components/ContactSection';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="w-full py-6 px-4 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">Матрица Судьбы</h1>
          </div>
          <nav>
            <a
              href="#contacts"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>
        </div>
      </header>

      <main className="px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-16">
          <section className="text-center space-y-4 animate-fade-in">
            <h2 className="text-5xl font-bold text-primary">
              Узнайте свою матрицу судьбы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Древняя система расчётов, которая поможет лучше понять себя
              и свой жизненный путь
            </p>
          </section>

          <MatrixCalculator />

          <ContactSection />
        </div>
      </main>

      <footer className="w-full py-8 px-4 border-t bg-background/80 backdrop-blur-sm mt-16">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Матрица Судьбы. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
