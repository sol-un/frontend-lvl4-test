start:
	npx start-server

build:
	npm ci
	rm -rf frontend/build
	npm run build