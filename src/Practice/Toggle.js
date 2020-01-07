import React from 'react'

class Toggler extends React.Component{
    constructor() {
        super();
        this.state = {
            is_toggled: false
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick(){
        this.setState((state) => ({
            is_toggled: !state.is_toggled
        }));
    }
    render(){
        const users = [
            {name: 'santhosh', age: 21},
            {name: 'santhosh1', age: 22},
            {name: 'santhosh2', age: 23},
            {name: 'santhosh3', age: 24},
        ];
    const users_temp = users.map((user) => {
            return(<li><div>
                    <span>name: {user.name}</span>
                </div></li>)
    });
        return (
        <div>
            <ul>
            {users_temp}
            {users.map((user) => {
                return();
            })}
            </ul>
            <button onClick={this.handleToggleClick}>Toggle Me</button>
            <span>Toggle switch is {this.state.is_toggled ? 'ON' : 'OFF'}</span>
        </div>
        );
    }
}

export default Toggler;