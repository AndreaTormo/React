# Respuestas · Parte 2

Nombre y apellidos: Andrea Tormo Cerdà

## 1. ¿Cómo sabe el programa si toca colocar o mover? ¿Has usado un estado o un valor calculado? ¿Por qué?
Perquè tenim el MAX_FICHAS que li diu si ja s'han col·locat les tres fitxes o en falta alguna. S'ha utilitzat un valor calculat perquè tenim la información en squares. 

const fichasJugador = squares.filter(casilla => casilla === jugador).length;
const faseMover = fichasJugador === MAX_FICHAS;

## 2. ¿Dónde guardas la ficha seleccionada? ¿Por qué no forma parte del historial?
La guardem en selected de Game  const [selected, setSelected] = useState(null);
No forma part del historial perquè seleccionar una fitxa no és una jugada, no canvia el tablero ni el torn, és sols un estat temporal. 

## 3. ¿Cómo mueves una ficha sin modificar el tablero original?
Es fa una copia del array, es modifica la copia i se li passa a handlePlay. Aquest últim l'afegix a l'historial com un nou tablero. 

function moverFicha(origen, destino) { const nextSquares = currentSquares.slice() nextSquares[destino] = nextSquares[origen] nextSquares[origen] = null handlePlay(nextSquares) setSelected(null)}

## 4. ¿Sigue funcionando el cálculo de xIsNext a partir de currentMove? Justifícalo
Si, el càlcul de const xIsNext = currentMove % 2 === 0 segueix funcionant perquè tant col·locar com menejar una fitxa afegeixen una entrada al historial i amb currentMove avança d'un en un. D'aquesta manera els torns es segueixen alternant. 