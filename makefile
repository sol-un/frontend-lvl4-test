start:
	npm start

build:
	npm ci
	rm -rf frontend/build
	npm run build