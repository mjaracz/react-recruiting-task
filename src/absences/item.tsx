import React, { FC } from 'react'
import { ItemProps } from './types'
import { useStyle } from './styled'
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import { Deck } from '@material-ui/icons'
import DeleteIcon from '@material-ui/icons/Delete'

export const Item: FC<ItemProps> = ({
  deleteItem,
  absences,
}) => {
  const { item, itemText, itemDescText, itemDeleteAction } = useStyle()
  return (
    <ListItem className={item}>
      <ListItemAvatar>
        <Avatar>
          <Deck />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        className={itemText}
        primary={absences.type}
        secondary={`From ${absences.startDate} to ${absences.endDate}`}
      />
      <ListItemText
        className={itemDescText}
        primary={`User ID: ${absences.userId}`}
      />
      <ListItemSecondaryAction className={itemDeleteAction}>
        <IconButton edge="end" aria-label="delete-product" >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
