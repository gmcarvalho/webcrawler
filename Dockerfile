FROM node:alpine
WORKDIR /app
COPY package-look.json /app
RUN npm install
COPY . /app
CMD node webcrawler.js
EXPOSE 8081