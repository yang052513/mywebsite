import React from 'react'

import {
  Navbar,
  Introduction,
  About,
  Skill,
  Experience,
  Contact,
  Footer,
} from './components/index'

function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <About />
      <Skill />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
