import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Hello RentEase</h1>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </div>
  )
}

export default App