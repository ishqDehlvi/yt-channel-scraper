// Imports
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// Static Files
app.use(express.static('public'));
// Specific folder example
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))

app.get('', (req,res) =>{
    res.sendFile(__dirname + '/views/index.html')
})


app.post('/', (req,res) =>{
  var url = req.body.url
  console.log(url)
})

app.listen(port, () => console.info(`App listening on port ${port}`))