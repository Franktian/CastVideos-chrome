const express = require('express')
const app = express()

app.use('/CastVideos.js', express.static('CastVideos.js'));
app.use('/index.html', express.static('index.html'));
app.use('/images', express.static('images'));
app.use('/imagefiles', express.static('imagefiles'));
app.use('/css', express.static('css'));


app.listen(4000, () => console.log('Example app listening on port 4000!'))