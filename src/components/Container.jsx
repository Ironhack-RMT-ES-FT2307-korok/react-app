function Container(props) {

  // este componente envuelve un codigo y le da estilos

  const containerStyles = {
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px",
    padding: "20px",
  }

  return (
    <div style={containerStyles}>
      {props.children}
    </div>
  )


}


export default Container;