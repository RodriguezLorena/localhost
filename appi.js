const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.use("/" ,(req, res, next)=>{
    console.log(req.path);
    next()
})
app.get('/1', (req, res) => {
    res.send('Hello World!')
  })
app.get('/', (req, res) => {
  res.send('Wellcome!')
})
let lore= "lore"
app.get('/2', (req, res) => {
    res.send(lore)
  })

const productos= [
    {
        id:1,
        producto: "pizza",
        precio: 800,
        img: "https://res.cloudinary.com/lorenacoder/image/upload/v1636844310/morenaweb/imagenesMenu/pizza-gacad39753_640_vpl2ia.jpg"
    },
    {
        id:2,
        producto: "hamburguesa",
        precio: 500,
        img: "https://res.cloudinary.com/lorenacoder/image/upload/v1636844309/morenaweb/imagenesMenu/hamburguesa_hqsdtl.jpg"
    },
    {
        id:3,
        producto: "sandwich",
        precio: 600,
        img: "https://res.cloudinary.com/lorenacoder/image/upload/v1636844310/morenaweb/imagenesMenu/sandwich_jejycz.jpg"
    },
    {
        id:4,
        producto: "tostado",
        precio: 450,
        img: "https://res.cloudinary.com/lorenacoder/image/upload/v1636844310/morenaweb/imagenesMenu/tostados_jk4qox.jpg"
    },
    {
        id:5,
        producto: "picadas",
        precio: 1600,
        img: "https://res.cloudinary.com/lorenacoder/image/upload/v1636844310/morenaweb/imagenesMenu/picadas_z0caam.jpg"
    },
    
]
app.get('/carta', (req, res) => {
    res.send(productos)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

