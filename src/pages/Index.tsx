import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/5c2d7b0b-b5b5-40a9-864d-fbf8283382a9/files/3f824fa5-ead0-430a-ba43-dfd10baf5916.jpg";
const FIGHT_IMAGE = "https://cdn.poehali.dev/projects/5c2d7b0b-b5b5-40a9-864d-fbf8283382a9/files/94db5cf0-d864-49b3-9fee-363e1f1cc6f3.jpg";
const PHONE = "+7‒918‒996‒69‒33";
const PHONE_CLEAN = "+79189966933";

const navItems = [
  { id: "about", label: "О нас" },
  { id: "directions", label: "Направления" },
  { id: "price", label: "Прайс" },
  { id: "questions", label: "Вопросы" },
];

const directions = [
  {
    icon: "Baby",
    title: "Дети 3–6 лет",
    desc: "Игровые занятия, развитие координации, дисциплины и уверенности в себе",
    age: "от 3 лет",
    num: "01",
  },
  {
    icon: "Zap",
    title: "Дети 7–14 лет",
    desc: "Базовые и продвинутые техники, спортивная подготовка, соревнования",
    age: "7–14 лет",
    num: "02",
  },
  {
    icon: "Shield",
    title: "Взрослые",
    desc: "Физическая форма, самооборона, дух киокушинкай, тренировки любого уровня",
    age: "от 15 лет",
    num: "03",
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
    <div className="bg-white text-gray-900 font-roboto min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-karate-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-karate-red px-3 py-1">
              <span className="font-oswald font-black text-white text-sm tracking-widest uppercase">KYOKUSHIN</span>
            </div>
            <span className="font-oswald font-bold text-gray-900 text-sm tracking-widest uppercase hidden sm:block">Геленджик</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-oswald font-medium text-sm text-gray-600 hover:text-karate-red hover:bg-red-50 px-4 py-2 transition-all duration-200 tracking-widest uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            href={`tel:${PHONE_CLEAN}`}
            className="hidden md:flex items-center gap-2 bg-karate-red text-white font-oswald font-bold px-4 py-2 hover:bg-karate-red-dark transition-colors uppercase tracking-wide text-sm"
          >
            <Icon name="Phone" size={14} />
            {PHONE}
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
                className="text-left font-oswald font-medium text-base text-gray-700 hover:text-karate-red py-2 uppercase tracking-widest"
              >
                {item.label}
              </button>
            ))}
            <a href={`tel:${PHONE_CLEAN}`} className="mt-2 bg-karate-red text-white font-oswald font-bold px-4 py-3 flex items-center gap-2 uppercase tracking-wide">
              <Icon name="Phone" size={16} />
              {PHONE}
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden pt-16">
        {/* Фото на всю правую половину */}
        <div className="absolute inset-0">
          <div
            className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent lg:hidden" />
        </div>

        {/* Красная вертикальная полоса — акцент */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-karate-red hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pb-20 pt-10 w-full">
          <div className="max-w-xl">
            {/* Метка города */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-karate-red" />
              <span className="font-roboto text-karate-red text-xs uppercase tracking-[0.3em] font-medium">Школа карате · Геленджик</span>
            </div>

            {/* Главный заголовок */}
            <div className="mb-2">
              <span className="font-oswald font-black text-7xl sm:text-8xl lg:text-9xl leading-none uppercase text-gray-900 block">
                РАЗВИ-
              </span>
              <span className="font-oswald font-black text-7xl sm:text-8xl lg:text-9xl leading-none uppercase block" style={{ WebkitTextStroke: "3px #E8000E", color: "transparent" }}>
                ВАЙТЕ
              </span>
            </div>

            <h2 className="font-oswald font-bold text-xl sm:text-2xl uppercase tracking-widest text-gray-600 mb-2">
              потенциал своего ребёнка
            </h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-0.5 w-12 bg-karate-red" />
              <span className="font-oswald text-lg text-karate-red uppercase tracking-widest font-semibold">с киокушинкай карате</span>
            </div>

            <p className="font-roboto text-gray-600 text-base leading-relaxed mb-10 max-w-md">
              Ваш ребёнок станет увереннее, крепче и дисциплинированнее.
              Принимаем детей от 3 лет — без опыта и специальной подготовки.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={`tel:${PHONE_CLEAN}`}
                className="bg-karate-red hover:bg-karate-red-dark text-white font-oswald font-bold text-base uppercase tracking-widest px-8 py-4 transition-all duration-300 flex items-center gap-3 justify-center shadow-lg shadow-karate-red/30"
              >
                <Icon name="CalendarCheck" size={18} />
                Записаться на пробное занятие
              </a>
            </div>

            {/* Цифры */}
            <div className="flex items-center gap-0 border-l-2 border-karate-red">
              {[
                { num: "10+", label: "лет опыта" },
                { num: "200+", label: "детей занималось" },
                { num: "от 3", label: "лет принимаем" },
              ].map((s, i) => (
                <div key={s.label} className={`px-6 py-2 ${i < 2 ? "border-r border-gray-200" : ""}`}>
                  <div className="font-oswald font-black text-2xl text-karate-red leading-none">{s.num}</div>
                  <div className="font-roboto text-xs text-gray-400 uppercase tracking-widest mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Скролл-индикатор */}
        <div className="absolute bottom-6 right-8 z-10 flex items-center gap-2 animate-bounce">
          <span className="font-roboto text-xs text-gray-400 uppercase tracking-widest hidden sm:block">Скролл</span>
          <Icon name="ChevronDown" size={20} className="text-gray-400" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative">
        {/* Диагональный переход */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 40%)" }} />
        <div className="bg-karate-red py-24 relative overflow-hidden">
          {/* Фоновый паттерн */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 60px)"
          }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="font-oswald font-medium text-white/60 text-sm uppercase tracking-[0.3em] block mb-4">О нас</span>
                <h2 className="font-oswald font-black text-5xl sm:text-6xl uppercase text-white leading-tight mb-8">
                  Растём<br />
                  <span className="text-white/30">сильными</span><br />
                  вместе
                </h2>
                <p className="font-roboto text-white/80 text-base leading-relaxed mb-6">
                  Мы знаем, как найти подход к каждому ребёнку. Тренировки проходят в тёплой,
                  дружеской атмосфере — здесь не кричат и не пугают, а вдохновляют и поддерживают.
                </p>
                <p className="font-roboto text-white/80 text-base leading-relaxed">
                  Киокушинкай воспитывает не только физическую силу, но и характер: упорство,
                  уважение к старшим, уверенность в себе. Именно это родители замечают уже после
                  первых месяцев занятий.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Heart", title: "Безопасная среда", desc: "Занятия под строгим контролем тренера, без травм и агрессии" },
                  { icon: "Star", title: "Первый пояс за 3 мес.", desc: "Быстрый прогресс мотивирует детей заниматься с удовольствием" },
                  { icon: "MapPin", title: "Центр Геленджика", desc: "Удобное расположение — легко добраться после школы" },
                  { icon: "Clock", title: "Гибкий график", desc: "Утренние и вечерние группы, подберём удобное время" },
                ].map((f) => (
                  <div key={f.title} className="bg-white/10 border border-white/20 p-5 hover:bg-white/20 transition-colors">
                    <Icon name={f.icon} size={20} className="text-white mb-3" />
                    <div className="font-oswald font-bold text-white text-sm uppercase tracking-wide mb-1">{f.title}</div>
                    <div className="font-roboto text-white/60 text-xs leading-relaxed">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0 100%)" }} />
      </section>

      {/* BENEFITS FOR KIDS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="font-oswald font-medium text-karate-red text-sm uppercase tracking-[0.3em] block mb-3">Почему карате?</span>
            <h2 className="font-oswald font-black text-4xl sm:text-5xl uppercase text-gray-900">
              Что даёт карате <span className="text-karate-red">вашему ребёнку</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Brain", title: "Концентрация и учёба", desc: "Дети с карате лучше сосредотачиваются и успевают в школе" },
              { icon: "Shield", title: "Самозащита", desc: "Ребёнок умеет постоять за себя — спокойно и без паники" },
              { icon: "Smile", title: "Уверенность в себе", desc: "Каждый пояс и победа укрепляют самооценку" },
              { icon: "Activity", title: "Физическое здоровье", desc: "Гибкость, выносливость, правильная осанка с детства" },
              { icon: "Users", title: "Новые друзья", desc: "В группе формируется настоящая командная дружба" },
              { icon: "Award", title: "Дисциплина и цели", desc: "Дети учатся ставить цели и добиваться их шаг за шагом" },
            ].map((b) => (
              <div key={b.title} className="flex gap-4 p-5 border border-gray-100 hover:border-karate-red/30 hover:bg-red-50/50 transition-all duration-300 group">
                <div className="w-10 h-10 bg-karate-red/10 group-hover:bg-karate-red flex items-center justify-center flex-shrink-0 transition-colors">
                  <Icon name={b.icon} size={18} className="text-karate-red group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-oswald font-bold text-base uppercase text-gray-900 mb-1">{b.title}</div>
                  <div className="font-roboto text-gray-500 text-sm leading-relaxed">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section id="directions" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="font-oswald font-medium text-karate-red text-sm uppercase tracking-[0.3em] block mb-3">Направления</span>
            <h2 className="font-oswald font-black text-5xl sm:text-6xl uppercase text-gray-900">
              Группы<br />
              <span className="text-gray-200">для всех</span>
            </h2>
          </div>

          <div className="space-y-0">
            {directions.map((d, i) => (
              <div
                key={d.title}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 py-8 border-b border-gray-100 hover:bg-red-50 px-4 -mx-4 transition-all duration-300 cursor-default"
              >
                <span className="font-oswald font-black text-5xl text-gray-100 group-hover:text-karate-red/20 transition-colors w-16 flex-shrink-0">
                  {d.num}
                </span>
                <div className="w-12 h-12 bg-karate-red/10 group-hover:bg-karate-red flex items-center justify-center transition-colors flex-shrink-0">
                  <Icon name={d.icon} size={20} className="text-karate-red group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="font-oswald font-bold text-2xl uppercase text-gray-900 mb-1">{d.title}</div>
                  <div className="font-roboto text-gray-500 text-sm">{d.desc}</div>
                </div>
                <div className="bg-karate-red text-white font-oswald font-bold text-xs uppercase tracking-widest px-4 py-2 flex-shrink-0">
                  {d.age}
                </div>
              </div>
            ))}
          </div>

          {/* Фото рядом с направлениями */}
          <div className="mt-14 relative overflow-hidden h-64 sm:h-80">
            <img src={FIGHT_IMAGE} alt="Спарринг" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-karate-red px-8 py-4 text-center">
                <p className="font-oswald font-black text-white text-2xl uppercase tracking-widest">Первое занятие — бесплатно!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section id="price" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="font-oswald font-medium text-karate-red text-sm uppercase tracking-[0.3em] block mb-3">Прайс</span>
            <h2 className="font-oswald font-black text-5xl sm:text-6xl uppercase text-white">
              Стоимость<br />
              <span className="text-white/20">занятий</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {prices.map((p) => (
              <div
                key={p.title}
                className={`p-8 transition-all duration-300 group ${
                  p.highlight ? "bg-karate-red" : "bg-gray-900 hover:bg-gray-800"
                }`}
              >
                {p.highlight && (
                  <div className="inline-block bg-white text-karate-red font-oswald font-black text-xs uppercase tracking-widest px-3 py-1 mb-4">
                    Лучший старт
                  </div>
                )}
                <div className={`font-oswald font-black text-4xl mb-1 ${p.highlight ? "text-white" : "text-karate-red"}`}>
                  {p.price}
                </div>
                <div className={`font-roboto text-xs uppercase tracking-widest mb-4 ${p.highlight ? "text-white/60" : "text-gray-500"}`}>
                  {p.sub}
                </div>
                <div className={`font-oswald font-bold text-lg uppercase border-t pt-4 ${p.highlight ? "text-white border-white/20" : "text-white border-white/10"}`}>
                  {p.title}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-gray-900 p-6">
            <p className="font-roboto text-gray-400 text-sm">
              Есть вопросы по стоимости? Позвоните нам — всё объясним!
            </p>
            <a
              href={`tel:${PHONE_CLEAN}`}
              className="flex-shrink-0 flex items-center gap-2 bg-karate-red hover:bg-karate-red-light text-white font-oswald font-bold uppercase tracking-widest px-6 py-3 transition-colors"
            >
              <Icon name="Phone" size={16} />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section id="questions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <span className="font-oswald font-medium text-karate-red text-sm uppercase tracking-[0.3em] block mb-3">Вопросы</span>
              <h2 className="font-oswald font-black text-5xl uppercase text-gray-900 leading-tight mb-6">
                Часто<br />задаваемые<br />
                <span className="text-gray-200">вопросы</span>
              </h2>
              <p className="font-roboto text-gray-500 text-sm leading-relaxed mb-8">
                Не нашли ответ? Позвоните нам — ответим на любой вопрос!
              </p>
              <a
                href={`tel:${PHONE_CLEAN}`}
                className="inline-flex items-center gap-2 border-2 border-karate-red text-karate-red font-oswald font-bold uppercase tracking-widest px-6 py-3 hover:bg-karate-red hover:text-white transition-all duration-300"
              >
                <Icon name="Phone" size={16} />
                Позвонить
              </a>
            </div>

            <div className="lg:col-span-3 space-y-0">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-100">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="font-oswald font-semibold text-base uppercase tracking-wide text-gray-800 group-hover:text-karate-red transition-colors pr-4">
                      {faq.q}
                    </span>
                    <div className={`flex-shrink-0 w-7 h-7 border-2 flex items-center justify-center transition-all duration-300 ${
                      openFaq === i
                        ? "bg-karate-red border-karate-red rotate-45"
                        : "border-gray-300 group-hover:border-karate-red"
                    }`}>
                      <Icon name="Plus" size={14} className={openFaq === i ? "text-white" : "text-gray-400"} />
                    </div>
                  </button>
                  {openFaq === i && (
                    <div className="pb-5">
                      <p className="font-roboto text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gray-950/80" />
        <div className="relative z-10 py-24 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-karate-red px-3 py-1 mb-6">
            <span className="font-oswald font-bold text-white text-xs uppercase tracking-[0.3em]">Геленджик</span>
          </div>
          <h2 className="font-oswald font-black text-5xl sm:text-6xl uppercase text-white mb-4 leading-tight">
            Начните свой путь<br />
            <span style={{ WebkitTextStroke: "2px #E8000E", color: "transparent" }}>сегодня!</span>
          </h2>
          <p className="font-roboto text-white/60 text-lg mb-10">
            Первое пробное занятие — бесплатно. Звоните прямо сейчас!
          </p>
          <a
            href={`tel:${PHONE_CLEAN}`}
            className="inline-flex items-center gap-3 bg-karate-red hover:bg-karate-red-light text-white font-oswald font-black text-2xl uppercase tracking-wider px-12 py-5 transition-all duration-300 shadow-2xl shadow-karate-red/40"
          >
            <Icon name="Phone" size={24} />
            {PHONE}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-karate-red px-3 py-1">
              <span className="font-oswald font-black text-white text-xs tracking-widest uppercase">KYOKUSHIN</span>
            </div>
            <span className="font-roboto text-white/40 text-xs uppercase tracking-widest">Геленджик</span>
          </div>
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-roboto text-xs text-white/30 hover:text-karate-red transition-colors uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a href={`tel:${PHONE_CLEAN}`} className="flex items-center gap-2 text-karate-red font-oswald font-bold hover:text-karate-red-light transition-colors text-sm">
            <Icon name="Phone" size={14} />
            {PHONE}
          </a>
        </div>
        <div className="text-center mt-6 font-roboto text-white/10 text-xs">
          © 2024 Школа киокушинкай карате · Геленджик
        </div>
      </footer>
    </div>
  );
}