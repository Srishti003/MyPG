import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import FoodToday from './pages/FoodToday'
import Admin from './pages/Admin'
import Updates from './pages/Updates'

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<FoodToday />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </AppLayout>
  )
}
