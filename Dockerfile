FROM node:16 AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

FROM nginx:1.23

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
