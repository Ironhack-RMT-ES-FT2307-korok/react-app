import './App.css'
import Container from './components/Container'
import Details from './components/Details'
import Header from './components/Header'
import Menu from './components/Menu'
import Message from './components/Message'

import ReactPlayer from 'react-player'

function App() {

  const user1 = {
    username: "Gandalf",
    job: "Gray Wizard"
  }

  const user2 = {
    username: "Saruman",
    job: "White Wizard"
  }
  
  return (
    <div id="main-app">

      {/* <Header /> */}

      {/* <Menu /> */}

      {/* <Message color="purple" text="Patata"/> */}
      {/* <Message color="orange" text="Banana"/> */}

      <Message color="purple">
        <li>patata <span>un span</span> </li>
      </Message>

      <Message color="orange">
        banana
      </Message>

      <Container>
        <Details userDetails={user1}/>
      </Container>

      <Container>
        <Details userDetails={user2}/>
      </Container>

      <ReactPlayer controls={true} url='https://youtu.be/dQw4w9WgXcQ' />

    </div>
  )
}

export default App
