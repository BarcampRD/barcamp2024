
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY astro.config.mjs ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

RUN npm install --only=production

EXPOSE 4321

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
