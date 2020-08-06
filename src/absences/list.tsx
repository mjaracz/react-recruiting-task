import React, {FC} from 'react'
import {useStyle} from './styled'
import {useAbsencesList} from './hooks/useAbsencesList'
import {CircularProgress, List} from '@material-ui/core'
import {AbsenceItem} from './item'

export const AbsencesList: FC = () => {
  const {absences} = useAbsencesList()
  const {root} = useStyle()

  return (
    <div className={root}>
      {absences.isLoading
        ? <CircularProgress size={80}/>
        : (
          <List>
            {absences.list.map((item, index) => <AbsenceItem key={index} absences={item} deleteItem={() => {}}/>)}
          </List>
        )}
    </div>
  )
}