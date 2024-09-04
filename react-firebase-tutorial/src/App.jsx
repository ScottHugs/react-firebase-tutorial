import { Route, Routes } from 'react-router-dom'

import './App.css'
import Write from './components/Write'

function App() {
  return (
    <div>
      
        <Routes>  
          <Route path="/" element={ <Write />} />
          <Route path="/write" element={ <Write />} />
        </Routes>

    </div>
  )
}

export default App
