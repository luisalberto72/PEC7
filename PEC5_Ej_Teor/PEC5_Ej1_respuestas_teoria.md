1- **¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?**

Las principales diferencias entre **formularios dirigidos por template y formularios reactivos en Angular** se encuentran en la forma en que se construyen, manejan y validan los datos del formulario:

#Formularios dirigidos por template:

**Definición en HTML:** Los formularios se definen directamente en **la plantilla HTML del componente** utilizando **directivas como ngModel, ngForm, etc.**
**Sincronización automática:** La **sincronización entre el modelo de datos y la vista** se maneja automáticamente a través de directivas como ngModel, que **enlazan los campos del formulario con propiedades del modelo del componente**.
**Validación de datos:** La validación de datos se define **directamente en la plantilla HTML** utilizando **directivas como required, minlength, maxlength, etc.**
**Facilidad de uso para formularios simples:** Son más adecuados **para formularios simples y de menor complejidad**, donde la lógica de validación y manejo de datos es menos compleja.

#Formularios reactivos:

**Definición en TypeScript:** Los **formularios se definen en el código TypeScript del componente** utilizando clases y objetos proporcionados por el **módulo @angular/forms.**
**Control total sobre el formulario:** Los desarrolladores tienen **un control total sobre la creación, validación y manipulación de datos del formulario** mediante programación.
**Programación declarativa:** Los formularios reactivos **utilizan un enfoque más declarativo, donde se define la estructura del formulario y las validaciones utilizando objetos y funciones en lugar de directivas** en la plantilla HTML.
**Reactividad y rendimiento:** Permiten una **mayor reactividad y rendimiento**, especialmente **en formularios complejos o dinámicos**, ya que el estado del formulario se maneja de manera más eficiente en el código TypeScript.
**Reutilización de lógica de validación:** Las **reglas de validación se definen en el código TypeScript**, lo que facilita **la reutilización de la lógica de validación** en diferentes partes de la aplicación.

En resumen, **los formularios dirigidos por template son más adecuados para formularios simples y de menor complejidad**, mientras que los **formularios reactivos proporcionan un control total y son más adecuados para formularios complejos o dinámicos** donde se requiere una mayor reactividad y rendimiento. La elección entre ambos depende de los requisitos y la complejidad del formulario en la aplicación.

2- **¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?**

Las **directivas ngModel y ngModelChange son parte del módulo FormsModule en Angular** y se utilizan **para facilitar el enlace bidireccional de datos entre los elementos del formulario HTML y las propiedades del modelo** en el componente TypeScript. Aquí está una descripción detallada de cada una:

**ngModel:**

ngModel es **una directiva que establece el enlace bidireccional entre un elemento de entrada del formulario HTML** (como <input>, <select> o <textarea>) y **una propiedad del modelo** en el componente TypeScript.
**Permite la sincronización automática de los datos entre la vista y el modelo.** Cualquier cambio realizado en el elemento de entrada del formulario se reflejará automáticamente en la propiedad del modelo y viceversa.
**Para usar ngModel**, primero debes **importar el módulo FormsModule** en nuestro módulo Angular. Luego, puedes **agregar la directiva ngModel a cualquier elemento de entrada del formulario y vincularlo a una propiedad del componente** utilizando la sintaxis de enlace de datos de Angular.

Ejemplo:
<input type="text" [(ngModel)]="nombre">
En este ejemplo, nombre es una propiedad del componente que se vincula al valor del <input>.

**ngModelChange:**

**ngModelChange es un evento que se dispara** cuando el valor **vinculado a través de ngModel cambia**.
**Permite detectar y reaccionar** a los cambios en **el valor de la propiedad del modelo vinculada a través de ngModel**.
Puedes agregar **el evento ngModelChange a un elemento de entrada del formulario y llamar a una función del componente** cuando se produce un cambio en el valor del elemento.

Ejemplo:
<input type="text" [(ngModel)]="nombre" (ngModelChange)="onNombreChange($event)">
En este ejemplo, onNombreChange() es una función del componente que se llama cuando cambia el valor del <input>. El nuevo valor se pasa como argumento ($event) a la función.


3-**¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?**
En los **formularios dirigidos por templates en Angular**, los estados **son una representación de las condiciones** en las que se encuentran los elementos del formulario. Estos **estados son proporcionados por Angular** y **sirven para realizar validaciones, controlar la visualización de mensajes de error y gestionar la interacción del usuario** con los elementos del formulario. Aquí están los estados principales y su significado:

Prístino (pristine):

Un elemento del formulario está en **estado prístino cuando no ha sido interactuado por el usuario**.
Se utiliza para **indicar que el elemento del formulario no ha sido tocado por el usuario**, por lo que no se ha modificado su valor ni se han realizado acciones sobre él.

Tocado (touched):

Un **elemento del formulario está en estado tocado** cuando el **usuario ha interactuado con él**, por ejemplo, haciendo clic en un campo de entrada y luego desenfocándolo.
Se utiliza para **controlar la visualización de mensajes de error y proporcionar retroalimentación al usuario** sobre el **estado de los campos de entrada.**

Sucio (dirty):

Un elemento del formulario está en **estado sucio cuando su valor ha cambiado desde su valor inicial.**
Se utiliza para **indicar que el valor del elemento del formulario ha sido modificado por el usuario**, lo que puede ser útil para realizar validaciones dinámicas o mostrar mensajes de confirmación.

Válido (valid):

Un elemento del formulario está en **estado válido cuando cumple con todas las reglas de validación definidas para él.**
Se utiliza para determinar si los **datos ingresados por el usuario son válidos** y, por lo tanto, **pueden enviarse o procesarse.**

Inválido (invalid):

Un elemento del formulario está en **estado inválido cuando no cumple con al menos una de las reglas de validación definidas para él.**
Se utiliza para **identificar campos de entrada** que contienen datos incorrectos o incompletos y proporcionar retroalimentación al usuario para corregir los errores.


4-**¿Qué ventajas aportan los FormGroup en la composición de formularios?**

Los **FormGroup en Angular** son una herramienta poderosa para **la composición de formularios**, y aportan varias ventajas significativas:

**Organización y agrupación lógica:** Los FormGroup **permiten organizar y agrupar campos relacionados dentro de un formulario.** Esto hace que la estructura del formulario sea más clara y fácil de entender tanto para los desarrolladores como para los usuarios finales.

**Validación centralizada:** Los FormGroup proporcionan un mecanismo para **aplicar validaciones de forma centralizada a un grupo de campos relacionados.** Puedes agregar **validadores tanto síncronos como asíncronos al FormGroup**, y Angular se encargará de comprobar automáticamente **la validez de todos los campos del grupo.**

**Manejo de datos complejos:** Los formularios a menudo implican **la manipulación de datos complejos, como objetos anidados o estructuras de datos complejas.** Los FormGroup pueden manejar fácilmente estos casos, permitiendo crear una **jerarquía de formularios anidados con FormGroup dentro de FormGroup**, proporcionando así una forma limpia y eficiente de trabajar con datos complejos.

**Interacción con directivas de formulario:** Los FormGroup **funcionan bien con otras directivas de formulario en Angular, como ngModel y ngForm.** Puedes vincular campos individuales a los controles dentro del FormGroup y acceder a su estado de validación y valor de forma transparente.

**Facilidad para trabajar con Reactive Forms:** Los FormGroup son **una parte fundamental de Reactive Forms en Angular**, que es una forma avanzada y potente de manejar formularios en la aplicación. Reactive Forms **permiten una programación más declarativa y un manejo más flexible de los cambios** en los datos del formulario.

En resumen, **los FormGroup en Angular ofrecen una forma eficaz y flexible de componer formularios**, proporcionando **organización, validación centralizada, manejo de datos complejos y una integración perfecta con otras características de Angular, como las directivas de formulario y Reactive Forms.** Esto hace que los FormGroup sean una herramienta imprescindible para desarrollar formularios robustos y altamente funcionales en aplicaciones Angular.
