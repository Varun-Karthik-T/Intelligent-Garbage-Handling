import LandingPage from "./pages/landingpage"
import AboutPage from "./pages/aboutpage"
import DashboardPage from "./pages/dashboardpage"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

      </Routes>
    </Router>


      
    </>
  )
}

export default App
