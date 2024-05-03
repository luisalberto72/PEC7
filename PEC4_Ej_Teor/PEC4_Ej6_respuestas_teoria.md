1.**Cuáles son los style encapsulation de los componentes? Pon un ejemplode uso de cada uno de ellos.**

En Angular, **los estilos CSS de un componente** pueden **encapsularse de varias maneras** para evitar que afecten a otros componentes en la aplicación. Los métodos de **encapsulación de estilos** son:

-**Emulated (encapsulado por defecto):** Este es el método de encapsulación predeterminado en Angular. Los estilos CSS **se aplican al componente** y se **emulan a nivel de clase** para evitar conflictos con estilos de otros componentes.

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EjemploComponent {}

-**None (sin encapsulación):** En este método, los estilos CSS del componente no están encapsulados y se **aplican globalmente en toda la aplicación.** Esto puede causar conflictos de estilos si no se usan con precaución.

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EjemploComponent {}


-**Shadow DOM:** Este método **utiliza el Shadow DOM del navegador** para encapsular los estilos CSS del componente. Los estilos se **aplican solo al componente** y **no se filtran hacia fuera.**

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EjemploComponent {}

2.**¿Qué es el shadow DOM?**

El Shadow DOM es una tecnología de los navegadores web que **permite encapsular la estructura HTML, el CSS y la lógica de JavaScript de un componente web**. Con el Shadow DOM, un **componente web puede tener su propio árbol DOM separado del árbol DOM principal del documento**, lo que **evita que los estilos y comportamientos del componente** afecten a otros elementos en la página. Esto proporciona un alto grado de encapsulación y modularidad.

3.**¿Qué es el changeDetection?**
ChangeDetection es **el mecanismo por el cual Angular detecta y reacciona a los cambios en los datos de la aplicación.** Angular realiza un seguimiento de las propiedades y estructuras de datos utilizadas en los componentes y las plantillas, y cuando hay cambios, Angular actualiza la vista correspondiente. Este **proceso de detección de cambios** se conoce como **change detection.**

4.**¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.**


**Estrategia Default:**

Cuándo se dispara la detección de cambios: Angular ejecuta la detección de cambios cada vez que se produce un evento, como una interacción del usuario o una solicitud HTTP, independientemente de si hay cambios en los datos de entrada del componente.

**Uso recomendado:** Se usa cuando se desea que Angular actualice la vista automáticamente en respuesta a cualquier cambio, sin importar la fuente del cambio.

Se usa cuando necesitemos que la vista del componente se actualice automáticamente en respuesta a cualquier cambio, o cuando estemos desarrollando componentes simples o pequeñas aplicaciones donde el rendimiento no sea una preocupación principal.

**Ventajas:**
Fácil de usar y entender.
Garantiza que la vista del componente siempre esté sincronizada con el estado actual de la aplicación.
**Inconvenientes:**
Puede causar un rendimiento deficiente en aplicaciones grandes o complejas, ya que Angular realiza la detección de cambios de manera frecuente, incluso cuando no hay cambios relevantes en los datos del componente.

**Estrategia OnPush:**

Cuándo se dispara la detección de cambios: Angular ejecuta la detección de cambios solo cuando las referencias de entrada del componente cambian, es decir, cuando se pasa un nuevo objeto a través de la entrada @Input() del componente, o cuando ocurre un evento manejado por el componente que Angular detecta como un cambio en el estado.

**Uso recomendado:** Se utiliza cuando se quiere optimizar el rendimiento al evitar la detección de cambios innecesarios en componentes que no dependen de datos externos y cuyos datos de entrada son inmutables.

Se usa cuando deseemos optimizar el rendimiento de nuestra aplicación, especialmente en aplicaciones grandes o complejas con muchos componentes y datos que no cambian con frecuencia. 

**Ventajas:**
Mejora significativamente el rendimiento de la aplicación al reducir la cantidad de detecciones de cambios que Angular debe realizar.
Reduce la posibilidad de efectos secundarios no deseados al minimizar las actualizaciones de la vista a solo cuando es necesario.
**Inconvenientes:**
Requiere un enfoque más cuidadoso al desarrollar componentes para asegurarse de que las referencias de entrada se manejen correctamente y se actualicen de manera adecuada.
Puede ser más complejo de entender para los desarrolladores nuevos en Angular.

5.**Explica con detalle el ciclo de vida de los componentes**. Haz hincapié en cuándo se disparan los hooks OnChanges, OnInit, AfterViewInit y
OnDestroy, puesto que son los más utilizados.


El **ciclo de vida de los componentes** en Angular sigue **un conjunto predefinido de pasos** desde su **creación hasta su destrucción**. A continuación presento una explicación detallada de los principales hooks del ciclo de vida de los componentes y cuándo se disparan:

**ngOnChanges():**

Este hook se dispara cuando se detectan cambios en las propiedades de entrada @Input() del componente.

Es el primer hook que se llama después de que Angular haya inicializado todas las propiedades de entrada del componente.

Es útil para realizar acciones basadas en cambios en las propiedades de entrada, como actualizar datos o realizar cálculos adicionales.

Se llama antes de que se invoque el hook ngOnInit().

**ngOnInit():**

Este hook se dispara una vez después de que Angular haya inicializado todas las propiedades del componente.

Es el lugar ideal para inicializar el componente, como realizar solicitudes HTTP, suscribirse a observables o configurar datos iniciales.

Se ejecuta después de que ngOnChanges() haya completado su ejecución.

**ngAfterViewInit():**

Este hook se dispara una vez después de que Angular haya inicializado las vistas del componente y sus hijos.

Es útil para realizar tareas que requieran acceso al DOM, como inicializar bibliotecas externas o interactuar con elementos del DOM directamente.

Se ejecuta después de que ngOnInit() haya completado su ejecución.

Es importante tener en cuenta que este hook solo se dispara para los componentes y no para los servicios o directivas.

**ngOnDestroy():**

Este hook se dispara justo antes de que Angular destruya el componente y limpie sus recursos.

Es el lugar ideal para realizar tareas de limpieza, como cancelar suscripciones a observables, liberar recursos o cancelar temporizadores.

Se llama cuando el componente se elimina del árbol DOM o cuando se destruye manualmente mediante programación.

Es importante liberar cualquier recurso o memoria asignada en este hook para evitar posibles fugas de memoria.

En resumen, **el ciclo de vida de los componentes en Angular** sigue estos pasos: **detección de cambios en las propiedades de entrada (ngOnChanges()), inicialización del componente (ngOnInit()), inicialización de las vistas del componente y sus hijos (ngAfterViewInit()), y finalmente, limpieza y destrucción del componente (ngOnDestroy())**.Estos hooks proporcionan puntos de enganche útiles para realizar acciones específicas en diferentes etapas del ciclo de vida del componente.


