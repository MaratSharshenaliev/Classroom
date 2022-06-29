
//create table date
const date =  [
    {
        id: new Date(),
        data: [
            {id:uniqid(),task : "Лабараторная работа №7", date: Date.now()},
            {id:uniqid(), task : "Лабараторная работа №6", date: Date.now()},
            {id:uniqid(), task : "Лабараторная работа №5", date: Date.now()},
            {id:uniqid(), task : "Лабараторная работа №4", date: Date.now()},
            {id:uniqid(), task : "Лабараторная работа №4", date: Date.now()},
            {id:uniqid(), task : "Лабараторная работа №4", date: Date.now()},
            {id:uniqid(), task : "Лабараторная работа №4", date: Date.now()}
        ],
        page:"Лента"
    },

    {
        id: new Date(),
        data: [
            {id:new Date(),task : "Нурчик", date: Date.now()},
            {id:new Date(), task : "Задача №1", value: {date: Date.now(),}},
            {id:new Date(), task : "Задача №2", value: {date: Date.now()}},
            {id:new Date(), task : "Задача №3", value: {date: Date.now()}},
            {id:new Date(), task : "Задача №4", value: {date: Date.now()}},
            {id:new Date(), task : "Задача №5", value: {date: Date.now()}},
            {id:new Date(), task : "Задача №6", value: {date: Date.now()}},
        ],
        page:"Задачи"
    },
    {
        id: new Date(),
        data: [
            {id:new Date(),task : "Шаршеналиев М", role: "user" ,date: Date.now()},
            {id:new Date(), task : "Нурислам Алмазбеков", role: 'user', date: Date.now()},
            {id:new Date(), task : "Атай Ашырсултанов", role: 'user',date: Date.now()},
            {id:new Date(), task : "Нурдөөлөт Базарбаев",role: 'user', date: Date.now()},
            {id:new Date(), task : "Мираида Бактыгулова", role: 'user',date: Date.now()},
            {id:new Date(), task : "Алхов Богдан",role: 'user', date: Date.now()},
            {id:new Date(), task : "Элтимур Иличбеков",role: 'admin', date: Date.now()}
        ],
        teachers : [
            {id:new Date(),task : "Иван Георгиевич", date: Date.now()}
        ],
        page:"Пользователи"
    },
]




export  {date};






/// Links Одна таблица без связки
/// первычный ключ header внешний ключ date