import { FILAS } from '../utils/calcularGanador'
import Ficha from './Ficha'

//   ganadoras   -> filas de esta columna que forman la línea ganadora (paso 4)
function Columna({ fichas, onElegir, desactivada }) {
  const filas = []
  for (let fila = FILAS - 1; fila >= 0; fila--) {
    filas.push(<Ficha key={fila} valor={fichas[fila] ?? null} />)
  }

  return (
    <button className="columna" onClick={onElegir} disabled={desactivada}>
      {filas}
    </button>
  )
}

export default Columna
