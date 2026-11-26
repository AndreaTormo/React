import { FILAS, calcularGanador, tableroLleno } from '../utils/calcularGanador'
import Columna from './Columna'
import Ficha from './Ficha'

function Tablero({ turno, tablero, onJugar }) {
  const resultado = calcularGanador(tablero)
  const empate = !resultado && tableroLleno(tablero)
  const terminada = Boolean(resultado) || empate

  function elegirColumna(col) {
    if (terminada || tablero[col].length === FILAS) {
      return
    }

    const nuevoTablero = tablero.slice()
    nuevoTablero[col] = [...tablero[col], turno]
    onJugar(nuevoTablero)
  }

  let estado
  if (resultado) {
    estado = (
      <>
        Ganador: <Ficha valor={resultado.ganador} mini />{' '}
        {resultado.ganador === 'R' ? 'Rojo' : 'Amarillo'}
      </>
    )
  } else if (empate) {
    estado = 'Empate'
  } else {
    estado = (
      <>
        Turno de: <Ficha valor={turno} mini /> {turno === 'R' ? 'Rojo' : 'Amarillo'}
      </>
    )
  }

  return (
    <>
      <div className="estado">{estado}</div>
      <div className="tablero">{tablero.map((fichas, col) => (<Columna key={col} fichas={fichas} onElegir={() => elegirColumna(col)} 
      desactivada={terminada || fichas.length === FILAS} ganadoras={resultado ? resultado.linea.filter(([c]) => c === col).map(([, f]) => f) : []}/>))}</div>
    </>
  )
}

export default Tablero
