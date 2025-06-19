.PHONY: test clean

# Default image name (can override via CLI)
IMAGE_NAME ?= mper-mocha-test

ci:
	npm ci

# Build + run test in one step
test:
	docker build -t $(IMAGE_NAME) . && docker run --rm $(IMAGE_NAME)

# Optional: delete image
clean:
	docker rmi $(IMAGE_NAME) || true
