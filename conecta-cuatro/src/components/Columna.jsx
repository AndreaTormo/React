import { FILAS } from '../utils/calcularGanador'
import Ficha from './Ficha'

function Columna({ fichas, onElegir, desactivada, ganadoras = [] }) {
  const filas = []
  for (let fila = FILAS - 1; fila >= 0; fila--) {filas.push(<Ficha key={fila} valor={fichas[fila] ?? null} ganadora={ganadoras.includes(fila)} /> )}

  return (
    <button className="columna" onClick={onElegir} disabled={desactivada}>
      {filas}
    </button>
  )
}

export default Columna
