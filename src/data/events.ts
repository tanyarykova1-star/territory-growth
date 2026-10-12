import type { EventItem } from "../types";

export const events: EventItem[] = [
  {
    id: 1,
    slug: "art-vecher",
    title: "Арт-вечер: рисуем себя",
    description: "Творческая встреча, где каждый сможет выразить свои эмоции через живопись.",
    direction: "creativity",
    audiences: ["teens"],
    date: "12 сен",
    time: "16:00",
    price: "Бесплатно",
    ageLimit: "12-18 лет"
  },
  {
    id: 2,
    slug: "uverennaya-rech",
    title: "Мастер-класс «Уверенная речь»",
    description: "Учимся выступать перед аудиторией без страха и зажимов.",
    direction: "skills",
    audiences: ["teens", "adults"],
    date: "18 сен",
    time: "17:30",
    price: "Бесплатно",
    ageLimit: "14+ лет"
  },
  {
    id: 3,
    slug: "vstrecha-s-psihologom",
    title: "Встреча с психологом",
    description: "Беседа в безопасном пространстве о границах, эмоциях и ресурсе.",
    direction: "psychology",
    audiences: ["teens"],
    date: "24 сен",
    time: "18:00",
    price: "Бесплатно",
    ageLimit: "13-17 лет"
  }
];