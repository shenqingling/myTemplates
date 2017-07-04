const fs = require('fs')
const path = require('path')
const server = require('express')()
const { createBundleRenderer } = require('vue-server-renderer')

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
    const filePath = path.join(__dirname,'./dist/bundle.server.js')
    const file = fs.readFileSync(filePath, 'utf8')
    const renderer = createBundleRenderer(file)
    console.log(req.params.id)
    const context = { url: req.params.id }
    renderer.renderToString(context, (err, html) => {
        if (err) {
            console.log(err)
            res.status(500).end('Internal Server Error')
            return
        }
        console.log(html)
        res.end(html)
    })
})

server.get('/', (req, res) => {
    const filePath = path.join(__dirname,'./dist/bundle.server.js')
    const file = fs.readFileSync(filePath, 'utf8')
    const renderer = createBundleRenderer(file)
    const context = { url: req.url }
    renderer.renderToString(context, (err, html) => {
        if (err) {
            console.log(err)
            res.status(500).end('Internal Server Error')
            return
        }
        console.log(html)
        res.end(html)
    })
})



server.listen(8090, function(){
  console.log('server started on port 8090')
})