import { useState } from 'react'
import { COLUMNAS } from '../utils/calcularGanador'
import Tablero from './Tablero'

const TABLERO_VACIO = Array.from({ length: COLUMNAS }, () => [])

function Partida() {
  const [historial, setHistorial] = useState([TABLERO_VACIO])
  // TODO (paso 3): estado movimientoActual -> 0

  // TODO (paso 3): valores derivados turno ('R' en movimientos pares) y tableroActual

  function jugar(nuevoTablero) {
    setHistorial([...historial, nuevoTablero])
  }

  // TODO (paso 5): lista de movimientos "Ir al movimiento #N (columna C)"

  return (
    <div className="partida">
      <div>
        <Tablero tablero={historial[historial.length - 1]} onJugar={jugar} />
        {/* TODO (paso 3): pasa la prop turno */}
      </div>
      <div className="historial">{/* TODO (paso 5): <ol> con los movimientos */}</div>
    </div>
  )
}

export default Partida
