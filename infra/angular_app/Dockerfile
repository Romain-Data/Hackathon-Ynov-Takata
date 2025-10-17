FROM node:18-alpine AS build
WORKDIR /app
COPY ../../code/takata_frontend/package*.json ./
RUN npm install
COPY ../../code/takata_frontend/ .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/* /usr/share/nginx/html
EXPOSE 4200
