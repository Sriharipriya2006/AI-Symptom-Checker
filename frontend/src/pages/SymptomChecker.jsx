import { useState } from 'react'

function SymptomChecker() {

  const [symptoms, setSymptoms] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [duration, setDuration] = useState('')
  const [severity, setSeverity] = useState('')
  const [temperature, setTemperature] = useState('')
  const [additionalInfo, setAdditionalInfo] = useState('')
const handleAnalyze = () => {

  if (symptoms.trim() === '') {
    setError('Please enter your symptoms.')
    return
  }

  if (duration === '') {
    setError('Please select how long you have had these symptoms.')
    return
  }

  if (severity === '') {
    setError('Please select the severity of your symptoms.')
    return
  }

  setError('')
  setLoading(true)

  const symptomData = {
    symptoms: symptoms,
    duration: duration,
    severity: severity,
    temperature: temperature,
    additionalInfo: additionalInfo
  }

  console.log('Symptom Data:', symptomData)

  setTimeout(() => {

    setResult({
      condition: 'Possible Viral Infection',
      urgency: 'Self-care recommended',
      advice: 'Rest, stay hydrated, and monitor your symptoms.',
      warning: 'If symptoms become severe or worsen, seek medical attention.'
    })

    setLoading(false)

  }, 2000)
}

  return (
    <div className="symptom-page">

      <div className="symptom-container">

        <h1>Tell Us Your Symptoms</h1>

        <p>
          Describe the symptoms you are experiencing.
        </p>

        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Example: I have headache, fever and body aches..."
          rows="7"
        />
        <label>How long have you had these symptoms?</label>

<select
  value={duration}
  onChange={(e) => setDuration(e.target.value)}
>
  <option value="">Select duration</option>
  <option value="Less than 1 day">Less than 1 day</option>
  <option value="1-2 days">1-2 days</option>
  <option value="3-7 days">3-7 days</option>
  <option value="More than 1 week">More than 1 week</option>
  <option value="More than 1 month">More than 1 month</option>
</select>

<label>How severe are your symptoms?</label>

<select
  value={severity}
  onChange={(e) => setSeverity(e.target.value)}
>
  <option value="">Select severity</option>
  <option value="Mild">Mild</option>
  <option value="Moderate">Moderate</option>
  <option value="Severe">Severe</option>
</select>

<label>Temperature (°F)</label>

<input
  type="number"
  value={temperature}
  onChange={(e) => setTemperature(e.target.value)}
  placeholder="Example: 101.5"
/>

<label>Additional Information</label>

<textarea
  value={additionalInfo}
  onChange={(e) => setAdditionalInfo(e.target.value)}
  placeholder="Tell us anything else that may be relevant..."
  rows="4"
/>
        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <button
  onClick={handleAnalyze}
  disabled={loading}
>
  {loading ? '⏳ Analyzing...' : 'Analyze Symptoms'}
</button>

{result && (
  <div className="result-card">

    <h2>Analysis Result</h2>

    <div className="result-item">
      <h3>Possible Condition</h3>
      <p>{result.condition}</p>
    </div>

    <div className="result-item">
      <h3>Urgency</h3>
      <p>{result.urgency}</p>
    </div>

    <div className="result-item">
      <h3>General Guidance</h3>
      <p>{result.advice}</p>
    </div>

    <div className="warning">
      <h3>⚠️ When to Seek Medical Attention</h3>
      <p>{result.warning}</p>
    </div>

  </div>
)}

      </div>

    </div>
  )
}

export default SymptomChecker