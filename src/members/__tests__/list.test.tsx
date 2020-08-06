import React from 'react'
import {render} from '@testing-library/react'
import {StoreProvider} from '../../storeProvider'
import {MembersList} from '../list'

describe('<AbsencesList/>', () => {
  it('should be defined and match snapshot', function () {
    const {baseElement} = render(<MembersList/>, { wrapper: StoreProvider })
    expect(baseElement).toMatchSnapshot()
  });
})