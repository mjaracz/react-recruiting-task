import React, { FC } from 'react'
import {useStyle} from './styled'
import {Link} from 'react-router-dom'

export const HeaderBar: FC = () => {
  const {root, barItem} = useStyle()
  return (
    <nav className={root}>
      <Link to="/absences" className={barItem}>absences</Link>
      <Link to="/members" className={barItem}>members</Link>
    </nav>
  )
}