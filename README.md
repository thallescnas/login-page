# Login Page

Aplicação de login e registro com React 19, Vite 8 e Tailwind CSS 4.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4** (com `@tailwindcss/vite` plugin)
- **Framer Motion** — animações de transição entre login/registro e loading
- **Axios** — requisições HTTP

## Desenvolvimento

```bash
npm install
npm run dev
```

O servidor backend precisa estar rodando em `http://localhost:3000` e expor os seguintes endpoints:

| Método | Rota | Body |
|--------|------|------|
| POST | `/auth/login` | `{ identifier, password }` |
| POST | `/auth/register` | `{ fullName, username, email, password }` |

```bash
npm run build    # build para produção
npm run preview  # preview do build
npm run lint     # ESLint
```

## Funcionalidades

- Formulário de login (usuário/email + senha)
- Formulário de registro (nome, usuário, email, senha)
- Alternância animada entre login e registro
- Dark mode com persistência em `localStorage`
- Tela de loading inicial
- Suporte a dark mode via Tailwind
