import React from 'react'
import ReactDOM from 'react-dom'
import checkPropTypes from 'check-prop-types'
import Divider from 'material-ui/Divider'
import MainComponent from '../main'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MainComponent open />, div)
})

it('when required props are not present, it shows an error', () => {
  expect.assertions(1)
  expect(checkPropTypes(MainComponent.propTypes, {}, 'prop')).toBeUndefined()
})

it('should render with Divider component', function() {
  expect(shallow(<MainComponent open />).contains(<Divider/> )).toBe(true)
})