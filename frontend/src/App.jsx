import Home from './pages/Home'
import Navbar from './components/Navbar'
import WorkoutForm from './components/WorkoutForm'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'




function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/workoutform' element={<WorkoutForm/>}/>
        </Routes>

      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
