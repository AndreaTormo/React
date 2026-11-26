import Ficha from './Ficha'

function Marcador({ marcador, onNuevaPartida }) {
  return (
    <div className="marcador">
      <div className="marcador-jugador">
        <Ficha valor="R" mini /> Rojo: <strong>{marcador.R}</strong>
      </div>
      <div className="marcador-jugador">
        <Ficha valor="A" mini /> Amarillo: <strong>{marcador.A}</strong>
      </div>
      <button onClick={onNuevaPartida}>Nueva partida</button>
    </div>
  )
}

export default Marcador
