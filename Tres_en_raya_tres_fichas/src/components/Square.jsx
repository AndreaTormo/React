function Square({ value, onSquareClick , seleccionada}) {
  return (
    <button className={seleccionada ? 'square seleccionada' : 'square'} onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default Square
