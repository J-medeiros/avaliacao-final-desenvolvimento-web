import type { ProductModelInterface } from '../../models/Product.Model.Interface';

export const initialProducts: ProductModelInterface[] = [
  {
    id: 1,
    name: 'Mouse Gamer RGB',
    description: 'Mouse com iluminação RGB e DPI ajustável.',
    price: 149.9,
    stock: 32,
    image: '/assets/mouse.jpg',
  },
  {
    id: 2,
    name: 'Teclado Mecânico',
    description: 'Teclado com switches azuis e iluminação.',
    price: 199.9,
    stock: 20,
    image: '/assets/teclado.jpg',
  },
  {
    id: 3,
    name: 'Headset Gamer',
    description: 'Headset com som surround e microfone ajustável.',
    price: 299.9,
    stock: 15,
    image: '/assets/headset.jpg',
  },
  {
    id: 4,
    name: 'Monitor 24"',
    description: 'Monitor Full HD de 24 polegadas.',
    price: 899.9,
    stock: 10,
    image: '/assets/monitor.jpg',
  },
  {
    id: 5,
    name: 'Webcam HD',
    description: 'Webcam com resolução HD e microfone embutido.',
    price: 199.9,
    stock: 25,
    image: '/assets/webcam.jpg',
  },
  {
    id: 6,
    name: 'Cadeira Gamer',
    description: 'Cadeira ergonômica para longas sessões de jogo.',
    price: 1299.9,
    stock: 5,
    image: '/assets/cadeira.jpg',
  },
];
