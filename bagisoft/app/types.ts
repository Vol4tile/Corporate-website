export type Feature = string;

export interface Plan {
  title: string;
  description: string;
  price: string;
  features: Feature[];
  id: number;
}