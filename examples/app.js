import React, { Component } from 'react'
import Drawer from '../src'

class App extends Component {
  state = {
    open: false
  }

  toggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render = () => (
    <React.Fragment>
      <button onClick={this.toggle}>
        Toggle Drawer
      </button>
      <Drawer open={this.state.open} />
    </React.Fragment>
  )

}

export default App