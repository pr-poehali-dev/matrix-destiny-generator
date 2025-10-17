import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Сообщение отправлено!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contacts" className="w-full max-w-4xl mx-auto py-16">
      <Card className="p-8 shadow-xl border-2">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">Контакты</h2>
          <p className="text-muted-foreground">
            Свяжитесь с нами для консультации
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-muted-foreground">info@matrixsudby.ru</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                <p className="text-muted-foreground">Москва, Россия</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ваше сообщение..."
                rows={4}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Отправить сообщение
            </Button>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default ContactSection;
