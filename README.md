# MiniReto2Repo
 
# ¿Qué es este proyecto? 

Este proyecto permite que el usuario realice una lista de videojuegos, incluyendo una imagen, nombre, descripción, plataforma y fecha de lanzamiento de cada juego.

Puede ser utilizada para llevar un registro de cosas que hayas jugado o para listar tus juegos favoritos. 

El proyecto permite visualizar la lista, borrar, actualizar y añadir juegos.

# ¿Cómo iniciar la página?

Para iniciar el proyecto es necesario asegurarse que se tiene la base de datos “videojuegos” con la tabla “juegos” y un usuario llamado “Samuel” con contraseña “12345”.

Para el funcionamiento correcto es necesario instalar Node.js e instalar  las siguientes herramientas mediante los comandos: 

express mysql nodemon ( npm i express mysql nodemon)
react-router-dom (npm i react-router-dom)
axios (npm i axios)
cors  (npm i cors)

Tras esto hay que entrar a las carpetas  backend y client individualmente, en cada una ejecutar el comando: npm start, primero en el backend y luego en el client, si todo funciona correctamente la aplicación se ejecutará en el navegador lista para ser utilizada.

# ¿Cómo se usa? 

La página principal muestra la lista de juegos y sus características, cada juego además de eso está acompañado por el botón de actualizar y eliminar, si se presiona eliminar se borrará por completo ese juego y se recargara la pagina, si se presiona actualizar se mostrará una nueva pagina donde podras ingresar los nuevos datos para el juego, (para las imágenes es importante ingresar el link del a imagen) tras presionar actualizar en la nueva página volverás a la página principal donde el registro ya ha sido actualizado.

En la parte inferior en la página principal está el botón para añadir un nuevo juego, este botón te lleva a una nueva página donde debes ingresar los datos para el nuevo juego, al terminar presiona añadir y  volverás a la página principal, podrás encontrar el juegorecientemente añadido ahí.

