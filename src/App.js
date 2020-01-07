import React from 'react';
import NotificationMsg from './Components/NotificationComponent'
import FormComponent from './Components/FormComponent'
import HeaderComponents from './Components/HeaderComponent';
import menuItems from'./asserts/source/menuItems' 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: null
    }
    this.setNotificationMsgHandler = this.setNotificationMsgHandler.bind(this);
  }

  setNotificationMsgHandler(message) {
    this.setState({
      message: message
    });
  }

  render() {
    return (<div>
      <HeaderComponents menuItems={menuItems}/>
      <NotificationMsg message={this.state.message}/>
      <FormComponent setNotificationMsgHandler={this.setNotificationMsgHandler}/>
    </div>);
  }
};

export default App;