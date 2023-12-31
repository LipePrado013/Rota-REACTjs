import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MuseuPesca from "./pages/MuseuPesca"

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/museupesca" element={<MuseuPesca />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
