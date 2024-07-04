const express = require ('express')
const app = express()
const router = require ('./router/router')
const port = 3000

app.set('view engine', 'ejs')
app.use(router)

app.listen(port,() =>{
    console.log(`Escuchando en http://localhost:${port} <= Dale click`);
    console.log ('Servidor corriendo en http:localhost:',port)
})