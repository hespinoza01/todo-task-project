# TODO Task Project

La applicación permite llevar una ligera gestión de sus proyectos a través de una visualización estilo Kanban de las tareas a desarrollar. Puede agregar los proyectos que sean necesarios y cada proyecto contará con las gestión individual de sus tareas y los distintos estados de las mismas (Pendiente, En Proceso y Finalizado).

El servidor fue construído haciendo uso de **Express.js**, así como **Joi.js** para las validaciones de los campos y **Sequelize.js** para facilitar el intercambio de información detro de la BD.

Antes de ejecutar el servidor, se necesitarán configurar las variables de entorno necesarias dentro de un archivo **.env**, a continuación se muestran la lista de las variables disponibles:

```env
# server port listener
PORT=3080

# database
DB_NAME='todo_task_project'
DB_HOST='localhost'
DB_USERNAME='root'
DB_PASSWORD='root'

# db dialect type: mysql, postgres, sqlite, mssql
DB_DIALECT='mysql'

# secret key to encode password users
PASSWORD_SECRET='secretkey'

# secret key to encode access token
JWT_SECRET='secretkey'
```

Para el desarrollo del cliente se utilizó **create-react-app**. Se utiliza **React Context API** para el manejo del estado global, **react-router-dom** para la navegación entre las vistas, **react-icons** como paquetería de íconos, **react-beautiful-dnd** para la gestión del facilitar la implementatción de los elementos Draggables y el **Axios** para las solicitudes http.

Antes de ejecutar el cliente, se necesitará configurar la URL de nuestro servidor. Esta configuracion se puede realizar dentro del archivo: `./client/src/utils/constans.util.js` y modifcar la propiedad:

```javascript
export const BASE_URL_SERVER = 'http://127.0.0.1:3080'
```
