import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Highlight from './components/Highlight'

const App = () => {
  return (
    <main className='bg-black text-white	'>
      <Navbar />
      <Hero />
      <Highlight />
    </main>
  )
}

export default App
