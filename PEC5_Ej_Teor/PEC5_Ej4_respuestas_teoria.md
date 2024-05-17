1. **¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?**

**FormControl:** Representa un **único control de formulario, como un campo de texto o un cuadro de selección.** Se utiliza para rastrear el valor y el estado de validez del control.
**FormGroup:** Agrupa **múltiples FormControls en un solo objeto.** Se utiliza para manejar formularios complejos que contienen múltiples controles.
**FormBuilder:** Es una utilidad que facilita la **creación de instancias de FormControl y FormGroup.** Proporciona métodos para construir formularios de manera más concisa y legible.
Ejemplo:

import { FormBuilder } from '@angular/forms';

constructor(private fb: FormBuilder) {}

myForm = this.fb.group({
  firstName: [''],
  lastName: [''],
  email: ['']
});

2. Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.

| Validador       | Descripción                                                                                   |
|-----------------|-----------------------------------------------------------------------------------------------|
| required        | Verifica si un campo tiene un valor.                                                          |
| requiredTrue    | Verifica si un campo de tipo checkbox está marcado como verdadero.                            |
| minLength       | Verifica si la longitud del valor del campo es mayor o igual que un número específico.        |
| maxLength       | Verifica si la longitud del valor del campo es menor o igual que un número específico.         |
| pattern         | Verifica si el valor del campo coincide con un patrón de expresión regular dado.              |
| email           | Verifica si el valor del campo es una dirección de correo electrónico válida.                  |
| min             | Verifica si el valor numérico del campo es mayor o igual que un número específico.            |
| max             | Verifica si el valor numérico del campo es menor o igual que un número específico.            |
| nullValidator   | Un validador nulo que siempre devuelve `null`.                                                |
| compose         | Combina varios validadores en uno solo.                                                        |
| composeAsync    | Combina varios validadores asincrónicos en uno solo.                                           |
| Validators.*   | Varios métodos estáticos en la clase `Validators` para crear validadores personalizados.      |



3. **¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?**

En los formularios reactivos de Angular, **los "estados" se refieren a los diferentes estados** que puede tener un **control de formulario**, como si está **"válido", "inválido", "tocado" o "sin tocar".** Aquí están los **principales estados y su significado**:

**Pristine (Prístino):** El control aún no ha sido tocado por el usuario.
**Dirty (Sucio):** El control ha sido tocado por el usuario y ha cambiado su valor.
**Touched (Tocado):** El control ha sido tocado por el usuario.
**Untouched (Sin tocar):** El control no ha sido tocado por el usuario.
**Valid (Válido):** El valor del control cumple con todas las reglas de validación.
**Invalid (Inválido):** El valor del control no cumple con alguna regla de validación.
**Pending (Pendiente):** El control está esperando una respuesta asincrónica, como una validación remota.

Estos estados son **útiles para realizar acciones específicas en respuesta a cambios en los controles del formulario**, como mostrar mensajes de error, deshabilitar botones de envío, etc.
