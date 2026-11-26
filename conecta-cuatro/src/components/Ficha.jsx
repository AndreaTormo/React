// Clases CSS disponibles: "ficha", "roja", "amarilla", "ganadora", "mini"
function Ficha({ valor, mini, ganadora }) {
  let className = valor === 'R' ? 'ficha roja' : valor === 'A' ? 'ficha amarilla' : 'ficha'
  if (mini) className += ' mini'
  if (ganadora) className += ' ganadora'
  return <div className={className}></div>
}

export default Ficha
