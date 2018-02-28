import React, { Component }  from 'react'
import ReactDOM from 'react-dom'
import Drawer from '../main'
import { AppContainer } from 'react-hot-loader'

class Example extends Component {
  state = {
    open: false
  }

  open = () => {
    this.setState({open: true})
  }

  close = () => {
    this.setState({open: false})
  }

  render = () => {
    const { open } = this.state
    const { children } = this.props

    return (
      <React.Fragment>
        <button onClick={this.open}>Open Drawer</button>
        <Drawer open={open} onClose={this.close}>
          {'hola'}
          {children}
        </Drawer>
      </React.Fragment>
    )
  }

}

ReactDOM.render(
  <AppContainer>
    <Example />
  </AppContainer>,
  document.getElementById('root'),
)