const fs = require('fs')
const path = require('path')
const server = require('express')()
const { createBundleRenderer } = require('vue-server-renderer')

server.get('*', (req, res) => {
  const filePath = path.join(__dirname,'./dist/bundle.server.js')
  const file = fs.readFileSync(filePath, 'utf8')
  const renderer = createBundleRenderer(file)
  renderer.renderToString((err, html) => {
    if (err) {
      console.log(err)
      res.status(500).end('Internal Server Error')
      return
    }
    console.log(html)
    res.end(html)
  })
})

server.listen(8090)

// const express = require('express')
// const app = express()
// const fs = require('fs');
// const path = require('path');
// const vueServerRenderer = require('vue-server-renderer');
// app.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
//     else next();
// });
// app.get('/', function (req, resp) {
//     const filePath = path.join(__dirname, './dist/main.js')
//     const code = fs.readFileSync(filePath, 'utf8');
//     const bundleRenderer = vueServerRenderer.createBundleRenderer(code);
//     bundleRenderer.renderToString((err, html) => {
//         if (err) {
//             console.log(err.message);
//             console.log(err.stack);
//         }
//         console.log(html);
//         resp.send(html)
//     });
// })
// app.listen(8090, () => {
//     console.log('Listen 8090')
// })