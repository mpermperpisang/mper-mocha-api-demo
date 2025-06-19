# mper-mocha-demo

### Install
- NodeJS v22.15.0
- NPM v10.9.2
- Docker Desktop (for MacOS only) or Docker Server

### How to Setup
- `npm ci`

### How to Run
Without Docker
- `npx mocha` or
- `npm test`

With Docker
- `docker build -t mper-mocha-test .` then
- `docker run --rm mper-mocha-test`

With Makefile + Docker
- `make test IMAGE_NAME=<your-custom-image>`
