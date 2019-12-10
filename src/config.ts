import * as dotenv from 'dotenv'

dotenv.config()

const config = {
  mongoUrl: process.env.MONGO_URL,
  port: process.env.PORT
}

export default config