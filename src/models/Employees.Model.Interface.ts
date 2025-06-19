export interface FuncionarioModelInterface {
  id: number;
  nome: string;
  dataNascimento: string;
  regimeTrabalhista: "CLT" | "PJ" | "Diarista";
  funcao: string;
  horario: string;
  salario: string;
  horasExtras: string[];
  foto: string; // URL da imagem
}