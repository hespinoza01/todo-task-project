import { Route, Switch } from 'react-router-dom'
// import components
import { PrivateRoute } from 'components'

// import views
import { Home, Login, Register } from 'views'

export default function AppRoutes() {
    return (
        <Switch>
            <Route exact path='/acceso' component={Login} />
            <Route exact path='/registro' component={Register} />
            <PrivateRoute path='/' component={Home} />
        </Switch>
    )
}
