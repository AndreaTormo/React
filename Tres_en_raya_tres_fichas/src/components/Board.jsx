import { calculateWinner } from '../utils/calculateWinner'
import Square from './Square'

const MAX_FICHAS = 3; 

function Board({ xIsNext, squares, onPlay, selected, onSelect }) {
  const jugador =  xIsNext ? 'X' : 'O';
  const fichasJugador = squares.filter(casilla => casilla === jugador).length;
  const faseMover = fichasJugador === MAX_FICHAS;

function handleClick(i) {
    if (calculateWinner(squares)) {
      return
    }
    
    if(!faseMover) {
      if (squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      nextSquares[i] = jugador;
      onPlay(nextSquares);
      return;
    }
    
    if (squares[i] === jugador) {
      onSelect(selected === i ? null : i);
      return;
    }

    if(squares[i] === null && selected !== null) {
      const nextSquares = squares.slice();
      nextSquares[selected] = null; 
      nextSquares[i] = jugador; 
      onPlay(nextSquares);
    }

}

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = 'Guanyador: ' + winner;
  } else if (!faseMover) {
    status = `Torn de ${jugador}: col·loca una fitxa `;
  } else if (selected === null) {
    status = `Torn de ${jugador}: agafa una de les teues fitxes per menejar-la`;
  } else{
    status = `Torn de ${jugador}: elegix una casella buida`;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} seleccionada={selected === 0} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} seleccionada={selected === 1} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} seleccionada={selected === 2} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} seleccionada={selected === 3} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} seleccionada={selected === 4} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} seleccionada={selected === 5} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} seleccionada={selected === 6} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} seleccionada={selected === 7} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} seleccionada={selected === 8} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

export default Board
