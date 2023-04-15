import React from 'react'

const Login = ({isShowLogin}) => {
  return (
    <div className={`${!isShowLogin ? "active": ""} show`}>
        <div className='login-form'>
            <div className='form-box solid'>
                <form>
                    <h1 className='login-text'>Login </h1>
            <label>Username</label><br></br>
            <input type='text' name='username' className='login-box'></input><br></br>
    <label>Password</label>
    <input type='password' name='password' className='login-box'></input><br></br>
    <input type='submit' value='LOGIN' className='login-btn'></input>
    
               
                </form>
            </div>
        </div>
    
    </div>
  )
}

export default Login