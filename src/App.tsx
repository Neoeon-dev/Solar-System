import PlanetarySystem from './components/PlanetarySystem'
import './App.css'
import Loading from './components/Loading'
import { useState } from 'react'

function App() {

  let [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loading></Loading>}
      <div className='Main'>
        <PlanetarySystem setLoading={setLoading}></PlanetarySystem>
      </div>
    </>
  )

}

export default App
