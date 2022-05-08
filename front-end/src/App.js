import Access from './components/Access.jsx';
import { useState } from 'react';
import Interface from './components/Interface.jsx';

//

function App() {

  /* Session state will determine between logged in or not */
  
  const [profile, setProfile] = useState('empty');
    let [session, setSession] = useState(false);
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

