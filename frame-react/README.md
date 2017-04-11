1. 新建目录frame-react
2. `cd frame-react`
3. `npm init`
---
### webpack初始化配置
1. `npm install webpack webpack-dev-server --save-dev`
2. `npm install babel-core babel-preset-env babel-loader --save-dev`
3. 新建 ~/index.html
    ```
    <html>
      <head>
        <title>webpack2 demo</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="./bundle.js"></script>
      </body>
    </html>
    ```
4. 新建 ~/src/index.js
    ```
    function component () {
      var element = document.createElement('div');
      element.innerHTML = "hello webpack";
      return element;
    }
    
    document.body.appendChild(component());
    ```
5. 新建 ~/webpack.config.js
    ```
    module.exports = {
        entry: [
            './src/entry.js',
        ],
        output: {
            filename: 'bundle.js'
        },
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }]
        }
    }
    ```
6. 新建 ~/.babelrc
    ```
    {
       presets: ['env']
    }
    ```
7. 运行 `webpack-dev-server`
8. 打开浏览器 `http://localhost:8080`，查看页面效果


### 加入react
1. `npm install babel-preset-react --save-dev`
2. `npm install react react-dom react-route react-router-dom --save-dev`
    - ==react-router4.0中：react-router-dom 从 react-router package中拆离出来了！！4.0大改版！！==
3. 修改 ~/.babelrc
    ```
    {
       presets: ['env','react']
    }
    ```
4. 新建 ~/entry.js
    ```
    import React from 'react'
    import { render } from 'react-dom'
    import { HashRouter,Route} from 'react-router-dom';
    import App from './src/index.js';
    import Repos from './src/component/repos.js';
    import About from './src/component/about.js';
    
    render((
        <HashRouter>
          <div>
            <Route
              path="/"
              component={ App } />
            <Route
               path="/repos"
               component={ Repos } />
            <Route
               path="/about"
               component={ About } />
          </div>
        </HashRouter>
        ), document.getElementById('app'));
    ```
5. 修改 ~/src/index.js
    ```
    import React,{ Component } from 'react';
    
    export default class App extends Component {
        render() {
            return <div>
                       Apwwwp
                   </div>
        }
    }
    ```
    
    新建 ~/src/repos.js 
    ```
    import React,{ Component } from 'react';

    export default class Repos extends Component {
        render() {
            return <div>
                       Repos
                   </div>
        }
    }
    ```
    
    新建 ~/src/about.js
    ```
    import React,{ Component } from 'react';

    export default class About extends Component {
        render() {
            return <div>
                       Aboutdddd
                   </div>
        }
    }
    ```
6. 运行 webpack-dev-server