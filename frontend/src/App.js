import logo from './logo.png';
import './App.css';
import axios from 'axios'
import {useEffect, useRef, useState, useCallback} from 'react';
import {Dashboard} from '../src/components/dashboard/Dashboard'

function App() {
  const mounted = useRef(false)
  const [status, setStatus] = useState(null)

  console.log(Dashboard)
  
  useEffect(() => {
    mounted.current = true
    if(mounted.current){console.log('App mounted')}
    return () => mounted.current = false
  })

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetchData() - 20')
      try {
        const response = await axios.get('http://localhost:8000/server-test')
        updateServerStatus()
      } catch(err) { console.log('there was an issue', err)}
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateServerStatus = useCallback(async() => {
    setStatus(200)
  })

  return (
    <>
      {status === 200 ?
        <div className="App">
          <Dashboard />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              <p>
                Intelligent crime statstics
              </p>
              <a
                className="App-link"
                href="https://digyt.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>Developed by Digyt, LLC </code>
              </a>
          </header>
        </div>
      : <div>Server Error</div>}
    </>
  );
}

export default App;
