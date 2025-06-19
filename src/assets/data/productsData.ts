import type { ProductModelInterface } from '../../models/Product.Model.Interface';

export const initialProducts: ProductModelInterface[] = [
  {
    id: 1,
    name: 'Hambúrguer Artesanal',
    description: 'Pão brioche, carne 180g, queijo cheddar, alface, tomate e molho especial.',
    price: 29.9,
    stock: 20,
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Pizza Margherita',
    description: 'Molho de tomate, mussarela, manjericão fresco e azeite de oliva.',
    price: 49.9,
    stock: 10,
    image: 'https://img.freepik.com/fotos-gratis/deliciosa-pizza-margherita_23-2148579976.jpg?w=740&t=st=1718731704~exp=1718732304~hmac=93bbaaa47a8db76d8dc773b331d4dc84ac9a9a5d7b7c7d13820486d1f4444318',
  },
  {
    id: 3,
    name: 'Porção de Batata Frita',
    description: 'Batatas crocantes servidas com ketchup e maionese.',
    price: 19.9,
    stock: 25,
    image: 'https://img.freepik.com/fotos-gratis/batatas-fritas-em-um-copo-de-papel-com-ketchup_114579-2490.jpg?w=740&t=st=1718731767~exp=1718732367~hmac=78ec8e33d7461ed210e47de39bfbf086eeb9e382b86ae9dfd781afdb282be46e',
  },
  {
    id: 4,
    name: 'Suco de Laranja Natural',
    description: 'Feito com laranjas frescas e sem adição de açúcar.',
    price: 9.9,
    stock: 30,
    image: 'https://img.freepik.com/fotos-gratis/copo-de-suco-de-laranja-com-um-copo-de-madeira-e-laranjas_114579-74452.jpg?w=740&t=st=1718731823~exp=1718732423~hmac=ae647a0d2bdb7091e103dc01c2b2d8efabe01f2ae02a16d68be3e312b18211d9',
  },
  {
    id: 5,
    name: 'Refrigerante Lata',
    description: 'Coca-Cola, Guaraná, Fanta – 350ml.',
    price: 6.5,
    stock: 50,
    image: 'https://img.freepik.com/fotos-gratis/lata-de-refrigerante-gelada-sobre-mesa-de-madeira_114579-22255.jpg?w=740&t=st=1718731885~exp=1718732485~hmac=34ac1083de5df47e452c8bbf24c22331308a4f2274c1c209f69c6e770bc1b7ab',
  },
  {
    id: 6,
    name: 'Sobremesa Brownie com Sorvete',
    description: 'Brownie de chocolate servido com sorvete de creme e calda quente.',
    price: 17.9,
    stock: 12,
    image: 'https://img.freepik.com/fotos-gratis/brownie-de-chocolate-com-sorvete-e-calda-quente_114579-2930.jpg?w=740&t=st=1718731938~exp=1718732538~hmac=aaf6b2516ee371b6b7cb1c2db6cb880b6e14c482478e7f16d7a9f586e4712ee2',
  },
];
