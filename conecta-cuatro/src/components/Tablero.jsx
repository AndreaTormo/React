import { FILAS } from '../utils/calcularGanador'
import Columna from './Columna'

function Tablero({ tablero, onJugar }) {
  // TODO (paso 4): resultado, empate y partida terminada

  function elegirColumna(col) {
    if (tablero[col].length === FILAS) {
      return
    }

    const nuevoTablero = tablero.slice()
    nuevoTablero[col] = [...tablero[col], 'R']
    onJugar(nuevoTablero)
  }

  // TODO (paso 3): texto de estado con una ficha mini del color del turno
  //   "Turno de: (ficha) Rojo"
  // TODO (paso 4): "Ganador: (ficha) Amarillo" o "Empate"

  return (
    <>
      <div className="estado">{/* TODO (paso 3) */}</div>
      <div className="tablero">
        {tablero.map((fichas, col) => (
          <Columna
            key={col}
            fichas={fichas}
            onElegir={() => elegirColumna(col)}
            desactivada={fichas.length === FILAS}
          />
        ))}
      </div>
    </>
  )
}

export default Tablero
