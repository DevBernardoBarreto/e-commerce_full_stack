# Nexo — E-commerce Full Stack

Plataforma de e-commerce em desenvolvimento, pensada para estudo de arquitetura, backend Java, frontend React e práticas de engenharia de software.

O projeto **ainda não está completo**. A Etapa 1 entrega a fundação: API com health check e Swagger, interface com layout e rotas placeholder, e MySQL via Docker.

## Sobre

Nexo é uma loja online com catálogo, carrinho, checkout, pedidos e painel administrativo. Autenticação JWT, regras de estoque e o restante do domínio entram nas próximas etapas.

## Funcionalidades

**Já disponível**

- `GET /api/health` — indica se a API está no ar
- Documentação OpenAPI/Swagger
- Interface responsiva com identidade visual e rotas da loja/admin (conteúdo placeholder)
- MySQL 8 no Docker Compose

**Check**

- Cadastro, login e JWT
- Catálogo, categorias, busca, filtros e paginação
- Carrinho, checkout, pedidos e estoque
- Avaliações, perfil e endereços
- Painel admin, dashboard e autorização por papel
- Testes das regras de negócio, Docker da API/front e CI/CD

## Tecnologias

| Camada | Stack |
| --- | --- |
| Backend | Java 21, Spring Boot 4.1.1, Maven, springdoc-openapi, JUnit |
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS 4, Lucide React |
| Dados | MySQL 8.4 (Docker) — a API ainda **não** persiste dados nesta etapa |

Spring Boot 4 é a linha atual no Spring Initializr (2026). O starter HTTP passou a se chamar `spring-boot-starter-webmvc` (antes `spring-boot-starter-web`).

## Arquitetura

```
Browser  →  Next.js (UI + services)  →  Spring Boot REST  →  MySQL
```

Nesta etapa o frontend só consulta `/api/health`. O banco sobe isolado para validar o Compose; o backend ainda não abre conexão JDBC.

Camadas futuras do Java: `controller` → `service` → `repository`, com DTOs na API e entidades só na persistência.

## Estrutura do projeto

```
e-commerce/
├── backend/                 # API Spring Boot
├── frontend/                # App Next.js
├── docker-compose.yml       # MySQL
├── .env.example
└── README.md
```

## Banco de dados

O Compose cria o schema `ecommerce` e o usuário `ecommerce`. Tabelas e JPA entram na Etapa 2. A API **não** usa o MySQL ainda.

## Autenticação

Não implementada. `JWT_SECRET` existe no `.env.example` para não ser esquecido; nenhum token é emitido nesta etapa.

## Segurança

- Segredos só em variáveis de ambiente (nunca no código)
- CORS restrito às origens em `CORS_ORIGINS` (padrão: `http://localhost:3000`)
- Sem senhas, JWT ou dados de usuário persistidos ainda

## Como executar

Pré-requisitos: Java 21+ (o `mvnw` exige `JAVA_HOME` apontando para a pasta que contém `bin\java.exe`), Node.js 20+, Docker.

Se o Maven disser que `JAVA_HOME` está incorreto, a variável provavelmente aponta para o zip extraído e não para o JDK interno (exemplo: `...\openjdk-22+36_windows-x64_bin\jdk-22`).

1. Copie as variáveis de ambiente:

```bash
cp .env.example .env
```

No Windows (PowerShell): `Copy-Item .env.example .env`

2. MySQL:

```bash
docker compose up -d
```

3. Backend:

```bash
cd backend
./mvnw test
./mvnw spring-boot:run
```

No Windows: `.\mvnw.cmd test` e `.\mvnw.cmd spring-boot:run`

4. Frontend (outro terminal):

```bash
cd frontend
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). A home tenta ler o health da API em `NEXT_PUBLIC_API_URL` (padrão `http://localhost:8080`).

## Variáveis de ambiente

Veja `.env.example`:

| Variável | Uso |
| --- | --- |
| `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USERNAME`, `DB_PASSWORD` | MySQL (Compose agora; API na Etapa 2) |
| `MYSQL_ROOT_PASSWORD` | Root do container MySQL |
| `JWT_SECRET` | Reservado para autenticação |
| `SERVER_PORT` | Porta da API (8080) |
| `CORS_ORIGINS` | Origens permitidas, separadas por vírgula |
| `NEXT_PUBLIC_API_URL` | Base URL da API no frontend |

## Docker

Nesta etapa o Compose sobe **somente o MySQL**. Imagens do backend e do frontend entram numa etapa posterior. Subir o stack completo com `docker compose up --build` ainda não inclui API e UI.

## Testes

```bash
cd backend
./mvnw test
```

Há um teste de contexto Spring e um teste do endpoint de health.

## Swagger

Com a API no ar:

- UI: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
- JSON: [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)


## Roadmap

1. Fundação (esta etapa)
2. Modelo JPA e MySQL na API
3. JWT, cadastro e login
4. Categorias e produtos
5. Perfil e endereços
6. Carrinho
7. Pedidos e estoque
8. Avaliações
9. Dashboard admin
10. Frontend da loja
11. Frontend admin
12. Docker completo, CI e README final

## Autor

Bernardo — estudante de Engenharia de Software. 4 semestre (24/08/2026)
