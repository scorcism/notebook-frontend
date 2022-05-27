import Body from "./component/Body"
import Footer from "./component/Footer"
import Header from "./component/Header"
import JokeAbstract from "./component/JokeAbstract"
import Login from "./component/Login"
import About from "./component/About"
import Signup from "./component/Signup"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Logout from "./component/Logout"
import NoteState from "./context/NoteState"

function App() {

  return (
    <BrowserRouter>
      <NoteState>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
        <JokeAbstract />
        <Footer />
      </NoteState>
    </BrowserRouter>
  )
}

export default App
