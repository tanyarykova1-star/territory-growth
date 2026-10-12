const COMPANY_ID = '2428086';
const BEARER_TOKEN = 'r2F4D929S393k76N35od';

const HEADERS = {
  'Authorization': `Bearer ${BEARER_TOKEN}`,
  'Accept': 'application/vnd.yclients.v2+json',
  'Content-Type': 'application/json'
};

// 1. Получить список услуг
export async function getServices() {
  const res = await fetch(`https://api.yclients.com/api/v1/book_services/${COMPANY_ID}`, { headers: HEADERS });
  const data = await res.json();
  return data.data; // Массив услуг
}

// 2. Получить список сотрудников
export async function getStaff() {
  const res = await fetch(`https://api.yclients.com/api/v1/book_staff/${COMPANY_ID}`, { headers: HEADERS });
  const data = await res.json();
  return data.data; // Массив сотрудников
}

// 3. Получить свободные даты/сеансы (расписание)
export async function getDates(staffId = 0) {
  const res = await fetch(`https://api.yclients.com/api/v1/book_dates/${COMPANY_ID}?staff_id=${staffId}`, { headers: HEADERS });
  const data = await res.json();
  return data.data; // Свободные дни
}