import React from 'react'

export default class HelloMessage extends React.Component {
  render() {
    return (
      <div onClick={this.clickHandler}>
        Hello {this.props.name}
      </div>
    );
  }

  clickHandler = ()=>{
    console.log('click')
  }
}
