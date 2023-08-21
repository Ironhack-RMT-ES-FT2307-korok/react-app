

function Card(props) {
  console.log(props)
  // props es una bolsita con informacion que se pasó al momento de invocarlo

  let productNameUpper = props.nombreProducto[0].toUpperCase() + props.nombreProducto.slice(1)

  let cardStyle = {
    backgroundColor: props.color
  }

  return (
    <div className='menu-item' style={cardStyle}>
      {/* <h4>{props.nombreProducto}</h4> */}
      <h4>{productNameUpper}</h4>
      <img src={props.img} alt="entrada" width="200px"/>
      <p>El precio: {props.price} Euros</p>
    </div>
  )

}

export default Card