function SymptomChecker() {
  return (
    <div>
      <h1>Symptom Checker</h1>

      <p>
        Tell us about the symptoms you are experiencing.
      </p>

      <textarea
        placeholder="Example: I have headache, fever and body aches..."
        rows="6"
      />

      <br />

      <button>
        Analyze Symptoms
      </button>
    </div>
  )
}

export default SymptomChecker