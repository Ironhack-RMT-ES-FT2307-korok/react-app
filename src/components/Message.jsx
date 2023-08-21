
function Message(props) {

  console.log(props)
  // props.children es TODO el contenido interno entre la etiqueta que abre y cierra del componente

  const messageStyles = {
    color: props.color,
    backgroundColor: "brown",
    padding: "20px",
    textDecoration: "underline",
    fontSize: "30px"
  }

  return (
    <>
      <p style={messageStyles}>{props.children}</p>
      <p>otra cosa</p>
    </>
  )

}

export default Message