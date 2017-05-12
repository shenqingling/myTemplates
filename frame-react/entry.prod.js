import { Router, browserHistory } from 'react-router'
import { render } from 'react-dom'
// import routes from './app/routes'

let routes = {
    childRoutes: [{
        path: "/",
        component: require('./src/app').default,
        childRoutes: [{
            path: "repos",
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('./src/component/repos').default)
                })
            }
        }, {
            path: "about",
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('./src/component/about').default)
                })
            }
        }]
    }]
}

render(<Router
               history={ browserHistory }
               routes={ routes } />, document.getElementById('app'))