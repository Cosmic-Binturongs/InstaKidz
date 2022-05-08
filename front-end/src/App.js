import Access from './components/Access.jsx';
import Upload from './components/Upload.jsx';
import {useState} from 'react';

function App() {

    /* Session state will determine between logged in or not */

    let [session, setSession] = useState(false);

    const testBtn = (e) => {
        setSession(sesh => !sesh)
    }

    return (
        <div className="App">
        {!session ? <Access />
            : <Upload session={session}/> 
        }

        { /* Test Button just to switch between session states */ }
        <button onClick={testBtn}>Test Sign In</button>

        </div>
    );
}

export default App;

