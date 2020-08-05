import React, {FC} from 'react'
import {useStyle} from './styled'
import {useAbsencesList} from './hooks/useList'
import {CircularProgress, List} from '@material-ui/core'
import {Item} from './item'

export const AbsencesList: FC = () => {
  const {absences} = useAbsencesList()
  const {root} = useStyle()

  return (
    <div className={root}>
      {absences.isLoading
        ? <CircularProgress/>
        : (
          <List dense>
            {absences.list.map((item, index) => <Item key={index} absences={item} deleteItem={() => {}}/>)}
          </List>
        )}
    </div>
  )
}