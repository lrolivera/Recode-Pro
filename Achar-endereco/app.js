const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const buscaCep = require('./src/functions/BuscaDados')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.set('view engine', 'ejs')
app.set('views', './src/views')



app.get('/', (req, res) => {
    res.render('index')
})


app.post('/buscaDados', async (req, res) => {
    const { cep } = req.body
    const resultado = await buscaCep(cep)

    res.render('resultado', {dado: resultado})
})



app.listen(4000, ()=>{
  console.log("Servidor Rodando")
})