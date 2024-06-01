1- **a-¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe utilizar cada uno de ellos)**
Los **Componentes** son los **bloques de construcción fundamentales de una aplicación Angular**. Representan las **distintas partes de la interfaz de usuario** y están compuestos por **una plantilla HTML que define la estructura y el diseño visual, y una clase TypeScript** que define el comportamiento y la lógica de la vista. Los componentes se utilizan para **dividir la interfaz de usuario en partes más pequeñas y manejables**, lo que facilita **el desarrollo, el mantenimiento y la reutilización del código.**

Los **Servicios** son **clases que encapsulan funcionalidades específicas** y que pueden ser **compartidas entre varios componentes o partes** de la aplicación. Los servicios se utilizan **para centralizar la lógica de negocio**, la manipulación de datos, las operaciones de red, el acceso a servicios externos, entre otras cosas. Al **separar la lógica de negocio** de los componentes, los servicios **promueven la modularidad, la reutilización y la testabilidad** del código.

**b-¿Qué es la <<inyección de dependencias>>? ¿Para qué sirve el decorador @Injectable?**

La **"inyección de dependencias"** es un **patrón de diseño** en el que un objeto **recibe las dependencias que necesita de forma externa en lugar de crearlas internamente**. En el contexto de Angular, la inyección de dependencias se utiliza para **proporcionar a los componentes y otros objetos las instancias de los servicios u otros objetos** que necesitan para funcionar.

El decorador @Injectable se utiliza en Angular para marcar una clase como un servicio y permitir que Angular lo inyecte en otros componentes o servicios que lo necesiten. Cuando se añade el decorador @Injectable a una clase de servicio, Angular puede crear una instancia de esa clase y proporcionarla automáticamente a cualquier componente que la solicite mediante inyección de dependencias.

**c-Explica los siguientes conceptos de la programación reactiva que se usan en RxJS:**
• Observable.
• Subscription.
• Operators.
• Subject.
• Schedulers.

Un **Observable** es **una representación de una secuencia de valores** que pueden ser **emitidos de forma asíncrona en el tiempo**. Puede **emitir múltiples valores**, ya sean **sincrónicos o asíncronos**, y también puede **emitir errores o notificaciones** de completado. Los Observables son la **base de la programación reactiva en RxJS** y se utilizan para manejar flujos de datos asíncronos.

Una **Subscription** representa **la ejecución de un Observable, es decir, la conexión entre un Observable y un Observer**. Se utiliza para **controlar la ejecución y la suscripción a un Observable**, permitiendo **cancelar la suscripción en cualquier momento** para **liberar recursos y evitar memory leaks.**

Los **Operadores en RxJS** son **funciones que se utilizan para operar y transformar los datos emitidos por un Observable**. Permiten realizar una **variedad de operaciones como mapeo, filtrado, combinación, reducción, entre otras**, sobre los valores emitidos por el Observable. Los operadores **son encadenables**, lo que permite construir complejas transformaciones de datos en forma de **"tuberías" (pipes).**

Un **Subject** es tanto **un Observable como un Observer al mismo tiempo**. Puede emitir **valores como un Observable y también suscribirse para recibir valores emitidos** por otros Observables como un Observer. Los Subjects son útiles para **crear flujos de datos mutables y compartir datos entre múltiples suscriptores.**

Los **Schedulers en RxJS** son utilizados para **controlar la concurrencia y la programación de tareas asíncronas.** Permiten especificar en qué **contexto se ejecutarán las operaciones asíncronas**, como por ejemplo en el hilo principal (main thread), en un Web Worker, o en un pool de hilos.

**d-¿Cuál es la diferencia entre promesas y observables?**
La principal **diferencia entre promesas y observables** radica en su **naturaleza de emisión de valores.** Mientras que una **promesa solo puede emitir un valor (o un error) y luego se completa**, un Observable **puede emitir múltiples valores de forma asíncrona** en el tiempo. Además, las **promesas son valores únicos y no se pueden cancelar**, mientras que las suscripciones a Observables **se pueden cancelar para liberar recursos.**

**e-¿Cuál es la función de la tubería (pipe) async?**

La **tubería async en Angular** se utiliza **para manejar valores asíncronos que se obtienen a través de Observables.**Permite **suscribirse a un Observable en un componente de Angular** y manejar **los valores emitidos por el Observable de forma asincrónica en el template HTML** utilizando la **sintaxis del pipe async.** Esto **simplifica la gestión de valores asíncronos** en los componentes de Angular y mejora la **legibilidad del código.**
