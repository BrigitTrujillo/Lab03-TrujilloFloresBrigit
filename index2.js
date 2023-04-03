const express= require('express')
const port = 3500
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello Word')
})

app.get('/myfile',(req,res)=>{
       res.sendFile('/arquitectura.jpg',{
         root:__dirname
       })
})


app.get('/user',(req, res)=>{
    res.json({ nombres:"Brigit",
        apellido:"Trujillo",
        edad: 20,
        points: [1,2,3],
        adress: {
            cuidad: "Lima - Peru",
            distrito: "Santa Anita"
        }
    })
})



app.get('/isAlive',(req, res)=>{
    res.sendStatus(204)
})


app.listen(port)
    console.log(`Server on port ${port}`)