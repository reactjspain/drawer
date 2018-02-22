import React from 'react'
import ReactDOM from 'react-dom'
import checkPropTypes from 'check-prop-types'
import Divider from 'material-ui/Divider'
import Drawer from '.'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Drawer open />, div)
})

it('when required props are not present, it shows an error', () => {
  expect.assertions(1)
  expect(checkPropTypes(Drawer.propTypes, {}, 'prop')).toBeDefined()
})

it('should render with Divider component', function() {
  expect(shallow(<Drawer open />).contains(<Divider/> )).toBe(true)
})