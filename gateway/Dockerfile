FROM node:16    

WORKDIR /app

COPY package*.json ./

RUN npm install

# copio todo lo que tengo en mi pc al contenedor
COPY . .

EXPOSE 8000

CMD [ "npm", "start"]

#1.construir la imagen
#docker build -t gateway .
#2. correr la imagen
# docker run --network=starwars --name=gateway -p 8000:8000 gateway



