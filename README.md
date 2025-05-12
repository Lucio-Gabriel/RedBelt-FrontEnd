# Front-end — Sistema de Alarmes de Segurança

Este repositório contém a interface web do Sistema de Alarmes de Segurança, desenvolvida com React, Redux, TailwindCSS e integrando com a API desenvolvida em Laravel.

## Stack utilizada

**Front-end:** React, Redux Toolkit, Axios, React Router DOM, TailwindCSS, Vite

**Back-end:** PHP, Laravel, MySQL, PHPUnit

## Funcionalidades

- Criação, edição e deleção de alarmes
- Interface responsiva e moderna com Tailwind
- Integração total com a API Laravel

## Instalação e Execução

Clone este repositório:

```bash
  git clone https://github.com/SeuUsuario/RedBelt-FrontEnd.git
```

Instale as dependências:

```bash
  npm install
```

Configure a URL da API:
No arquivo .env (ou crie um):

```bash
  VITE_API_URL=http://localhost:8000/api
```

Inicie o projeto:

```bash
  npm run dev
```

Acesse o sistema:

```bash
  http://localhost:5173

```

## Integração com Back-end

O front-end espera a seguinte estrutura da API (exposta em http://localhost:8000/api):

- GET /alarmes — listagem

- POST /alarmes — criação

- PUT /alarmes/{id} — atualização

- DELETE /alarmes/{id} — deleção
