import React, { Component } from 'react';
import SideBar from './components/sidebar';
import Video from './components/video';
import { Provider } from 'react-redux';
import store from './store/index'

class App extends Component {

  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Video />
          <SideBar />
        </div>
      </Provider>
    );
  }
}

export default App;
