Aquí tenemos los tests solicitados por Abstracta en el desafío de Automation UI con WebdriverIO.

Dentro del directorio "Demoblaze_WebdriverIO_Tests" tenemos dos carpetas:

En scripts tenemos los tests propiamente dichos (parte 1 y 2).
En pages tenemos los page object model y un archivo llamado helpers donde puse funciones adicionales que necesitaba para no declararlas dentro de cada test.

Para correr uno y otro test debemos modificar el archivo wdio.conf en su línea número 24 (dentro de specs) y cambiar el número de parte (1 o 2).

El archivo "Datos de productos" es un ejemplo del outcome que obtenemos al finalizar la primera parte de manera exitosa