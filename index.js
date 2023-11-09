import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.get('/oi', (req, res) => {
    res.send('Olá mundo!!!')
})

const lista = ["sao paulo", "vasco", "flamengo", "fluminense"]

app.get("/item", (req, res) => {
    res.send(lista)
})

app.get("/item/:id", (req, res) => {
    const { id } = req.params
    const item = id - 1

    if (!lista[item]) return res.send("não existe")

    res.send(lista[item])
})

app.post("/item", (req, res) => {
    const { nome } = req.body

    lista.push(nome)

    res.send(lista)
})

app.put("/item/:id", (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    const time = id - 1

    if (!lista[time]) return res.send("não existe")

    lista[findIndex] = nome

    res.send(lista)
})

app.delete("/item/:id", (req, res) => {
    const { id } = req.params
    const time = id - 1

    if (!lista[time]) return res.send("não existe")

    lista.splice(time, 1)

    res.send(lista)
})

app.listen(3000, () => {
    console.log("rodou");
})