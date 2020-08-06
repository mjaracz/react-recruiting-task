import React, {FC} from 'react'
import {IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from '@material-ui/core'
import {Favorite} from '@material-ui/icons'
import DeleteIcon from '@material-ui/icons/Delete'
import {useStyle} from '../absences/styled'
import {Member} from './types'

export const MemberItem: FC<{member: Member}> = ({
  member
}) => {
  const {item, itemText, itemDeleteAction} = useStyle()
  return (
    <ListItem className={item}>
      <ListItemAvatar>
        <Favorite/>
      </ListItemAvatar>
      <ListItemText
        className={itemText}
        primary={member.name}
        secondary={`User Id ${member.userId}`}
      />
      <ListItemSecondaryAction className={itemDeleteAction}>
        <IconButton edge="end" aria-label="delete-product" >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
