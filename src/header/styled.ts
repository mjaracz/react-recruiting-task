import {makeStyles} from '@material-ui/core/styles'

export const useStyle = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    backgroundColor: '#1f292b'
  },
  barItem: {
    display: 'flex',
    textDecoration: 'none',
    width: 200,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    transition: '.4s',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#4a9bfd',
    }
  }

})