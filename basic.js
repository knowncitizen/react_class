import React from 'react';
import {render} from 'react-dom';

class Header extends React.component {
  constructor(props){
    super(props);
  }

  click(){
    console.log('Clicked on Header');
  }

  render(){
    return <div onClick={this.click}>My Header</div>;
  }

}

render(<Header />, document.getElementById('root'));
