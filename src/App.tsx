import { useEffect, useState } from 'react'

function App() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {
    fetch("https://rino-backend.onrender.com/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch((err) => setStatus("error"));
  },[])

  return (
    <div>
      <p>{status}</p>
    </div>
  )
}

export default App
