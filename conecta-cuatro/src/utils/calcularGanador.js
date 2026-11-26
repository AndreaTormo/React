export const COLUMNAS = 7
export const FILAS = 6

// El tablero es un array de 7 columnas. Cada columna es un array con sus
// fichas de ABAJO hacia ARRIBA: tablero[col][0] es la ficha del fondo.
// Esta función ya está hecha: devuelve 'R', 'A' o null para la posición
// (col, fila). Fuera del tablero también devuelve null.
function ficha(tablero, col, fila) {
  if (col < 0 || col >= COLUMNAS || fila < 0 || fila >= FILAS) {
    return null
  }
  return tablero[col][fila] ?? null
}

// Direcciones [avance en columna, avance en fila]:
// horizontal, vertical, diagonal hacia arriba y diagonal hacia abajo
const DIRECCIONES = [
  [1, 0],
  [0, 1],
  [1, 1],
  [1, -1],
]

export function calcularGanador(tablero) {
  for (let col = 0; col < COLUMNAS; col++) {
    for (let fila = 0; fila < FILAS; fila++) {
      const color = ficha(tablero, col, fila)
      if (!color) {
        continue
      }

      for (const [avanceCol, avanceFila] of DIRECCIONES) {
        const linea = [[col, fila]]
        for (let paso = 1; paso < 4; paso++) {
          const siguienteCol = col + avanceCol * paso
          const siguienteFila = fila + avanceFila * paso
          if (ficha(tablero, siguienteCol, siguienteFila) !== color) {
            break
          }
          linea.push([siguienteCol, siguienteFila])
        }
        if (linea.length === 4) {
          return { ganador: color, linea }
        }
      }
    }
  }

  return null
}

export function tableroLleno(tablero) {
  return tablero.every((columna) => columna.length === FILAS)
}
