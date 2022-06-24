## 💻 Iniciando

### Requisitos

- Você precisa instalar o [Node.js](https://nodejs.org/en/download/) para executar este projeto.

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/zMatheusPro/desafio-fullstack-backend.git && cd desafio-fullstack-backend
```

**Siga os passos abaixo**

```bash
# Instalando as dependencias
$ npm install
```

Acesse o arquivo `.env.exemple` renomie-o para `.env` e coloque as credenciais relativas ao seu banco de dados

**Após configurar o banco de dados, execute o comando abaixo**

```bash
# Criar o banco de dados
$ npm run db:create

# Migrar tabelas
$ npm run db:migrate
```
Após seguir os passos acima você deve ter um banco de dados criado e as tabelas migradas.
Agora só iniciar o projeto com o comando abaixo

```bash
npm run start
```

---

Feito por Matheus Ferreira 👋 [Visite meu LinkedIn](https://www.linkedin.com/in/matheus-ferreira-25a58b208/)
