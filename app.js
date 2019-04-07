// 載入資源
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const trashTalkGenerator = require('./trash-talk-generator.js')
const careerObjectGenerator = require('./career-object-generator.js')
const port = 3000

// 設定模板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定靜態檔案
app.use(express.static('public'))

// 設定 bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// 處理請求與回應
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const trashTalk = trashTalkGenerator(req.body)
  // 將 career 存成物件，保留選單功能會使用到
  const careerObject = careerObjectGenerator(req.body.target)
  res.render('index', { trashTalk, careerObject })
})

// 啟動並監聽
app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})