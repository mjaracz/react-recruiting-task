import React, {FC, Fragment} from 'react'
import {AbsencesList} from './absences/list'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {HeaderBar} from './header/bar'

export const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <HeaderBar/>
        <Switch>
          <Route path="/absences" component={AbsencesList} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  )
}