# Projeto Teste => MyAlbums

Este projeto foi desenvolvido para fins de teste.

Abaixo estão as instruções para configurar e rodar a aplicação localmente.

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- Node.js (recomendado versão LTS)
- npm ou yarn
- Git
- Visual Studio Code
- MYSQL

---

## 📦 Clonando o repositório

Você pode clonar o projeto utilizando HTTPS ou SSH.

### HTTPS

```bash
git clone https://github.com/martinscjhon/myAlbums---backend.git
```

### SSH

```bash
git clone git@github.com:martinscjhon/myAlbums---backend.git
```

### 📂 Acessando o projeto

Após clonar o repositório, entre na pasta do projeto e abra no VS Code:

```bash
cd myAlbums---backend
code .
```

### 📥 Instalando as dependências

Instale as dependências do projeto utilizando o gerenciador de pacotes de sua preferência:

Usando npm =>
npm install

Usando yarn =>
yarn

### ▶️ Executando o projeto

Após a instalação das dependências, execute o projeto com o comando:

Usando npm =>
npm run dev

Usando yarn =>
yarn dev

### 👉 Observações iniciais

No arquivo .env, certifique-se de colocar seu usuário e senha do MYSQL. Após essa inclusão, habilite o campo TYPEORM_SYNCHRONIZE como true para sincronizar as entidades do projeto.

### 🌐 Acessando a aplicação

A aplicação estará disponível na porta: 3000

Acesse: http://localhost:3000/health e verá a API online.

### 🛠️ Tecnologias/Ferramentas utilizadas

- Node.js
- npm / Yarn
- TypeORM
- JWT
- Express
- Crypto
- Typescript
- Nodemon
