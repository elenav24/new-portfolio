import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Page from './components/Page'

function App() {
  const routeColors: Record<string, string> = {
    "/": "#EF537E",
    "/about": "#FFD586",
    "/experience": "#9CD7F9",
  };

  const location = useLocation();
  const pageColor = routeColors[location.pathname] ?? "#fff";

  return (
    <div className='site-container'>
      <div className='site-content'>
        <Navbar />
        <Page color={pageColor}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Page>
      </div>
      <Footer />
    </div>
  )
}

export default App
