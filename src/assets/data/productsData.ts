export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image?: string; // caminho local da imagem
}

export const initialProducts: Product[] = [
  {
    id: 1,
    name: "Mouse Gamer RGB",
    description: "Mouse com iluminação RGB e DPI ajustável.",
    price: 149.90,
    stock: 32,
    image: "/assets/mouse.jpg"
  },
  {
    id: 2,
    name: "Teclado Mecânico",
    description: "Teclado com switches azuis e iluminação.",
    price: 199.90,
    stock: 20,
    image: "/assets/teclado.jpg"
  }
];
