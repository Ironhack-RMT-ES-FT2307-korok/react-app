// function Details({userDetails: {username, job}}) {
  function Details(props) {
  // console.log(props)

  const { username, job } = props.userDetails

  return (
    <div>
      {/* <h3>Nombre: {props.userDetails.username}</h3> */}
      {/* <p>Profesión: {props.userDetails.job}</p> */}

      <h3>Nombre: {username}</h3>
      <p>Profesión: {job}</p>

    </div>
  )

}

export default Details