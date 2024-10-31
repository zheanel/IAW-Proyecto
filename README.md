# PAGINA WEB PERSONAL - IAW 2ºASIR

Esta pagina web contiene informacion sobre quien soy, los proyectos que he ido realizado con el tiempo y un formulario de contacto


## Tecnologias utilizadas

<p align="left"><img src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" height="64px" /><img src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" height="64px" /><img src="https://static.wikia.nocookie.net/programa/images/6/62/Jquery.png/revision/latest?cb=20161203132816&path-prefix=es" height="64px" /><img src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" height="64px" /></p>

## Entorno de desarrollo

Todo el codigo ha sido realizado en Visual Studio Code.

## Estructura del codigo

La estructura esta basada en SPA (Single Page Applicacion), por lo que todo el contenido visible esta en un index.php. Los proyectos son mostrados mediante un SQL QUERY.

El contenido de la pagina web (Inicio, Proyectos y Contacto) esta dividido en tres containers para manipularlo facilmente con jQuery.

El header contiene los enlaces de navegacion y una barra de busqueda, el cual, siempre se muestra en pantalla para evitar desplazarse hasta arriba de nuevo.

El footer siempre esta fijo y unicamente muestra el nombre del desarrollador, curso y año.

Ahora es posible añadir proyectos desde la pagina addProject.php.

## Visualizacion de la pagina web

Para empezar, deberemos de tener un servidor web con PHP y MySQL o MariaDB.
Crearemos una base de datos, puede ser cualquier nombre.
Para crear la estructura, podemos usar el archivo .sql incluido e importarlo desde phpMyAdmin o desde CLI con mysql nuestradb < www_sql_estructura.sql

La web puede ser visualizada en iaw-dev.afortea.eu sin necesidad de instalacion

¡¡IMPORTANTE!! Si subimos imagenes de un tamaño mayor a 8KB, deberemos de modificar el archivo php.ini para que los siguientes valores tengan esta forma:
upload_max_filesize = 4096M
memory_limit = 4096M

## Autores

Este proyecto ha sido realizado por:
- [@zheanel](https://www.github.com/zheanel) - Abel Lloria Fortea 2ºASIR
