import React from 'react';
import {Provider} from 'react-redux'
import {store} from './redux/store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {AbsencesList} from './absences/list'
import {HeaderBar} from './header/bar'
import {MembersList} from './members/list'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <HeaderBar />
          <Switch>
            <Route path="/absences" component={AbsencesList}/>
            <Route path="/members" component={MembersList}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
