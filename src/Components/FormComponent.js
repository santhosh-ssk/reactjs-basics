import React from 'react'
import '../asserts/css/form.css'
class FormComponent extends React.Component
{
    constructor() {
        super();
        this.state = {
            username: null,
            password: null,
            error_msg: null,
        }
        this.handleSubmitClick = this.handleSubmitClick.bind(this);

    }

    handleSubmitClick(event){
        if ((this.state.username == null) || (this.state.password == null)) {
            this.setState({
                error_msg: 'Invalid username or password'
            });
            event.preventDefault();
        }
    }

    render() {
        const FIELDS = [
            {
                name: 'username',
                type: 'text',
                id: 'username',
            },
            {
                name: 'password',
                type: 'password',
                id: 'password',
            }
        ]
        return(
            <div>
                <form className='login-form' 
                      method="POST"
                      onSubmit={(event) => this.handleSubmitClick(event)}>
                    { FIELDS.map((field) => {
                        return (
                        <div className='form-field'>
                            <label for={field.id}>{field.name}:  </label>
                            <input name={field.name} type={field.type} id={field.id}/>
                        </div>
                        )
                    })
                    }
                    <div className='form-field'>
                        <button className='submit-btn'>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormComponent;