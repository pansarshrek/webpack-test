import React from 'react'

class Comp1 extends React.Component {

  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  toggle(e) {
    this.setState({ open: !this.state.open })
  }

  getText() {
    if (this.state.open) {
      return (<div>I'm open!</div>)
    } else {
      return (<div>Not open!</div>)
    }
  }

  render() {
    return (
      <div>
        <p>Hello, this is component 1!</p>
        <button onClick={this.toggle.bind(this)}>Open me</button>
        {this.getText()}
      </div>
    )
  }
}

export default Comp1
