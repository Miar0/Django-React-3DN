import newsFirst from '../assets/images/news-home-first.png';
import newsSecond from '../assets/images/news-home-second.png';
import newsThird from '../assets/images/news-home-third.png';

const news = [
    {
        id: 1,
        image: newsFirst,
        title: "Порятунок песика з траси",
        description: "Історія як волонтери врятували песика просто з середини швидкісної дороги...",
        date: "2025-04-11",
        content:
            "Ця історія почалась з дзвінка випадкового водія, який помітив маленького песика на узбіччі траси поблизу Львова. " +
            "Команда волонтерів FindTail швидко відреагувала, зібрала необхідне спорядження та вирушила на місце події.\n\n" +
            "Песик був наляканий, але не поранений. Його вдалося швидко заспокоїти, обстежити та забрати з небезпечної території. " +
            "Волонтери назвали його Лаки (від англ. 'lucky'). Наразі він перебуває в одному з перевірених притулків, де отримує належну опіку.\n\n" +
            "Цей випадок став ще одним нагадуванням про важливість нашої спільної відповідальності за тварин."
    },
    {
        id: 2,
        image:newsSecond,
        title: "10 нових тваринок знайшли домівку",
        description: "Завдяки оновленій платформі FindTail 10 тваринок були всиновлені протягом останніх днів...",
        date: "2025-04-09",
        content:
            "Новини, що надихають! Всього за один тиждень через платформу FindTail було успішно передано в нові родини 10 тваринок: " +
            "серед них 6 песиків, 3 котики та навіть 1 морська свинка.\n\n" +
            "Ми раді, що кожна з цих історій мала щасливий фінал. Всі нові власники пройшли перевірку, отримали детальну інструкцію " +
            "по догляду та зворотній зв’язок з притулками.\n\n" +
            "Такі результати мотивують нас розвивати платформу ще активніше 💙"
    },
    {
        id: 3,
        image: newsThird,
        title: "Перший офіційний партнер серед ветклінік!",
        description: "FindTail підписали партнерство з ветклінікою 'Добро' — це відкриває нові можливості для тварин...",
        date: "2025-04-07",
        content:
            "Раді повідомити: FindTail офіційно співпрацює з ветеринарною клінікою 'Добро' у Львові! Це означає, що всі тварини, " +
            "зареєстровані на платформі, зможуть проходити базові медичні огляди безкоштовно.\n\n" +
            "Клініка також надасть підтримку у вакцинації, стерилізації та лікуванні тварин, які потрапляють на платформу без належного догляду.\n\n" +
            "Це партнерство — величезний крок до покращення умов для хвостиків 💚"
    }
];

export default news;
