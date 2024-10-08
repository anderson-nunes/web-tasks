import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Tasks from "../pages/tasks"
import ProtectedRoute from './ProtectedRoute'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route element={<ProtectedRoute />} >
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router