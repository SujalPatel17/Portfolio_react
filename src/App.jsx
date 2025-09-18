import { useState } from 'react'
import './index.css'
import './App.css'
import CursorBlob from './components/CursorBlob'
import About from './components/About'
import Header from './components/Header'
import Extras from './components/Extras'
import Projects from './components/Projects'
import Expertise from './components/Expertise'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {


  const [showHeader, setShowHeader] = useState(false)


  return (
    <>
    <div className="relative h-full w-full bg-black">
    <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] z-20"></div>
    <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] z-20">
    </div>

    <CursorBlob/>
    <CursorBlob />    
    <About onAnimationComplete={() => setShowHeader(true)} />
    {showHeader && <Header />}
    <Extras/>
    <Projects/>
    <Expertise/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default App
