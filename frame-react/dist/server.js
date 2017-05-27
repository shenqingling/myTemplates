const path = require('path');
var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

//加载静态地址
app.use(express.static(__dirname));

app.use('/v1/**', proxy({
    target: 'https://www.easy-mock.com/mock/5911920dacb959185b0c3cbe/example',
    protocolRewrite: 'https',
    changeOrigin: true,
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(function(req, res) {
    console.log('use' + req.originalUrl);
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(80, function() {
    console.log(`Server is started on http://localhost:80`);
});