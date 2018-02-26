import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import Drawer from '../drawer'

const AppC = () => <div>Hello World!! 10aa</div>
const HotApp = hot(module)(AppC)

/*class App extends Component {
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
      {'holaaaaaaa'}
      <button onClick={this.toggle}>
        Toggle Drawer
      </button>
      <Drawer open={this.state.open} />
    </React.Fragment>
  )

}*/


ReactDOM.render(<HotApp />, document.getElementById('root'))

export default HotApp