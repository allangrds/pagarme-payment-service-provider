bootstrap: down kill up

down:
	@docker-compose down

kill:
	@docker-compose kill

up:
	@docker-compose up

up-silent:
	@docker-compose up -d

bash:
	@docker exec -it api /bin/ash

migrate:
	@docker exec -it api npx sequelize db:migrate

seed:
	@docker exec -it api npx sequelize-cli db:seed:all
