import Columna from './Columna'

//   onJugar -> función que recibe el tablero nuevo (paso 2)
function Tablero({ tablero }) {
  // TODO (paso 4): resultado, empate y partida terminada

  // TODO (paso 2): elegirColumna(col)
  //   - si la columna está llena (o la partida ha terminado), no hace nada
  //   - copia del tablero y columna NUEVA con la ficha del turno al final
  //   - llama a onJugar con el tablero nuevo

  // TODO (paso 3): texto de estado con una ficha mini del color del turno
  //   "Turno de: (ficha) Rojo"
  // TODO (paso 4): "Ganador: (ficha) Amarillo" o "Empate"

  return (
    <>
      <div className="estado">{/* TODO (paso 3) */}</div>
      <div className="tablero">
        {tablero.map((fichas, col) => (
          <Columna key={col} fichas={fichas} />
        ))}
      </div>
    </>
  )
}

export default Tablero
