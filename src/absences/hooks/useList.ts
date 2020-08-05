import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/types'

export function useAbsencesList() {
  const {absences} = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'GET_ABSENCES' })
  }, [dispatch])

  return {
    absences
  }
}