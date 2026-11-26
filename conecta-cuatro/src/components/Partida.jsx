import { useState } from 'react'
import { COLUMNAS } from '../utils/calcularGanador'
import Tablero from './Tablero'

const TABLERO_VACIO = Array.from({ length: COLUMNAS }, () => [])

function Partida() {
  const [historial, setHistorial] = useState([TABLERO_VACIO])
  const [movimientoActual, setMovimientoActual] = useState(0)

  const turno = movimientoActual % 2 === 0 ? 'R' : 'A'
  const tableroActual = historial[movimientoActual]

  function jugar(nuevoTablero) {
    const nuevoHistorial = [...historial, nuevoTablero]
    setHistorial(nuevoHistorial)
    setMovimientoActual(nuevoHistorial.length - 1)
  }

  // TODO (paso 5): lista de movimientos "Ir al movimiento #N (columna C)"

  return (
    <div className="partida">
      <div>
        <Tablero turno={turno} tablero={tableroActual} onJugar={jugar} />
      </div>
      <div className="historial">{/* TODO (paso 5): <ol> con los movimientos */}</div>
    </div>
  )
}

export default Partida
