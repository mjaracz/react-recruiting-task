import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/types'
import {MemberState} from '../types'

export const useList = (): {members: MemberState}  => {
  const dispatch = useDispatch()
  const {members} = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch({ type: 'GET_MEMBERS' })
  }, [dispatch])

  return {
    members
  }
}