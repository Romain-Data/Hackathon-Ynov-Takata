FROM node:18-alpine AS build
WORKDIR /app
COPY code/takata_frontend/package*.json ./
RUN npm install

COPY code/takata_frontend/ .
RUN npm run build --prod

EXPOSE 4200
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
