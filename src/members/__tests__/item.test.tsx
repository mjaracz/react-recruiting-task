import React from 'react'
import {render} from '@testing-library/react'
import {MemberItem} from '../item'
import * as members from '../../api/json_files/absences.json'

describe('<MemberItem/>', () => {
  it('should be defined and match snapshot', function () {
    const {baseElement} = render(<MemberItem member={members.payload[3]} />)
    expect(baseElement).toMatchSnapshot()
  });
})