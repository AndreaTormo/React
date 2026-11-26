import { useState } from 'react'
import { COLUMNAS } from '../utils/calcularGanador'
import Tablero from './Tablero'

const TABLERO_VACIO = Array.from({ length: COLUMNAS }, () => [])

function numeroColumnaJugada(tablero, tableroAnterior) {
  return (
    tablero.findIndex(
      (columna, col) => columna.length !== tableroAnterior[col].length,
    ) + 1
  )
}

function Partida() {
  const [historial, setHistorial] = useState([TABLERO_VACIO])
  const [movimientoActual, setMovimientoActual] = useState(0)

  const turno = movimientoActual % 2 === 0 ? 'R' : 'A'
  const tableroActual = historial[movimientoActual]

  function jugar(nuevoTablero) {
    const nuevoHistorial = [
      ...historial.slice(0, movimientoActual + 1),
      nuevoTablero,
    ]
    setHistorial(nuevoHistorial)
    setMovimientoActual(nuevoHistorial.length - 1)
  }

  const movimientos = historial.map((tablero, move) => {
    let descripcion
    if (move === 0) {
      descripcion = 'Ir al inicio de la partida'
    } else {
      const columna = numeroColumnaJugada(tablero, historial[move - 1])
      descripcion = `Ir al movimiento #${move} (columna ${columna})`
    }

    return (
      <li key={move}>
        <button onClick={() => setMovimientoActual(move)}>{descripcion}</button>
      </li>
    )
  })

  return (
    <div className="partida">
      <div>
        <Tablero turno={turno} tablero={tableroActual} onJugar={jugar} />
      </div>
      <div className="historial">
        <ol>{movimientos}</ol>
      </div>
    </div>
  )
}

export default Partida
