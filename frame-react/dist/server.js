const path = require('path');
var express = require('express');

var app = express();
//加载静态地址
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8000, function() {
    console.log(`Server is started on http://localhost:8000`);
});