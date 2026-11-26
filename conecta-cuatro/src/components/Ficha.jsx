//   ganadora -> true si forma parte de la línea ganadora (paso 4)
//   mini     -> true para la ficha pequeña del texto de estado (paso 3)
//
// Clases CSS disponibles: "ficha", "roja", "amarilla", "ganadora", "mini"
function Ficha({ valor, mini }) {
  let className =
    valor === 'R' ? 'ficha roja' : valor === 'A' ? 'ficha amarilla' : 'ficha'
  if (mini) className += ' mini'
  return <div className={className}></div>
}

export default Ficha
