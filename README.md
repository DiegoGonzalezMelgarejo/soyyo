<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
npm install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Docker del proyecto

En la raiz del proyecto.
```
docker build  .
```
luego

```
docker image ls
```
en el archivo docker-compose.yml la propiedad images copiar el IMAGE ID de la imagen generada
```
docker-compose up -d
```
ir a http://localhost:3000/api
```

7. Ejecutar la aplicación en dev:
```
en local sin docker 
npm run start 
```



## Stack usado
* Nest
