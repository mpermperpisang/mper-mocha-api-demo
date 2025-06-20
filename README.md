# mper-mocha-demo

### Install
- NodeJS v22.15.0
- NPM v10.9.2
- Docker Desktop (for MacOS only) or Docker Server

### Framework + Library + Reporter
- Mocha
- Chai
- Allure

### How to Setup
Without Makefile
- `npm ci`

With Makefile
- `make ci`

### How to Run
Without Docker
- `npx mocha --grep '04 - As a User, I want to find "pending" pet successfully'` (without pretest) or
- `npm test -- --grep '01 - As a User, I failed to add new pet that "available" and "sleeping"'` or
- `npm test`

With Docker
- `docker build -t mper-mocha-test .` then
- `docker run --rm mper-mocha-test`

With Makefile + Docker
- `make test IMAGE_NAME=<your-custom-image>`

Open Allure Reporter (without Docker)
- `allure serve allure-results`
