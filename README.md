# 💼 Portfólio – Igor Barcelo
Este é o repositório do meu portfólio profissional, desenvolvido com uma stack moderna full-stack:

- **Frontend:** Next.js, Tailwind CSS, TypeScript, ESLint
- **Backend:** NestJS, Prisma ORM, TypeScript
- **Banco de Dados:** PostgreSQL
- **Deploy:** Frontend no Netlify e backend no Render

🔗 Acesse: [portib.netlify.app](https://portib.netlify.app)

---
## 📸 Demonstração

![Demo](https://github.com/IgorBarcelo/portfolio/blob/main/public/demo.png?raw=true)

## ✨ Funcionalidades

 Apresentação profissional com animação de fundo estilo "Matrix"
 Listagem dinâmica de projetos e tecnologias com destaque
 Integração com API RESTful para gerenciamento de dados
 Currículo interativo com habilidades técnicas
 Design responsivo e acessível com Tailwind CSS

---

## 🧱 Tecnologias Utilizadas

### Frontend
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)

### Backend
- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)

---

## 📁 Estrutura do Projeto

```
portfolio/
├── backend/         # API NestJS com Prisma
├── frontend/        # Aplicação Next.js com Tailwind CSS
├── core/            # Tipagens e utilitários compartilhados
├── .prettierrc      # Configuração do Prettier
└── package.json     # Dependências e scripts principais
```

---

## 🚀 Como Executar Localmente

### Pré-requisito

- Node.js (v18+)
- npm ou yarm
- PostgeSQL

### 1. Clonar o Repositório

```bash
git clone https://github.com/IgorBarcelo/portfolio.git
cd portfolio
```

### 2. Configurar o Backend

```bash
cd backend
cp .env.sample .env
# Atualize as variáveis de ambiente conforme necessário
npm install
npx prisma generate
npx prisma migrate dev
npm run start:dev
```

### 3. Configurar o Frontend

```bash
cd ../frontend
cp .env.sample .env
# Atualize as variáveis de ambiente conforme necessário
npm install
npm run dev
```

---

## 🌐 Deploy

- **Fronted:** Hospedado no [Netlify](https://www.netlify.com/)
- **Backed:** Hospedado no [Render](https://render.com/)

---

## Créditos
Desenvolvido por [Igor Barcelo](https://www.linkedin.com/in/igor-barcelo-631010216/)
