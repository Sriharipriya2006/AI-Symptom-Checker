import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import SymptomChecker from './pages/SymptomChecker'

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        {/* Navigation Bar */}
        <nav className="navbar">
          <h2>🩺 AI Symptom Checker</h2>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/symptom-checker">Symptom Checker</Link>
          </div>
        </nav>

        {/* Pages */}
        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <section className="hero-section">

                <div className="hero-content">

                  <h1>Understand Your Symptoms</h1>

                  <p>
                    Get AI-powered health guidance based on the
                    symptoms you provide.
                  </p>

                  <Link to="/symptom-checker">
                    <button className="primary-button">
                      Check Your Symptoms
                    </button>
                  </Link>

                  <p className="disclaimer">
                    ⚠️ This tool provides general health information
                    and does not replace professional medical advice.
                  </p>

                </div>

              </section>
            }
          />

          {/* Symptom Checker Page */}
          <Route
            path="/symptom-checker"
            element={<SymptomChecker />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App