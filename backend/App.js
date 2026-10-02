require('dotenv').config()
const cors = require('cors')
const express = require('express')
const { rateLimit } = require('express-rate-limit')

const User = require('./Router/User.js')
const Transactions = require('./Router/Transactions.js')
const passport = require('./config/passport.js')

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize());

app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                 // 100 requests per IP per window
}))

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' })
})

app.use('/transaction' , Transactions)
app.use('/user' , User)

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})