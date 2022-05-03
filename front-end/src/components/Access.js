import './Access.css';

function Access({access, 
    setAccess, 
    username, 
    setUsername, 
    password, 
    setPassword,
    confirmPassword,
    setConfirm
}) {

    const handleClick = () => {
        setAccess(state => !state)
        setUsername('')
        setPassword('')
        setConfirm('')
    }

    const handleInfo = (input) => {
        if (input.target.id === 'username') {
            setUsername(input.target.value)
        } else if (input.target.id === 'password') {
            setPassword(input.target.value)
        } else if (input.target.id === 'confirm-password') {
            setConfirm(input.target.value)
        }
    }

    return (
        <div className='access'>
        {access ? 
            <div className='login-div'>
            <h2>Login Page</h2>
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
            <h2>Sign Up page</h2>

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
            value={ password }/>

            <input
            onChange={handleInfo}
            htmlFor='confirm password'
            id='confirm-password'
            type='password'
            placeholder='confirm password'
            value={ confirmPassword }/>

            </div>
        }
        <button
        onClick={handleClick}
        >
        Change State
        </button>
        </div>

    )
}

export default Access;
