import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from "./pages/index"
import Topbar from "./components/topbar"
import Demo from "./pages/demo"
import Contact from "./pages/contact"
import Features from "./pages/features"
import Pricing from './pages/pricing'
import Sidebar from './components/sidebar'
function App() {
  return (
    <div className="App">
    <Router>
    <Sidebar />
    
    <Topbar />
   
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/demo' element={<Demo />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/features' element={<Features />} />
            <Route path='/pricing' element={<Pricing />} />

         </Routes>
 
      </Router>
        </div>
  );
}

export default App;
