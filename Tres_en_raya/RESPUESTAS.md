# Respuestas

Nombre y apellidos: Andrea Tormo Cerdà 

Responde con tus palabras y cita fragmentos de tu propio código.

## 1. ¿Qué diferencia hay entre una prop y un estado? Pon un ejemplo de cada uno en tu proyecto
Els props són dades que rep un component d'altre component, normalment del que nomenem "pare". 
Al meu cas, trobe un exemple de prop amb value que passa des de Board fins Square:
    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />

## 2. ¿Por qué el estado de las casillas no se queda en Square y se sube a Board (y después a Game)?
Perquè necessitem que la informació de les caselles es compartisca entre tots els components que participen en la partida.
Exemple: function Board({ squares, onPlay }) { --> en aquest cas Board rep les caselles i la funció per a jugar.

## 3. ¿Por qué se copia el array con slice() en vez de modificarlo directamente? ¿Qué dejaría de funcionar si no lo hicieras?
Fem ús del slice() per poder crear una copia del mateix array sense modificar l'original. 
Exemple al meu cas: 
const nextSquares = squares.slice();
nextSquares[0] = "X";

## 4. ¿Por qué se escribe onSquareClick={() => handleClick(0)} y no onSquareClick={handleClick(0)}? Pruébalo y explica lo que ocurre
Escrivim onSquareClick={() => handleClick(0)} perquè volem que handleClick(0) s'execute quan polsem la casella i no quan es renderitze el component.

## 5. ¿Para qué sirve la prop key en la lista de movimientos? ¿Por qué aquí se puede usar el número de movimiento?
Gràcies a la prop key, React pot distingir cada ítem d'una llista i detectar quins s'han modificat, afegit o esborrat, fent més àgil l'actualització de la pantalla.
En aquest cas: <li key={move}>

## 6. ¿Por qué xIsNext no tiene su propio useState en la versión final?
Pel fet que xIsNext es pot calcular directament tenint en compte la quantitat de jugades registrades a l'historial, no cal emmagatzemar-lo com una dada independent, ja que seria un estat duplicat i podria desincronitzar-se.
Ex.: const xIsNext = currentMove % 2 === 0;