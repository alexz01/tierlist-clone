import { useState } from 'react'
import './App.css'
import { AppButton } from './shared/button'
import { AppTest } from './shared/test'
import TierList from './shared/tierlist'
import Tier from './shared/tier'

function App() {
  const [count, setCount] = useState(0)

  const getButtonLabel = () => `Current count: ${count}`
  return (
    <>
      <h1>Vite + React</h1>
      <div className="container mx-auto">
        <TierList/>
        {/*<AppButton label={getButtonLabel()} onClick={() => setCount((count) => count + 1)}/>*/}
      </div>
      {/*<AppTest /> */}
    </>
  )
}

export default App

