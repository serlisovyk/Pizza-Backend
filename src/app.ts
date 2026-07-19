import express from 'express'
import 'dotenv/config.js'
import cors from 'cors'
import helmet from 'helmet'
import productsRouter from './router/productsRouter.js'
import categoriesRouter from './router/categoriesRouter.js'
import sortRouter from './router/sortRouter.js'
import errorHandler from './middlewares/ErrorHandlingMiddleware.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(helmet())

app.use('/products', productsRouter)
app.use('/categories', categoriesRouter)
app.use('/sort', sortRouter)

app.use(errorHandler)

export default app
