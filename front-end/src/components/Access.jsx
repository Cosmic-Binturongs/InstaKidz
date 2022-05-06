import './Access.css';
import {useState} from 'react';

function Access() {
    let [access, setAccess] = useState(true)
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirm] = useState('')
    let [parentEmail, setParentEmail] = useState('')
    let [pronouns, setPronouns] = useState('')
    let [avatar, setAvatar] = useState('')

    const handleClick = (click) => {
        if (click.target.id === 'access-return-login' && access === false) {
            setAccess(state => !state)
            setUsername('')
            setPassword('')
            setConfirm('')
        } else if (click.target.id === 'access-login' && access === true) {
            console.log('you have logged in') 
        } else if (click.target.id === 'access-sign-up' && access === true) {
            setAccess(state => !state)
            setUsername('')
            setPassword('')
            setConfirm('')
        } else if (click.target.id === 'access-sign-up' && access === false) {
            console.log('you have signed up') 
        }
    }

    const handleInfo = (input) => {
        switch(input.target.id) {
            case 'username':
                setUsername(input.target.value)
                break;
            case 'password':
                setPassword(input.target.value)
                break;
            case 'confirm-password':
                setConfirm(input.target.value)
                break;
            case 'parent-email':
                setParentEmail(input.target.value)
                break;
            case 'pronouns': 
                setPronouns(input.target.value)
                break;
            default:
                setUsername('')
                setPassword('')
                setConfirm('')
                setParentEmail('')
                setPronouns('')

        }
    }

    const chooseAvi = (avi) => {
        switch(avi.target.id) {
            case 'av-1':
                setAvatar(avi.target.id)
                break;
            case 'av-2':
                setAvatar(avi.target.id)
                break;
            case 'av-3':
                setAvatar(avi.target.id)
                break;
            case 'av-4':
                setAvatar(avi.target.id)
                break;
            case 'av-5':
                setAvatar(avi.target.id)
                break;
            case 'av-6':
                setAvatar(avi.target.id)
                break;
            default:
                setAvatar(avi.target.id)
        }
        console.log(avatar)
    }


    return (
        <div className='access'>
        {access ? 
            <div className='login-div'>
            <form>

            <input 
            onChange={handleInfo}
            htmlFor='username'
            id='username'
            type='text'
            placeholder='username'
            value={ username }/>

            <input 
            onChange={handleInfo}
            htmlFor='password'
            id='password'
            type='password'
            placeholder='password'
            value={password}/>
            </form>
            </div>

            : 
            <div className='signup-div'>

            <form>
            <div className='enter-info'>
            <input 
            onChange={handleInfo}
            htmlFor='username'
            id='username'
            type='text'
            placeholder='create username'
            value={ username }/>

            <input
            onChange={handleInfo}
            htmlFor='password'
            id='password'
            type='password'
            placeholder='create password'
            value={ password }/>

            <input
            onChange={handleInfo}
            htmlFor='confirm password'
            id='confirm-password'
            type='password'
            placeholder='confirm password'
            value={ confirmPassword }/>

            <input
            onChange={handleInfo}
            htmlFor='parent email'
            id='parent-email'
            type='text'
            placeholder='parent email'
            value={parentEmail}/>

            <input
            onChange={handleInfo}
            htmlFor='pronouns'
            id='pronouns'
            type='text'
            placeholder='pronouns'
            value={pronouns}/>

            <input
            onChange={handleInfo}
            htmlFor='birthday'
            id='birthday'
            type='date'
            placeholder='confirm password'
            />

            </div>

            <div className='bio-avatar'>
            <div id='av-1' className='avatar' onClick={chooseAvi}></div>
            <div id='av-2' className='avatar' onClick={chooseAvi}></div>
            <div id='av-3' className='avatar' onClick={chooseAvi}></div>
            <div id='av-4' className='avatar' onClick={chooseAvi}></div>
            <div id='av-5' className='avatar' onClick={chooseAvi}></div>
            <div id='av-6' className='avatar' onClick={chooseAvi}></div>
            <textarea 
            placeholder='Please tell us about yourself! :)'
            rows='5'
            cols='30'
            >
            </textarea>
            </div>
            </form>

            </div>
        }

        <div className='access-btns'>
        { access === true ?
            <input
            id='log-in-submit'
            type='submit'
            value='Login'
            />
            : 
            <button 
            onClick={handleClick}
            id='access-return-login'
            > Return to Login 
            </button>
        }

        { access === true ?
                <button
            onClick={handleClick}
            id='access-sign-up'
                >
                Sign Up
                </button>
                :
                <input 
            id='sign-up-submit'
            type='submit'
            value='submit'
                />
        }
        </div>
        </div>

    )
}

export default Access;
