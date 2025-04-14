import catImg from '../assets/images/catM.png';
import dogImg from '../assets/images/dogJack.png';
import hamsterImg from '../assets/images/hamsterM.png';
import dogLabrador from '../assets/images/dogLabrador.png';
import dogImg2 from '../assets/images/dogs.png';
import catImg2 from '../assets/images/cat.png';

const pets = [
    {
        id: 1,
        name: "Мурка",
        type: "Кіт",
        age: "3 роки",
        gender: "Самка",
        healthStatus: "Здорова",
        description: "Добра киця, яка любить бавитись і муркотіти біля людей.",
        contact: "shelter@petlink.ua",
        shelterId: 986,
        images: [catImg],
    },
    {
        id: 2,
        name: "Джек",
        type: "Собака",
        age: "2 роки",
        gender: "Самець",
        healthStatus: "Потребує лікування",
        description: "Активний песик, який шукає надійного друга.",
        contact: "dogshelter@petlink.ua",
        shelterId: 808,
        images: [dogImg],
    },
    {
        id: 3,
        name: "Пух",
        type: "Хом'як",
        age: "6 місяців",
        gender: "Самець",
        healthStatus: "Здоровий",
        description: "Маленький хом'як, ідеальний для сім’ї з дітьми.",
        contact: "hamsterhouse@petlink.ua",
        shelterId: 395,
        images: [hamsterImg],
    },
    {
        id: 4,
        name: "Лаки",
        type: "Собака",
        age: "4 роки",
        gender: "Самець",
        healthStatus: "Здоровий",
        description: "Доброзичливий лабрадор, обожнює прогулянки та дітей.",
        contact: "labradorrescue@petlink.ua",
        shelterId: 615,
        images: [dogLabrador],
    },
    {
        id: 5,
        name: "Сніжинка",
        type: "Кішка",
        age: "1 рік",
        gender: "Самка",
        healthStatus: "Здорова",
        description: "Мила білосніжна киця з блакитними очима, дуже ніжна.",
        contact: "catlover@petlink.ua",
        shelterId: 408,
        images: [catImg2],
    },
    {
        id: 6,
        name: "Барон і Бірчик",
        type: "Собака",
        age: "5 років",
        gender: "Самець",
        healthStatus: "Потребує лікування",
        description: "Дорослі собаки з великим серцем, врятовані з вулиці.",
        contact: "baronhome@petlink.ua",
        shelterId: 369,
        images: [dogImg2],
    },
];

export default pets;
