FROM node:16    

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8004

CMD [ "npm", "start"]

# comandos docker
# crear imagen --> docker build -t database .
# run (correr) imagen ---> docker run -p 8004:8004 database