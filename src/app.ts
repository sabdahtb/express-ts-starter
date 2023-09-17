import cors from 'cors'
import helmet from 'helmet'
import express, { type Request, type Response, type Application } from 'express'

const app: Application = express()

app.use(
  cors({
    // origin: ['*'],
    credentials: true,
  }),
)

app.use(helmet())

app.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server')
})

export default app
