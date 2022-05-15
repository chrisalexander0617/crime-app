import logo from './logo.png';
import './App.css';
import axios from 'axios'
import {useEffect, useRef, useState} from 'react';

function App() {
  const mounted = useRef(false)
  const [serverStatus, setServerStatus] = useState(200)
  
  useEffect(() => {
    mounted.current = true
    if(mounted.current){
      console.log('App mounted')
    }
    return () => mounted.current = false
  })

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetchData() - 20')
        try {
          const response = await axios.get('http://localhost:8000/server-test')
          console.log(response.data)
          
        } catch(err) { console.log('there was an issue', err)}
      }
    fetchData()
  },[])

  return (
    <>
      {serverStatus === 200 ?
        <div className="App">
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
