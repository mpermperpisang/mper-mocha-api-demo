# Gunakan Node.js versi LTS
FROM node:22-alpine

# Set workdir di dalam container
WORKDIR /mocha-test-project

# Salin file package dan install dependencies
COPY package*.json ./
RUN npm ci

# Salin semua file project ke container
COPY . .

# Perintah default saat container dijalankan
CMD ["npx", "mocha"]
