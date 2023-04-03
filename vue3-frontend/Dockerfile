FROM node:18-alpine

RUN npm install -g http-server

WORKDIR /home/user/Documents/blog_project/vue3-frontend/

COPY package*.json ../

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]