const express= require('express')
const port = 3500
const app = express()

app.get('/products',(req, res)=>{
    //validate
    //query
    //process.data
    //other actions on data

    res.send('listar productos')
})

app.post('/products',(req, res)=>{
    res.send('creando productos')

})


app.put('/products',(req, res)=>{
    res.send('actualizando productos')

})

app.put('/products',(req, res)=>{
    res.send('actualizando productos')

})

app.delete('/products',(req, res)=>{
    res.send('eliminado productos')

})

app.patch('/products',(req, res)=>{
    res.send('actualizando una parte de productos')

})


app.listen(port)
    console.log(`Server on port ${port}`)
