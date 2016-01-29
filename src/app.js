import React from 'react';
import {render} from 'react-dom';

class Counter extends React.Component {
  constructor(props){
    super(props);

    this.state = {count: 0};
    this.increment = this.increment.bind(this);

  }

  componentWillMount(){
    console.log('Component Mounted');
  }

  componentWillUnmount(){
    console.log('Component Unmounted');
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render(){
    return <div>
      <div className="counter">{this.state.count}</div>
      <button onClick={this.increment}>Increment Me</button>
    </div>;
  }

}

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  click(){
    console.log('Clicked on Header');
  }

  render() {
    return <div id="header"><Counter /></div>;
  }
}

render(<Header />, document.getElementById('root'));

//export default Header
