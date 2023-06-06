FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 4002
CMD [ "node", "index.js" ]

#comandos docker
#docker build . -t "nombreImagen":"versionImagen" (construir image)  
#docker images (listar imagenes)
#docker rmi "image ID" (borrar imagen)
#docker network ls (listo las redes)
#docker network create proyectos-app (creo nueva red)
#docker run -p "puertoExterno":"puertoInterno" --name "nombreContainer" --network "redContainers" "imagenRequerida":"versionImagen" (despliegue container)
#docker ps -a(lista los containers)
#docker stop "container ID" (detiene container)
#docker start "container ID" (inicia container)
#docker rm "container ID" (elimina container)
#docker exec -it "idcontainer" /bin/bash (para ingresar a la consola del contenedor, para salir escribo exit)