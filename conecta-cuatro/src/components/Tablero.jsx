import { FILAS } from '../utils/calcularGanador'
import Columna from './Columna'
import Ficha from './Ficha'

function Tablero({ turno, tablero, onJugar }) {
  // TODO (paso 4): resultado, empate y partida terminada

  function elegirColumna(col) {
    if (tablero[col].length === FILAS) {
      return
    }

    const nuevoTablero = tablero.slice()
    nuevoTablero[col] = [...tablero[col], turno]
    onJugar(nuevoTablero)
  }

  // TODO (paso 4): "Ganador: (ficha) Amarillo" o "Empate"

  return (
    <>
      <div className="estado">
        Turno de: <Ficha valor={turno} mini /> {turno === 'R' ? 'Rojo' : 'Amarillo'}
      </div>
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
