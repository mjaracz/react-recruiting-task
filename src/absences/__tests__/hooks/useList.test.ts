import React from 'react'
import * as ReactRedux from 'react-redux'
import {renderHook, act} from '@testing-library/react-hooks'
import {useList} from '../../hooks/useList'
import {StoreProvider} from '../../../storeProvider'

describe('hooks/useList', () => {
  let spyOnEffect
  let spyOnDispatch
  let testedHook
  beforeEach(() => {
    spyOnEffect = jest.spyOn(React, 'useEffect')
    spyOnDispatch = jest.spyOn(ReactRedux, 'useDispatch')
    testedHook = renderHook(() => useList(), {
      wrapper: StoreProvider
    })
  })
  describe('when hook is rerender', () => {
    it('should call dispatch and useEffect', function () {
      act(() => {
        testedHook.rerender()
      })
      expect(spyOnDispatch).toHaveBeenCalled()
      expect(spyOnEffect).toHaveBeenCalled()
    })
    it('should return absences redux state', function () {
      act(() => {
        testedHook.rerender()
      })
      expect(testedHook.result.current.absences).toEqual({isLoading: true, list: [], error: {}})
    })
  })
})
