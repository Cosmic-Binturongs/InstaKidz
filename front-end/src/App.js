import Access from './components/Access.jsx';
import {useState} from 'react';

function App() {
    let [access, setAccess] = useState(true)
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirm] = useState('')
    let [parentEmail, setParentEmail] = useState('')
    let [pronouns, setPronouns] = useState('')
    let [birthday, setBirthday] = useState('')
    let [avatar, setAvatar] = useState('')

    return (
        <div className="App">
        <Access
        access={access}
        setAccess={setAccess}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirm={setConfirm}
        parentEmail={parentEmail}
        setParentEmail={setParentEmail}
        pronouns={pronouns}
        setPronouns={setPronouns}
        birthday={birthday}
        setBirthday={setBirthday}
        avatar={avatar}
        setAvatar={setAvatar}

        />
        </div>
    );
}

export default App;

