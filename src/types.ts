export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  stars: number;
  location: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
