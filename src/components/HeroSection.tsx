import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const images = [
  'https://cdn.poehali.dev/projects/48975f20-558b-4bbd-9559-e2b267082c68/files/53ec6145-9aa6-4f0c-b197-5f8fe97a71cf.jpg',
  'https://cdn.poehali.dev/projects/48975f20-558b-4bbd-9559-e2b267082c68/files/f4d29d42-9caf-40b1-86af-1ca9b365f95c.jpg',
  'https://cdn.poehali.dev/projects/48975f20-558b-4bbd-9559-e2b267082c68/files/194239ca-c799-4db3-b1ca-aef15e61d7fc.jpg',
];

const features = [
  { icon: 'MessageCircle', text: 'Отвечаю на любые вопросы' },
  { icon: 'Search', text: 'Нахожу сайты и видео' },
  { icon: 'Zap', text: 'Работаю мгновенно' },
  { icon: 'Brain', text: 'Учусь и запоминаю' },
];

const videos = [
  {
    title: 'Как я помогаю с задачами',
    desc: 'Посмотри, как легко решать любые вопросы с AI',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Поиск информации за секунды',
    desc: 'Нахожу нужные сайты и видео по твоему запросу',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Примеры реальных диалогов',
    desc: 'Как я справляюсь с самыми разными задачами',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          {images.map((src, index) => (
            <div
              key={src}
              className={cn(
                'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              )}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-8 md:px-16">
            <div className="flex max-w-2xl flex-col gap-10">
              {/* Logo */}
              <div
                className={cn(
                  'transform transition-all duration-1000 ease-out',
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                )}
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl border-2 border-white/30 shadow-2xl shadow-purple-500/30">
                  <img
                    src="https://cdn.poehali.dev/projects/48975f20-558b-4bbd-9559-e2b267082c68/files/e4737c6d-cf06-45ed-a6c7-f851f3b12676.jpg"
                    alt="AI Ассистент"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={cn(
                  'transform transition-all duration-1000 delay-300 ease-out',
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                )}
              >
                <div className="space-y-4">
                  <p className="text-sm font-medium uppercase tracking-widest text-purple-400">
                    Нейросеть-ассистент
                  </p>
                  <h1 className="text-4xl font-light text-white md:text-5xl lg:text-6xl">
                    Помогаю со всем.
                    <span className="block text-purple-300">Всегда.</span>
                  </h1>
                  <p className="text-lg font-light text-white/70 md:text-xl">
                    Задай вопрос — получи ответ, найди нужный сайт или видео за секунды
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {features.map((f) => (
                      <div
                        key={f.text}
                        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
                      >
                        <Icon name={f.icon} size={14} className="text-purple-300" />
                        <span className="text-sm text-white/80">{f.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button className="rounded-full bg-purple-600 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/30">
                      Попробовать бесплатно
                    </button>
                    <button className="flex items-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white/80 transition-all hover:border-white/60 hover:text-white">
                      <Icon name="Play" size={14} />
                      Смотреть демо
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'h-1 transition-all duration-300',
                currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
              )}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features section */}
      <section className="bg-black py-24">
        <div className="container mx-auto px-8 md:px-16">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-purple-400">
              Возможности
            </p>
            <h2 className="text-3xl font-light text-white md:text-4xl">
              Что умеет нейросеть
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: 'MessageSquare',
                title: 'Ответы на вопросы',
                desc: 'Спроси о чём угодно — от рецепта до сложной технической задачи',
              },
              {
                icon: 'Globe',
                title: 'Поиск в интернете',
                desc: 'Нахожу лучшие сайты и статьи по твоему запросу',
              },
              {
                icon: 'Youtube',
                title: 'Видео по теме',
                desc: 'Подбираю видеоуроки и демонстрации для наглядного объяснения',
              },
              {
                icon: 'Lightbulb',
                title: 'Идеи и советы',
                desc: 'Генерирую идеи, пишу тексты, помогаю с решениями',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-purple-500/40 hover:bg-white/10"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20">
                  <Icon name={item.icon} size={22} className="text-purple-400" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos section */}
      <section className="bg-zinc-950 py-24">
        <div className="container mx-auto px-8 md:px-16">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-purple-400">
              Демонстрация
            </p>
            <h2 className="text-3xl font-light text-white md:text-4xl">
              Смотри как это работает
            </h2>
            <p className="mt-4 text-white/60">
              Реальные примеры того, как нейросеть помогает каждый день
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {videos.map((video) => (
              <div key={video.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="relative aspect-video overflow-hidden bg-black">
                  <iframe
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-medium text-white">{video.title}</h3>
                  <p className="text-sm text-white/60">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-24">
        <div className="container mx-auto px-8 text-center md:px-16">
          <h2 className="mb-6 text-3xl font-light text-white md:text-5xl">
            Готов попробовать?
          </h2>
          <p className="mb-10 text-lg text-white/60">
            Начни общаться с нейросетью прямо сейчас — бесплатно
          </p>
          <button className="rounded-full bg-purple-600 px-12 py-4 text-base font-medium text-white transition-all hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-500/30">
            Начать бесплатно
          </button>
        </div>
      </section>
    </>
  );
}
