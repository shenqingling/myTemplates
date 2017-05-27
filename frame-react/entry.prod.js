import { Router, browserHistory } from 'react-router'
import { render } from 'react-dom'
// import routes from './app/routes'

let routes = {
    childRoutes: [{
        path: "/",
        component: require('./src/app').default,
        indexRoute: {
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('./src/index').default)
                })
            }
        },
        childRoutes: [{
            path: "topic",
            component: require('./src/topic/topic').default,
        }]
    }]
}

render(<Router
               history={ browserHistory }
               routes={ routes } />, document.getElementById('app'))