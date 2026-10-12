export interface Service {
  id: string;
  title: string;
  category: 'children' | 'teens' | 'adults';
  categoryLabel: string;
  specialistId: string;
  specialistName: string;
  schedule: string;
  age: string;
  price?: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'financial-literacy-teens',
    title: 'Финансовая грамотность',
    category: 'teens',
    categoryLabel: 'Подросткам и молодёжи',
    specialistId: 'tatyana-bazhova',
    specialistName: 'Татьяна Бажова',
    schedule: 'Сб / Вс — по договоренности',
    age: '12–17 лет',
    description: 'Интерактивные занятия по карманным деньгам, накоплениям и финансовой безопасности.'
  },
  {
    id: 'art-therapy-children',
    title: 'Арт-терапевтическая группа',
    category: 'children',
    categoryLabel: 'Детям',
    specialistId: 'ekaterina-berezhnaya',
    specialistName: 'Екатерина Бережная',
    schedule: 'Ср 16:00',
    age: '7–11 лет',
    description: 'Развитие эмоционального интеллекта и снятие тревожности через творчество.'
  },
  {
    id: 'adult-reboot',
    title: 'Мастер-класс «Перезагрузка»',
    category: 'adults',
    categoryLabel: 'Взрослым',
    specialistId: 'elena-krutikh',
    specialistName: 'Елена Крутых',
    schedule: 'Суббота 11:00',
    age: '18+',
    description: 'Психологическая игра и арт-практики для восстановления ресурса и снятия стресса.'
  }
];