const Vue = require('vue')
const server = require('express')()
const fs = require('fs')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')
const template = fs.readFileSync(path.resolve('./index.html'), 'utf-8')

let renderer;
const readyPromise = require('./build/server.dev')(server, (bundle, options)=>{
    renderer = createBundleRenderer(bundle, Object.assign(options, {
        template,
        runInNewContext: false,
    }))
})

// server.get('*', (req, res) => {
//   // 页面参数
//   const context = {
//     url: req.url
//   }
//
//   console.log(renderer)
//   renderer.renderToString(context, (err, html) => {
//     if (err) {
//       if(err.code === 404){
//         res.status(404).end('Page Not Found')
//       }else{
//         res.status(500).end('Internal Server Error')
//       }
//     }
//     res.end(html)
//   })
// })

server.get('/', (req, res) => {
    const context = {
        url: req.url
    }
    renderer.renderToString(context, (err, html) => {
        if (err) {
            if(err.code === 404){
                res.status(404).end('Page Not Found')
            }else{
                res.status(500).end('Internal Server Error')
            }
        }
        res.end(html)
    })
})

server.listen(8090)