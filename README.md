# mper-mocha-demo

### Install
- NodeJS v22.15.0
- NPM v10.9.2
- Docker Desktop (for MacOS only) or Docker Server

### How to Setup
Without Makefile
- `npm ci`

With Makefile
- `make ci`

### How to Run
Without Docker
- `npx mocha --grep "03 - Find pets by status = pending"` or
- `npm test` or 

With Docker
- `docker build -t mper-mocha-test .` then
- `docker run --rm mper-mocha-test`

With Makefile + Docker
- `make test IMAGE_NAME=<your-custom-image>`

Open Allure Reporter (without Docker)
- `allure serve allure-results`
