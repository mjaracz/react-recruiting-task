import { makeStyles } from '@material-ui/styles'

export const useStyle = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    overflowY: 'auto',
    minHeight: 400
  },
  item: {
    backgroundColor: '#f6f6f6',
    margin: 20,
    borderRadius: 15,
    width: 350,
  },
  itemText: {
    '& .MuiListItemText-secondary': {
      color: '#174795',
    },
  },
  itemDescText: {
    margin: 8,
  },
  itemDeleteAction: {
    right: 40,
  },
})
