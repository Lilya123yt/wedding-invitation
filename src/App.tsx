import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart, MapPin } from "lucide-react";

import couplePhoto from "@assets/IMG_20260514_222554_634_1778779778242.jpg";
import dresscodeImage from "@assets/photo_2026-05-14_20-55-43_1778781377203.jpg";
import venuePhoto from "@assets/photo_2026-05-14_21-03-00_1778781951152.jpg";

const queryClient = new QueryClient();

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl md:text-5xl font-serif text-center mb-8 text-primary">
      {children}
    </h2>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden py-20 px-4">
      {/* Background calligraphic text */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-20%',
            width: '150%',
            height: '150%',
            transform: 'rotate(-12deg)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {Array.from({ length: 12 }).map((_, row) => (
            <div
              key={row}
              className="font-['Great_Vibes'] text-primary whitespace-nowrap"
              style={{
                fontSize: '3.8rem',
                opacity: 0.12,
                marginLeft: row % 2 === 0 ? '0px' : '-80px',
              }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i}>I Love You&nbsp;&nbsp;&nbsp;</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="z-10 flex flex-col items-center w-full max-w-[500px]">
        <FadeIn delay={0.2}>
          <p className="text-sm md:text-base tracking-[0.2em] uppercase text-muted-foreground mb-6 text-center">
            10 августа, 2026
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="font-['Great_Vibes'] text-center mb-12 text-primary leading-none" style={{ fontSize: '80px' }}>
            Тагир <br />
            &<br />
            Дилара
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="relative rotate-[-3deg] p-4 bg-white shadow-xl max-w-[300px] w-full">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={couplePhoto} 
                alt="Тагир & Дилара" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="py-20 px-6 max-w-[500px] mx-auto text-center">
      <FadeIn>
        <SectionHeading>Дорогие наши друзья и родные!</SectionHeading>
        <p className="text-lg leading-relaxed text-foreground/80 mt-6">
          Это официальное приглашение на нашу свадьбу! А получили вы его потому, что мы очень хотим видеть вас в этот день рядом с нами!
        </p>
      </FadeIn>
    </section>
  );
}

function Calendar() {
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  
  // Aug 1, 2026 is Saturday (index 5)
  const offset = 5; 
  const totalDays = 31;
  
  const blanks = Array.from({ length: offset }).map((_, i) => <div key={`blank-${i}`} />);
  const dates = Array.from({ length: totalDays }).map((_, i) => {
    const day = i + 1;
    const isWeddingDay = day === 10;
    
    return (
      <div 
        key={`day-${day}`} 
        className={`flex items-center justify-center aspect-square text-lg relative ${isWeddingDay ? 'font-bold text-white' : 'text-foreground'}`}
      >
        {isWeddingDay && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="w-10 h-10 fill-primary text-primary" />
          </div>
        )}
        <span className="relative z-10">{day}</span>
      </div>
    );
  });

  return (
    <section className="py-20 px-6 max-w-[400px] mx-auto text-center">
      <FadeIn>
        <h3 className="text-3xl font-serif mb-2 text-primary">Август 2026</h3>
        <div className="grid grid-cols-7 gap-2 mb-8 mt-6">
          {days.map(day => (
            <div key={day} className="text-sm font-medium text-muted-foreground py-2">
              {day}
            </div>
          ))}
          {blanks}
          {dates}
        </div>
      </FadeIn>
    </section>
  );
}

function Venue() {
  return (
    <section className="py-20 px-6 max-w-[500px] mx-auto text-center">
      <FadeIn>
        <SectionHeading>Место проведения</SectionHeading>
        <div className="mb-8 text-lg leading-relaxed">
          <p className="font-medium text-xl mb-2">Дворец бракосочетания №2</p>
          <p className="text-foreground/80">Санкт-Петербург,<br />ул. Фурштатская 52</p>
        </div>
        <div className="flex justify-center my-8">
          <div className="relative rotate-[2deg] p-4 bg-white shadow-xl max-w-[300px] w-full">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={venuePhoto}
                alt="Место проведения"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <a 
          href="https://www.google.com/maps/search/?api=1&query=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3+%D1%83%D0%BB+%D0%A4%D1%83%D1%80%D1%88%D1%82%D0%B0%D1%82%D1%81%D0%BA%D0%B0%D1%8F+52" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg hover:bg-primary/90 transition-colors font-medium"
        >
          <MapPin size={20} />
          Как добраться
        </a>
      </FadeIn>
    </section>
  );
}

function Timeline() {
  const events = [
    { time: '12:00', title: 'Сбор гостей' },
    { time: '12:30', title: 'Церемония регистрации' },
    { time: '13:30', title: 'Банкет в Особняке Путилова' },
    { time: '23:00', title: 'Завершение вечера' },
  ];

  return (
    <section className="py-20 px-6 max-w-[500px] mx-auto">
      <FadeIn>
        <SectionHeading>Тайминг</SectionHeading>
        <div className="mt-10 relative">
          {events.map((event, index) => (
            <div key={index} className="flex mb-8 relative z-10">
              <div className="w-24 text-right pr-6 pt-1 font-serif text-2xl text-primary shrink-0">
                {event.time}
              </div>
              <div className="relative pl-6 pb-8 border-l border-primary/30 flex-1">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2" />
                <h4 className="text-xl pt-1 text-foreground/90">{event.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

function DressCode() {
  return (
    <section className="py-20 px-6 max-w-[500px] mx-auto text-center">
      <FadeIn>
        <SectionHeading>Дресс-код</SectionHeading>
        <p className="text-lg leading-relaxed text-foreground/80 mb-8">
          Мы очень ждём и готовимся к нашему незабываемому дню! Поддержите нас Вашими улыбками и объятиями, а также красивыми нарядами в палитре мероприятия
        </p>
        <div className="w-full rounded-2xl overflow-hidden shadow-lg">
          <img 
            src={dresscodeImage} 
            alt="Дресс-код палитра" 
            className="w-full h-auto object-cover"
          />
        </div>
      </FadeIn>
    </section>
  );
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target: August 10, 2026 12:00 UTC+3
    const targetDate = new Date('2026-08-10T12:00:00+03:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-zinc-900 text-white text-center">
      <div className="absolute inset-0 bg-[url('@assets/photo_2026-05-14_18-57-11_1778774341211.jpg')] bg-cover bg-center opacity-20 blur-sm grayscale" />
      <div className="relative z-10 max-w-[500px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-[#fdfbf7]">До свадьбы осталось</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold font-serif mb-2">{timeLeft.days}</span>
              <span className="text-xs uppercase tracking-widest text-zinc-400">Дней</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold font-serif mb-2">{timeLeft.hours}</span>
              <span className="text-xs uppercase tracking-widest text-zinc-400">Часов</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold font-serif mb-2">{timeLeft.minutes}</span>
              <span className="text-xs uppercase tracking-widest text-zinc-400">Минут</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold font-serif mb-2">{timeLeft.seconds}</span>
              <span className="text-xs uppercase tracking-widest text-zinc-400">Секунд</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function TelegramRSVP() {
  return (
    <section className="py-20 px-6 max-w-[500px] mx-auto text-center">
      <FadeIn>
        <SectionHeading>Анкета гостя</SectionHeading>
        <p className="text-foreground/80 mb-10">
          Пожалуйста, подтвердите своё присутствие на мероприятии до: 15.07.2026
        </p>
        <a
          href="https://t.me/YOUR_CHANNEL"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
          </svg>
          Подтвердить участие
        </a>
      </FadeIn>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 text-center px-6">
      <p className="font-serif text-2xl text-primary">До скорой встречи!</p>
      <p className="font-serif text-2xl text-primary mt-2">С любовью, Тагир и Дилара ❤️</p>
    </footer>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
          <Hero />
          <Welcome />
          <Calendar />
          <Venue />
          <Timeline />
          <DressCode />
          <Countdown />
          <TelegramRSVP />
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
