import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import { MenuItem } from 'material-ui/Menu'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import ChevronLeft from 'material-ui-icons/ChevronLeft'

class RJSDrawer extends Component {

  close = () => {
    const { onClose } = this.props
    if (onClose) {
      onClose()
    }
  }

  render = () => {
    const { sections, open, children } = this.props

    return (
      <Drawer open={open}>
        <React.Fragment>
          <IconButton onClick={close}>
            <ChevronLeft />
          </IconButton>
        </React.Fragment>
        <Divider />
        {(sections || []).map(section => (
          <a key={section.id} href={section.to}>
            <MenuItem onClick={section.onClick}>
              {section.title}
            </MenuItem>
          </a>
        ))}
        {children}
      </Drawer>
    )
  }

}

RJSDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  sections: PropTypes.array,
  user: PropTypes.object
}

export default RJSDrawer