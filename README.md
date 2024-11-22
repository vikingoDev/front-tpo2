# TPO2 Readme

## Q&A (+otras yerbas)

> Q: **"De donde sale este proyecto?"**
>
> A: _"Esto es un refurbish de un proyecto que hice en un curso, cuando empezaba a aprender código. Como técnico de sistemas siempre me pareció un dolor de bolas toda la rosca que había que hacer para que alguien nos comprara una bolsita de fucking RJ45's, así que se me ocurrió que como un proyecto diferente podía armar una mini tool para pedir herramientas de una forma más ordenada. Podés encontrar el source [acá](https://vikingodev.github.io/Javascript/)!"_

> Q: **"Por qué decidiste refurbishearlo?"**
>
> A: _"Porque la v1.0 quedó incompleta, con funciones rotas y viéndose como un vómito de camello alimentado a [surströmming](https://es.wikipedia.org/wiki/Surströmming). Sumado a que hacer estas cosas hoy en día me mata de la paja y no tenía ganas de pensar demasiado, teniendo una base más que jugosa de donde comenzar pensé '...y por qué no?'"_

> Q: **"Cual era tu objetivo al reversionar E-Toolbox?"**
>
> A: _"Aprobar la materia...?"_

> Q: **"... entiendo. Algo más que nos quieras contar?"**
>
> A: _"Acompañen la puerta cuando salgan, que el brazo está flojo y ya se reventó un vidrio la semana pasada. No se cuando vayan a venir los hijos de puta del servicio técnico, hace un mes y medio llamé para que la revisen..."_

> Q: **"..."**
> 
> A: _"..."_

> Q: **"... dale, gracias por todo."**
> 
> A: _"No, de nada. La radio está re buena."_

***

## "Como un mapa mental, escriban con sus palabras el razonamiento con el tienen pensado elaborar cada pregunta Qué tienen pensado hacer en cada uno de estos pasos, qué métodos van a elegir y por qué."

#### 1. Imprimir el nombre del grupo
- Se usó un objeto para almacenar el dato. Para imprimirlo en la consola y en el DOM, se mandó un console.log() y se manipuló el DOM con querySelector. No tiene mayor utilidad, simplemente identificar el grupo.

#### 2. Crear un array de los objetos
- Acá empieza el jugo. Para renderizar cosas, nada mejor que un array de objetos. Fácil de recorrer, fácil de estructurar.

#### 3. Imprimir objetos por pantalla
- Con los datos ya en un array, toda renderizarlos en el DOM dinámicamente. Se usó map en lugar de for o forEach porque devuelve un nuevo array con los resultados de las operaciones realizadas en cada elemento. Fácil de entender, fácil de operar.

#### 4. Crear la función para filtrar productos
- Pocas cosas son más castrosas que un filtro que hay que triggerear con Enter o click. Por eso se agrega el filter para que ejecute a medida que se escribe. Es ideal porque crea un nuevo array solo con los productos que coinciden con el criterio de búsqueda. Además, es fácil de combinar con eventos de teclado para actualizar el filtro en tiempo real.

#### 5. Crear la funcionalidad carrito
- Siguiendo la línea, _"pocas cosas son más..."_: molestas que tener que desplazarte a otra vista para ver el carrito y su contenido, por eso se hace sobre la misma página y en una posición cómoda. Lo renderizamos igual que con los productos, iterando sobre el array y generando HTML dinámico, y está ahí porque es indispensable.

#### 6. Memoria persistente usando localStorage
Usamos al buen amigo localStorage para guardar el carrito y cargarlo cuando se inicializa la página.
No hay gran lógica ni necesidad detrás de esto: si le extirpan el crayón del cerebro al usuario, va a dejar de refreshear mientras compra.

#### 7. Almacenar productos en localStorage
Como persistimos la wea anterior, tenemos que mantenerla en el cart después del refresh. Entonces usamos JSON.stringify para _stringifear_ el array de productos y guardarlo en el storage, y lo parseamos nuevamente al cargar la página.
Es necesario _stringifearlo_ porque el storage solo almacena datos en formato de texto, y todo este rollo se pudo haber ahorrado inyectándole IQ líquido en las venas al usuario.

### Gracias! 🤘
