import React from 'react'
import {useList} from './hooks/useList'
import {useStyle} from '../absences/styled'
import {CircularProgress, List} from '@material-ui/core'
import {MemberItem} from './item'

export const MembersList = () => {
  const {members} = useList()
  const {root} = useStyle()
  return (
    <div className={root}>
      {members.isLoading
        ? <CircularProgress size={80}/>
        : (
          <List>
            {members.list.map((member, index) => <MemberItem key={index} member={member} />)}
          </List>
        )}
    </div>
  )
}