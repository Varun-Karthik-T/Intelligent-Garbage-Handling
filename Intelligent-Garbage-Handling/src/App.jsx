import { Button } from "@/components/ui/button"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import DashboardPage from "@/pages/dashboardpage";
import AboutPage from "@/pages/aboutpage";
import LandingPage from "@/pages/landingpage";
import MapPage from "@/pages/mappage.jsx";


export default function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/map" element={<MapPage/>}/>
        </Routes>
        </Router>
    </>
  )
}
