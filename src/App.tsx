import { Navbar } from "./components/navbar/Navbar"
import { BrowserRouter as Router, Route} from "react-router-dom"
import { Home } from "./pages/home/Home"

function App() {  

  return (    
    <div className="App">
      <Navbar />      
    </div>
    
  )
}

export default App
