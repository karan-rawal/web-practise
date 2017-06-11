import React from 'react';

export class Home extends React.Component{
  render(){

    return(
      <div>
        <p>In a new component.</p>
        <p>Your name is {this.props.name}, your age is {this.props.age}</p>
      </div>
    )
  }
}

Home.propTypes = {
  name : React.PropTypes.string,
  age : React.PropTypes.number
};
