import Access from './components/Access.jsx';
import { useState, useEffect } from 'react';
import Interface from './components/Interface.jsx';
import Upload from './components/Upload.jsx';



function App() {
  
  const [profile, setProfile] = useState('empty');
  const [session, setSession] = useState(false);
  
  let csrfToken = null;
  const checkSession = () => {
    let options = {
      headers: { "X-CSRFToken": csrfToken },
      credentials: 'include'
    }
    fetch('http://localhost:8000/test/', options)
      .then(response => response.json())
      .then(data => {
        if (data.isAuthenticated === 'success') {
          setSession(true);
          console.log(data)
        }
        else {
          setSession(false);
          console.log(data)
        }
      })
  }

  useEffect(() => {
    checkSession()
  })
  
    return (
      <div className="App">

        <Upload />
        
        {/* {session ? <Interface />
            : <Access state='nahfam'/>
        } */}
        
      </div>
    );
}

export default App;

