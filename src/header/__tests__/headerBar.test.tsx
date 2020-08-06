import React from 'react'
import {render} from '@testing-library/react'
import {HeaderBar} from '../bar'
import {BrowserRouter} from 'react-router-dom'

describe('<HeaderBar/>', () => {
  it('should be defined and match snapshot', function () {
    const { baseElement } = render(<HeaderBar/>, { wrapper: BrowserRouter })
    expect(baseElement).toMatchSnapshot()
  });
})