import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import routes from "./routes";
// import withTracker from "./withTracker";
import Page404 from "./components/common/Page404/Page404";
import './App.css';

function App() {
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                // component={withTracker(props => {
                //   return (
                //     <route.component {...props} />
                //   );
                // })}
                component={route.component}
              />
            );
          })}
        </Switch>
    </Router>
  )
}

export default App;
