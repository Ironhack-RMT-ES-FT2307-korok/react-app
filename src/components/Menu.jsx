import tequeñosImg from "../assets/tequeños.jpg"
import pabellonImg from "../assets/pabellon.jpg"
import tartaImg from "../assets/tarta.jpg"

import Card from "./Card"

function Menu() {

  const menuTitleStyles = {
    color: "brown",
    backgroundColor: "black",
    padding: "10px",
    textDecoration: "underline"
  }

  return (
    <section id="menu">

      <h2 style={menuTitleStyles}>Este es el menu del día</h2>

      {/* <div className='menu-item'>
        <h4>Tequeños</h4>
        <img src={tequeñosImg} alt="entrada" width="200px"/>
        <p>El precio: 5 Euros</p>
      </div>

      <div className='menu-item'>
        <h4>Pabellon</h4>
        <img src={pabellonImg} alt="segundo" width="200px"/>
        <p>El precio: 10 Euros</p>
      </div>

      <div className='menu-item'>
        <h4>Tarta de Queso</h4>
        <img src={tartaImg} alt="postre" width="200px"/>
        <p>El precio: 4 Euros</p>
      </div> */}

      <Card nombreProducto="tequeños" price="5" img={tequeñosImg} color="yellow"/>
      <Card nombreProducto="pabellon" price="10" img={pabellonImg} color="blue"/>
      <Card nombreProducto="tarta de queso" price="4" img={tartaImg} color="red"/>

    </section>
  )

}

export default Menu;