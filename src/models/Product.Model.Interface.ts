export interface ProductModelInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image?: string; // caminho local da imagem
}
