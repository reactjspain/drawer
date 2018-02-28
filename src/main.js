/*
 * Copyright (c) 2018
 *
 * Author: Jose Ramos <jlramosr@gmail.com>
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import { MenuItem } from 'material-ui/Menu'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import ChevronLeft from 'material-ui-icons/ChevronLeft'

/**
# Redefined Drawer for React Apps

This React Component allows you to show a drawer with different sections and operations.

This component makes use of [Material UI Components](https://github.com/mui-org/material-ui).

## Installation

To install this Component, run `npm install @reactjspain/drawer`

## Usage

*/
class RJSDrawer extends Component {

  /**
   * Close drawer.
   */
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
          <IconButton onClick={this.close}>
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
  /**
   * Indicates if drawer is open or not.
   */
  open: PropTypes.bool.isRequired,
  /**
   * Function executed when drawer closes.
   */
  onClose: PropTypes.func,
  /**
   * Set of sections showed in drawer.
   */
  sections: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Section unique identifier.
     */
    id: PropTypes.string.isRequired,
    /**
     * Redirection path when section is clicked.
     */
    to: PropTypes.string.isRequired,
    /**
     * Redirection path when section is clicked.
     */
    title: PropTypes.string.isRequired,
    /**
     * Aditional function executed when section is clicked.
     */
    onClick: PropTypes.func
  })),
  /**
   * User information showed at the top of the drawer.
   */
  user: PropTypes.object
}

export default RJSDrawer