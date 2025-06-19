import type { VendaModelInterface } from '../../models/Sales.Model.Interface';

const salesFiction: VendaModelInterface[] = [
  {
    id: 1,
    produto: 'Mouse Gamer',
    quantidade: 5,
    preco: 149.9,
    data: '2025-06-01',
  },
  {
    id: 2,
    produto: 'Teclado Mecânico',
    quantidade: 3,
    preco: 199.9,
    data: '2025-06-03',
  },
  {
    id: 3,
    produto: 'Monitor 24"',
    quantidade: 2,
    preco: 899.9,
    data: '2025-06-05',
  },
  {
    id: 4,
    produto: 'Headset Gamer',
    quantidade: 4,
    preco: 299.9,
    data: '2025-06-10',
  },
];

export default salesFiction;
