# Redefined Drawer

This React Component allows you to show a drawer with different sections and operations.

This component makes use of [Material UI Components](https://github.com/mui-org/material-ui).

## Installation

To install this Component, run `yarn add @reactjspain/drawer` or `npm install @reactjspain/drawer`.

## Usage

To use the component, In your react Application just do

```javascript
import React from 'react'
import Drawer from '@reactjspain/drawer'

const MyComponent = props => {

  return (
    <Drawer open={open}>
      {Hello World}
    </Drawer>
  )

}

export default MyComponent
```

You can also provide additional configuration like:

```javascript
  <Drawer
    open={open}
    user={user}
    sections={[]}
  />
```