export type DirectionId = "education" | "creativity" | "skills" | "psychology" | "career";

export type Audience = "teens" | "adults" | "teachers";

export interface Direction {
  id: DirectionId;
  title: string;
  description: string;
  color: string;
  bgLight: string;
}

export interface EventItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  direction: DirectionId;
  audiences: Audience[];
  date: string;
  time: string;
  price: number | "Бесплатно";
  ageLimit: string;
  specialistName?: string;
  bookingUrl?: string;
}

export interface Specialist {
  id: number;
  slug: string;
  name: string;
  role: string;
  directions: DirectionId[];
  photo: string;
  bio: string;
}