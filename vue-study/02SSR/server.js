const fs = require('fs')
const path = require('path')
const server = require('express')()
const {createBundleRenderer} = require('vue-server-renderer')

// server.get('*', (req, res) => {
// const filePath = path.join(__dirname,'./dist/bundle.server.js')
// const file = fs.readFileSync(filePath, 'utf8')
// const renderer = createBundleRenderer(file)
// const context = { url: req.url }
// renderer.renderToString(context, (err, html) => {
//   if (err) {
//     console.log(err)
//     res.status(500).end('Internal Server Error')
//     return
//   }
//   console.log(html)
//   res.end(html)
// })
// })

server.get('/:id', (req, res) => {
    const context = {
        url: req.params.id
    }
    htmlRender(context, res)
})

server.get('/', (req, res) => {
    const context = {
        url: req.url
    }
    htmlRender(context, res)
})

function htmlRender(context, res) {
    const filePath = path.join(__dirname, './dist/bundle.server.js')
    const file = fs.readFileSync(filePath, 'utf8')
    const renderer = createBundleRenderer(file)
    renderer.renderToString(context, (err, html) => {
        if (err) {
            console.log(err)
            res.status(500).end('Internal Server Error')
            return
        }
        // console.log(html)
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf-8'
        });
        res.end(html)
    })
}

server.listen(8090, function() {
    console.log('server started on port 8090')
})