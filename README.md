# 🌐 Projeto - Módulo de Usuários com Acessibilidade

Este é um site desenvolvido com **React + Vite**, que implementa um **módulo de usuários** com funcionalidades de acessibilidade, como:

- 📋 Listagem de usuários
- ➕ Cadastro de novos usuários
- 🎨 Troca de tema (claro/escuro) com persistência via `localStorage`
- 🌐 Troca de idioma (português/inglês) com persistência via `cookies`
- 🚀 Arquitetura **MVC**
- ⚙️ Uso de `useMemo` e `useCallback` para otimização de performance

---

## 📁 Estrutura de Pastas

```
src/
├── components/         # Componentes reutilizáveis (menu de acessibilidade)
├── context/            # Contextos globais (tema, idioma)
├── hooks/              # Hooks customizados (tradução)
├── i18n/               # Arquivos de tradução
├── routes/             # Definição de rotas
├── services/           # Lógica de dados (sem backend, dados mockados)
├── views/              # Telas principais (lista, formulário)
├── App.tsx             # Componente raiz com os providers
└── main.tsx            # Entrada da aplicação
```
---

## 🧪 Tecnologias Utilizadas

- React 18
- Vite
- TypeScript
- `localStorage` para tema
- `document.cookie` para idioma

---

## ▶️ Como executar

```bash
# Instale as dependências
npm install

# Instale o npm router-dom
npm install react-router-dom

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em: [http://localhost:5173](http://localhost:5173)

---

## 🗂️ Funcionalidades

- ✅ Tema claro/escuro com persistência
- ✅ Idioma PT/EN com persistência
- ✅ Listagem de Dados 
- ✅ Cadastro de usuários/Produtos
- ✅ Layout responsivo e menu fixo de acessibilidade
- ✅ Gerar relatorio PDF
- ✅ Graficos 

---

## 📦 Observações

- Dados dos usuários são mockados e armazenados localmente (sem backend).
- Estrutura de pastas e componentes organizada em **MVC**.

---

## 📚 Autor

João Vitor — Projeto para disciplina de Desenvolvimento Web ✨
