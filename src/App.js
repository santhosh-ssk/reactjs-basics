import React from 'react';
import FormComponent from './Components/FormComponent'
import HeaderComponents from './Components/HeaderComponent';
import menuItems from'./asserts/source/menuItems' 
class App extends React.Component {

  render() {
    return (<div>
      <HeaderComponents menuItems={menuItems}/>
      <FormComponent/>
    </div>);
  }
};

export default App;