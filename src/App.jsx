import { About, Footer, History, Home, Navbar, Pnf, Sufi } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import sounds from './assets/allah.mp3';
import { useEffect } from "react";
function App() {
  function playAudio() {
    const audio = new Audio(sounds);
    audio ? audio.play() : audio.pause();
    audio.loop = true;
    audio.volume = 0.05;
  }
  useEffect(() => {playAudio()},[])
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sufi" element={<Sufi />} />
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Pnf />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
