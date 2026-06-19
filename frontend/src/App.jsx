import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar'
import TranslatorPage from './pages/TranslatorPage'
import ResearchPage from './pages/ResearchPage'
import './App.css'

function App() {
  const [page, setPage] = useState("translator");

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans">
      <Navbar page={page} setPage={setPage} />
      {page === "translator" ? <TranslatorPage /> : <ResearchPage />}
    </div>
  );
}

export default App
