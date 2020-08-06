import React from 'react'
import {render} from '@testing-library/react'
import {StoreProvider} from '../../storeProvider'
import {AbsencesList} from '../list'

describe('<AbsencesList/>', () => {
  it('should be defined and match snapshot', function () {
    const {baseElement} = render(
      <StoreProvider>
        <AbsencesList/>
      </StoreProvider>
    )
    expect(baseElement).toMatchSnapshot()
  });
})