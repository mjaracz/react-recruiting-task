import React from 'react'
import {render} from '@testing-library/react'
import {AbsenceItem} from '../item'
import * as absences from '../../api/json_files/absences.json'

describe('<AbsenceItem/>', () => {
  it('should be defined and match snapshot', function () {
    const {baseElement} = render(<AbsenceItem absences={absences.payload[3]} />)
    expect(baseElement).toMatchSnapshot()
  });
})