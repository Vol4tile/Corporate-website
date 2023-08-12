import { Plan } from './types';
export const plans: Plan[] = [
  {
    title: 'Freelancer',
    description: "Müşteriler için en iyi işinizi sunmak için gerekli olanlar.",
    price: '19',
    features: ['5 ürün', '1,000 aboneye kadar', 'Temel analitikler', '48 saatlik destek cevap süresi', 'SEO Optimizasyonu'],
    id: 0,
  },
  {
    title: 'Startup ',
    price: '49',
    description: "Hızla büyüyen işiniz için ölçeklenebilen bir plan.",
    features: ['25 ürün', '10,000 aboneye kadar', 'Gelişmiş analitikler', '24 saatlik destek cevap süresi', 'Pazarlama otomasyonları'],
    id: 1,
  },
  {
    title: 'Enterprise',
    price: '99',
    description: "Şirketiniz için özel destek ve altyapı.",
    features: ['Sınırsız ürün', 'Sınırsız abone', 'Gelişmiş analitikler', '1 saatlik özel destek cevap süresi', 'Pazarlama otomasyonları'],
    id: 2,
  },
];