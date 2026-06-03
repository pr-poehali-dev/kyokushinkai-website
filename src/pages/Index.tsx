import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/5c2d7b0b-b5b5-40a9-864d-fbf8283382a9/files/bd028937-b69f-4788-b797-7cdd605da56a.jpg";
const PHONE = "+7‒918‒996‒69‒33";
const PHONE_CLEAN = "+79189966933";

const navItems = [
  { id: "about", label: "О нас" },
  { id: "directions", label: "Направления" },
  { id: "price", label: "Прайс" },
  { id: "faq", label: "FAQ" },
];

const directions = [
  {
    icon: "Baby",
    title: "Дети 3–6 лет",
    desc: "Игровые занятия, развитие координации, дисциплины и уверенности в себе",
    age: "от 3 лет",
  },
  {
    icon: "Sword",
    title: "Дети 7–14 лет",
    desc: "Базовые и продвинутые техники, спортивная подготовка, соревнования",
    age: "7–14 лет",
  },
  {
    icon: "Shield",
    title: "Взрослые",
    desc: "Физическая форма, самооборона, дух киокушинкай, тренировки любого уровня",
    age: "от 15 лет",
  },
];

const prices = [
  { title: "Пробное занятие", price: "Бесплатно", sub: "первый раз", highlight: true },
  { title: "Абонемент на месяц", price: "2 500 ₽", sub: "8 занятий" },
  { title: "Разовое занятие", price: "400 ₽", sub: "без абонемента" },
  { title: "Индивидуальный урок", price: "1 500 ₽", sub: "персональный тренер" },
];

const faqs = [
  {
    q: "С какого возраста можно записать ребёнка?",
    a: "Мы принимаем детей с 3 лет. Для малышей разработана специальная игровая программа с упором на развитие координации и базовых навыков.",
  },
  {
    q: "Нужна ли специальная форма для первого занятия?",
    a: "Нет. На пробное занятие приходите в удобной спортивной одежде. Кимоно понадобится после того, как вы решите заниматься регулярно.",
  },
  {
    q: "Как часто проходят тренировки?",
    a: "Занятия проходят 3–4 раза в неделю. Конкретное расписание уточняйте по телефону или при записи.",
  },
  {
    q: "Нужна ли предварительная физическая подготовка?",
    a: "Совсем нет! Мы принимаем всех — и детей, и взрослых — с нуля. Нагрузка подбирается индивидуально.",
  },
  {
    q: "Проводятся ли соревнования и выезды?",
    a: "Да, наши ученики регулярно участвуют в городских, региональных и всероссийских соревнованиях по киокушинкай карате.",
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-karate-black text-white font-roboto min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-karate-black/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-karate-red flex items-center justify-center font-oswald font-bold text-sm">К</div>
            <span className="font-oswald font-bold text-lg tracking-widest uppercase">Киокушинкай</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-roboto text-sm text-white/70 hover:text-karate-red transition-colors duration-200 tracking-wide uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            href={`tel:${PHONE_CLEAN}`}
            className="hidden md:flex items-center gap-2 text-karate-red font-oswald font-semibold hover:text-karate-red-light transition-colors"
          >
            <Icon name="Phone" size={16} />
            {PHONE}
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/80 hover:text-white"
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-karate-dark border-t border-white/10 px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
                className="text-left font-roboto text-base text-white/80 hover:text-karate-red uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <a href={`tel:${PHONE_CLEAN}`} className="text-karate-red font-oswald font-semibold text-lg flex items-center gap-2">
              <Icon name="Phone" size={18} />
              {PHONE}
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-karate-black via-karate-black/80 to-karate-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-karate-black via-transparent to-karate-black/40" />

        <div className="absolute top-0 right-1/3 w-px h-full bg-karate-red/30 transform -skew-x-12 hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-karate-red/20 border border-karate-red/40 px-4 py-2 mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-karate-red rounded-full animate-pulse" />
              <span className="font-roboto text-sm text-karate-red-light uppercase tracking-widest">Геленджик</span>
            </div>

            <h1 className="font-oswald font-bold text-5xl sm:text-6xl lg:text-7xl leading-none uppercase mb-6 animate-fade-up">
              Развивайте
              <span className="block text-karate-red">потенциал</span>
              <span className="block">своего ребёнка</span>
              <span className="block text-white/60 text-3xl sm:text-4xl mt-2">с киокушинкай карате</span>
            </h1>

            <p className="font-roboto text-white/70 text-lg mb-8 max-w-xl leading-relaxed">
              Занятия для детей от 3 лет и взрослых. Опытные тренеры, профессиональный зал,
              дружная атмосфера. Первое занятие — бесплатно!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE_CLEAN}`}
                className="group bg-karate-red hover:bg-karate-red-light text-white font-oswald font-semibold text-lg uppercase tracking-widest px-8 py-4 transition-all duration-300 flex items-center gap-3 justify-center"
              >
                <Icon name="CalendarCheck" size={20} />
                Записаться на пробное занятие
                <Icon name="ArrowRight" size={20} />
              </a>
              <a
                href={`tel:${PHONE_CLEAN}`}
                className="flex items-center gap-3 border border-white/30 hover:border-karate-red text-white hover:text-karate-red font-oswald font-medium text-lg px-8 py-4 transition-all duration-300 uppercase tracking-wide justify-center"
              >
                <Icon name="Phone" size={20} />
                {PHONE}
              </a>
            </div>

            <div className="flex items-center gap-8 mt-10">
              {[
                { num: "10+", label: "лет опыта" },
                { num: "200+", label: "учеников" },
                { num: "от 3", label: "лет — старт" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-oswald font-bold text-3xl text-karate-red">{s.num}</div>
                  <div className="font-roboto text-xs text-white/50 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <Icon name="ChevronDown" size={28} className="text-white/40" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-karate-red/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-karate-red" />
                <span className="font-roboto text-karate-red text-sm uppercase tracking-widest">О нас</span>
              </div>
              <h2 className="font-oswald font-bold text-4xl sm:text-5xl uppercase leading-tight mb-6">
                Сила духа рождается
                <span className="text-karate-red block">в зале</span>
              </h2>
              <p className="font-roboto text-white/70 text-base leading-relaxed mb-6">
                Наша школа киокушинкай карате в Геленджике — место, где дети и взрослые открывают
                в себе силу, дисциплину и уверенность. Киокушинкай — один из самых честных
                стилей карате, воспитывающий настоящий боевой дух.
              </p>
              <p className="font-roboto text-white/70 text-base leading-relaxed mb-8">
                Мы принимаем всех — от трёхлетних малышей до взрослых любого уровня подготовки.
                Наши тренеры — сертифицированные специалисты с многолетним опытом.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Trophy", text: "Чемпионы России" },
                  { icon: "Users", text: "Группы по возрасту" },
                  { icon: "MapPin", text: "Геленджик, центр" },
                  { icon: "Clock", text: "Гибкое расписание" },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-3 bg-karate-dark-2 px-4 py-3 border border-white/5">
                    <Icon name={f.icon} size={18} className="text-karate-red flex-shrink-0" />
                    <span className="font-roboto text-sm text-white/80">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden">
                <img
                  src={HERO_IMAGE}
                  alt="Тренировка по киокушинкай карате"
                  className="w-full h-80 lg:h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-karate-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-karate-red px-4 py-3 inline-block">
                    <p className="font-oswald font-semibold text-white uppercase tracking-wider">Первое занятие — бесплатно!</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-karate-red/30 hidden lg:block" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-karate-red/10 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section id="directions" className="py-24 bg-karate-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-karate-red/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-karate-red" />
              <span className="font-roboto text-karate-red text-sm uppercase tracking-widest">Направления</span>
              <div className="h-px w-12 bg-karate-red" />
            </div>
            <h2 className="font-oswald font-bold text-4xl sm:text-5xl uppercase">Группы для всех</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {directions.map((d) => (
              <div
                key={d.title}
                className="relative bg-karate-dark-2 border border-white/5 hover:border-karate-red/40 transition-all duration-300 group overflow-hidden p-8"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-karate-red/10 border border-karate-red/30 flex items-center justify-center mb-6 group-hover:bg-karate-red/20 transition-colors">
                    <Icon name={d.icon} size={24} className="text-karate-red" />
                  </div>
                  <div className="inline-block bg-karate-red/20 text-karate-red-light text-xs font-roboto uppercase tracking-widest px-3 py-1 mb-4">
                    {d.age}
                  </div>
                  <h3 className="font-oswald font-bold text-2xl uppercase mb-3">{d.title}</h3>
                  <p className="font-roboto text-white/60 text-sm leading-relaxed">{d.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-karate-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section id="price" className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-karate-red/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-karate-red" />
              <span className="font-roboto text-karate-red text-sm uppercase tracking-widest">Прайс</span>
              <div className="h-px w-12 bg-karate-red" />
            </div>
            <h2 className="font-oswald font-bold text-4xl sm:text-5xl uppercase">Стоимость занятий</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {prices.map((p) => (
              <div
                key={p.title}
                className={`relative p-8 text-center border transition-all duration-300 hover:-translate-y-1 ${
                  p.highlight
                    ? "bg-karate-red border-karate-red shadow-2xl shadow-karate-red/20"
                    : "bg-karate-dark-2 border-white/5 hover:border-karate-red/40"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-karate-gold text-karate-black font-oswald font-bold text-xs uppercase tracking-widest px-4 py-1 whitespace-nowrap">
                    Лучший старт
                  </div>
                )}
                <div className={`font-oswald font-bold text-3xl mb-2 ${p.highlight ? "text-white" : "text-karate-red"}`}>
                  {p.price}
                </div>
                <div className="font-roboto text-white/50 text-xs uppercase tracking-widest mb-3">{p.sub}</div>
                <div className={`font-oswald font-semibold text-lg uppercase ${p.highlight ? "text-white" : "text-white/90"}`}>
                  {p.title}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-karate-dark-2 border border-karate-red/20 inline-block px-8 py-6 max-w-lg w-full">
              <p className="font-roboto text-white/70 text-sm mb-4">
                Готовы начать? Запишитесь на бесплатное пробное занятие прямо сейчас!
              </p>
              <a
                href={`tel:${PHONE_CLEAN}`}
                className="inline-flex items-center gap-3 bg-karate-red hover:bg-karate-red-light text-white font-oswald font-semibold text-lg uppercase tracking-wider px-8 py-4 transition-all duration-300 w-full justify-center"
              >
                <Icon name="Phone" size={20} />
                Позвонить и записаться
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-karate-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-karate-red/50 to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-karate-red" />
              <span className="font-roboto text-karate-red text-sm uppercase tracking-widest">Вопросы</span>
              <div className="h-px w-12 bg-karate-red" />
            </div>
            <h2 className="font-oswald font-bold text-4xl sm:text-5xl uppercase">
              Часто задаваемые
              <span className="text-karate-red block">вопросы</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-white/5 hover:border-karate-red/30 transition-colors duration-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className="font-oswald font-semibold text-lg uppercase tracking-wide group-hover:text-karate-red transition-colors pr-4">
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 border border-white/20 flex items-center justify-center transition-all duration-300 ${openFaq === i ? "bg-karate-red border-karate-red rotate-45" : ""}`}>
                    <Icon name="Plus" size={16} className="text-white" />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 border-t border-white/5">
                    <p className="font-roboto text-white/70 text-base leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-karate-red" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
          backgroundSize: "16px 16px"
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-oswald font-bold text-4xl sm:text-5xl uppercase text-white mb-4 leading-tight">
            Начните свой путь сегодня!
          </h2>
          <p className="font-roboto text-white/80 text-lg mb-8">
            Первое пробное занятие — бесплатно. Звоните прямо сейчас!
          </p>
          <a
            href={`tel:${PHONE_CLEAN}`}
            className="inline-flex items-center gap-3 bg-white text-karate-red hover:bg-karate-black hover:text-white font-oswald font-bold text-2xl uppercase tracking-wider px-10 py-5 transition-all duration-300"
          >
            <Icon name="Phone" size={24} />
            {PHONE}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-karate-black border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-karate-red flex items-center justify-center font-oswald font-bold text-sm">К</div>
            <div>
              <div className="font-oswald font-bold text-sm uppercase tracking-widest">Киокушинкай карате</div>
              <div className="font-roboto text-white/40 text-xs">Геленджик</div>
            </div>
          </div>
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-roboto text-xs text-white/40 hover:text-karate-red transition-colors uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a href={`tel:${PHONE_CLEAN}`} className="flex items-center gap-2 text-karate-red font-oswald font-semibold hover:text-karate-red-light transition-colors">
            <Icon name="Phone" size={16} />
            {PHONE}
          </a>
        </div>
        <div className="text-center mt-6 font-roboto text-white/20 text-xs">
          © 2024 Школа киокушинкай карате · Геленджик
        </div>
      </footer>
    </div>
  );
}