import { Route, Switch } from 'react-router-dom'
// import components
import { PrivateRoute, Layout } from 'components'

// import views
import { Home, Login } from 'views'

export default function AppRoutes() {
    return (
        <Switch>
            <Route exact path='/acceso' component={Login} />
            <Layout>
                <PrivateRoute path='/' component={Home} />
            </Layout>
        </Switch>
    )
}
