import React from 'react'
import '../asserts/css/form.css'

const FormComponent = ({setNotificationMsgHandler}) => {

    const handleSubmitClick = (event, setNotificationMsgHandler) => {
        
        if ((event.target.username.value === '') || (event.target.password.value === '')) {
            setNotificationMsgHandler({
                type: 'failure',
                message: 'Invalid username or password'
            });
            event.preventDefault();
        } else {
            setNotificationMsgHandler({
                type: 'success',
                message: 'valid username and password'
            });
            event.preventDefault();
        }
    }

    return(
        <div>
            <form className='login-form' 
                    method="POST"
                    onSubmit={(event) => handleSubmitClick(event, setNotificationMsgHandler)}>
                <div className='form-field'>
                    <label htmlFor="username">username:  </label>
                    <input name="username" type="text" id="username"/>
                </div>
                <div className='form-field'>
                    <label htmlFor="password">username:  </label>
                    <input name="password" type="password" id="password"/>
                </div>
                <div className='form-field'>
                    <button className='submit-btn'>Submit</button>
                </div>
            </form>
        </div>
    );
}


export default FormComponent;