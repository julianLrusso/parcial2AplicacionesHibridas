import express from 'express'
import projectRoutes from './routes/project.routes.js'

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', projectRoutes)

app.listen(2052, function () { console.log('Me pude conectar a http://localhost:2052') })
