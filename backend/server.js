const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'AI Symptom Checker Backend is running'
  })
})
app.post('/api/analyze', (req, res) => {
  const {
    symptoms,
    duration,
    severity,
    temperature,
    additionalInfo
  } = req.body

  console.log('Received symptom data:')
  console.log(req.body)

  res.json({
    condition: 'Possible Viral Infection',
    urgency: 'Self-care recommended',
    advice: 'Rest, stay hydrated, and monitor your symptoms.',
    warning: 'If symptoms become severe or worsen, seek medical attention.'
  })
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})