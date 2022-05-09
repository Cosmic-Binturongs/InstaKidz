import Access from './components/Access.jsx';
import { useState, useEffect } from 'react';
import Interface from './components/Interface.jsx';


function App() {
  
  const [profile, setProfile] = useState('empty');
  const [session, setSession] = useState(false);
  const [cookie, setCookie] = useState('');

  const checkSession = () => {
    let options = {
      headers: { "X-CSRFToken": csrfToken },
      credentials: 'include'
    }
    fetch('http://localhost:8000/test/', options)
      .then(response=> response.json())
      .then(data=> console.log(data))
  }

  useEffect(() => {
    checkSession()
    

  })
  
  const testBtn = (e) => {
        setSession(sesh => !sesh)
    }

    return (
        <div className="App">
        {!session ? <Interface />
            : <Access state='nahfam'/>
        }

        { /* Test Button just to switch between session states */ }
        <button onClick={testBtn}>Test Sign In</button>

        </div>
    );
}

export default App;

