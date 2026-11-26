# Respuestas · Parte 3

Nombre y apellidos: Andrea Tormo Cerdà

## 1. ¿Por qué el tablero se guarda como un array de columnas con las fichas de abajo a arriba? ¿Qué ventajas tiene para este juego?

Perquè en el conecta cuatro el jugador només tria una columna i la fitxa cau al buit lliure més baix. Guardant cada columna com un array de baix a dalt, «deixar caure» una fitxa és simplement afegir-la al final d'eixe array, i la posició on cau és l'índex `columna.length`. A més, la longitud de la columna ja ens diu l'altura i si està plena.

```js
const nuevoTablero = tablero.slice()
nuevoTablero[col] = [...tablero[col], turno]
```

I per a desactivar una columna plena: `desactivada={fichas.length === FILAS}`.

## 2. tablero.slice() hace una copia "superficial". ¿Por qué hay que crear también una columna nueva? ¿Qué pasaría si usaras push sobre la columna original?

`slice()` copia només l'array de fora; les 7 columnes continuen sent els mateixos arrays (les mateixes referències). Si fera `tablero[col].push(turno)`, modificaria la columna original, que també està dins dels tableros guardats en l'historial. Així canviarien partides del passat i el viatge en el temps (i el fet de retallar l'historial) deixaria de funcionar. Per això cree una columna nova i la substituïsc en la còpia:

```js
const nuevoTablero = tablero.slice()
nuevoTablero[col] = [...tablero[col], turno]
```

## 3. ¿Por qué cada columna es un botón? ¿Qué te ahorra el atributo disabled?

Perquè la unitat d'interacció del joc és la columna sencera, no cada forat: el jugador tria una columna i la fitxa cau. Fer que tota la columna siga un únic botó evita haver de calcular en quin forat cauria segons el forat clicat, i simplifica l'esdeveniment: un sol `onClick` per columna.

`disabled` fa que el navegador no execute el `onClick` i, a més, mostra l'estil de no permés (`.columna:disabled`). Així no cal comprovar dins del gestor si la columna està plena o si la partida ha acabat:

```jsx
<button className="columna" onClick={onElegir} disabled={desactivada}>
```

amb `desactivada={terminada || fichas.length === FILAS}`.

## 4. Explica cómo detecta tu calcularGanador un cuatro en línea. ¿Por qué no se escriben a mano todas las líneas como en el tres en raya?

`calcularGanador` recorre totes les posicions `(col, fila)`. Per a cada fitxa no buida, en cadascuna de les 4 direccions (`[1,0]` horitzontal, `[0,1]` vertical, `[1,1]` i `[1,-1]` diagonals) comprova les 3 posicions següents amb la funció `ficha`, que retorna `null` si eixim del tablero. Si les 4 són del mateix color, retorna `{ ganador: color, linea }`; si acaba sense trobar res, retorna `null`.

```js
for (const [avanceCol, avanceFila] of DIRECCIONES) {
  const linea = [[col, fila]]
  for (let paso = 1; paso < 4; paso++) {
    const siguienteCol = col + avanceCol * paso
    const siguienteFila = fila + avanceFila * paso
    if (ficha(tablero, siguienteCol, siguienteFila) !== color) break
    linea.push([siguienteCol, siguienteFila])
  }
  if (linea.length === 4) return { ganador: color, linea }
}
```

No s'escriuen a mà perquè en un tablero de 7x6 hi ha 69 línies possibles de 4 (horitzontals, verticals i diagonals), mentre que en el tres en ratlla només n'hi ha 8. Amb bucles i direccions es cobrixen totes automàticament, i `ficha` evita repetir les comprovacions de bords.
