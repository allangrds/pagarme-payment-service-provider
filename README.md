# Pagar.me - PSP(Payment Service Provider)
This repository implements the test purpose created by the fintech Pagar.me. To see more details, open the file "DESAFIO.md".

---

## Table of content

- [Requeriments](#requeriments)
- [Installation](#installation)
- [Endpoints](#endpoints)
- [Tecnologies](#tecnologies)

## Requeriments
- Docker v19.03.5;
- Docker Compose v1.21.2.

## Installation
Execute the folling code on your terminal:
```bash
cp .env.dex.example .env
make bootstrap
```

That command will destroy a previous group of containers and recreated it. After that, will launch again.

If you want to launch with silence mode, use `bootstrap-silent`.

To migrate and seed your database, run:
```bash
make migrate
make seed
```

Done! The project is already running on `http://localhost:<.env.PORT>`
