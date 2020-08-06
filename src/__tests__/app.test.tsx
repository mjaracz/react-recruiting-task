import React from 'react'
import {render} from '@testing-library/react'
import App from '../App'
import {BrowserRouter} from 'react-router-dom'
import {StoreProvider} from '../storeProvider'

describe('<App/>', () => {
  it('should be defined and match snapshot', function () {
    const {baseElement} = render(
      <BrowserRouter>
        <StoreProvider>
          <App/>
        </StoreProvider>
      </BrowserRouter>
    )
    expect(baseElement).toMatchSnapshot()
  });
});
