import React, {FC} from 'react'
import {useStyle} from './styled'
import {useList} from './hooks/useList'
import {CircularProgress, List} from '@material-ui/core'
import {AbsenceItem} from './item'

export const AbsencesList: FC = () => {
  const {absences} = useList()
  const {root} = useStyle()

  return (
    <div className={root}>
      {absences.isLoading
        ? <CircularProgress size={80}/>
        : (
          <List>
            {absences.list.map((item, index) => <AbsenceItem key={index} absences={item} />)}
          </List>
        )}
    </div>
  )
}