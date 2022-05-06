import Access from './components/Access.jsx';
import {useState} from 'react';

function App() {
    let [session, setSession] = useState(false);

    return (
        <div className="App">
        {!session ? <Access/>
            : <h1>You are sign in</h1>
        }

        </div>
    );
}

export default App;

