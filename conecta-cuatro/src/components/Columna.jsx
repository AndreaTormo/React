import { FILAS } from '../utils/calcularGanador'
import Ficha from './Ficha'

// Props:
//   fichas      -> array de fichas de la columna (de abajo a arriba)
//   onElegir    -> función que se ejecuta al pulsar la columna (paso 2)
//   desactivada -> true si la columna está llena o la partida ha terminado (paso 2)
//   ganadoras   -> filas de esta columna que forman la línea ganadora (paso 4)
function Columna({ fichas }) {
  const filas = []
  for (let fila = FILAS - 1; fila >= 0; fila--) {
    filas.push(<Ficha key={fila} valor={fichas[fila] ?? null} />)
  }

  return (
    <button className="columna">
      {filas}
      {/* TODO (paso 2): onClick y disabled */}
    </button>
  )
}

export default Columna
