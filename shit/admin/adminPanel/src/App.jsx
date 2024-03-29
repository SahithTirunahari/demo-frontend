import Login from './pages/Login'
import PublicRoute from './components/PublicRoutes'
import './app.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Registration from './pages/Registration'
import CompanyProfile from './pages/companyProfile'
import OrdersPage from './pages/OrdersPage'
import EmployeesPage from './pages/EmployeesPage'
import InvoiceForm from './pages/InvoiceForm'

import Customers from './pages/customers'
import RawMaterials from './pages/RawMaterials'
import Home from './pages/Home'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          
                  <Login />
         
        } />
        <Route path='/register' element={
        
        
              <Registration />
        
        } />
        <Route path='/home' element={
        
        <CompanyProfile>
              <Home />
        </CompanyProfile>
        } />
        <Route path='/companyprofile' element={<CompanyProfile/>} />
        <Route path='/orders' element={
          <CompanyProfile>
                <OrdersPage/>
          </CompanyProfile>
        }/>
        <Route path='/employee' element={
          <CompanyProfile>
          <EmployeesPage/>
          </CompanyProfile>
        }/>
        <Route path='/customers' element={
          <CompanyProfile>
                <Customers />
          </CompanyProfile>
        }/>
        <Route path='/rawMaterials' element={
          <CompanyProfile>
                <RawMaterials />
          </CompanyProfile>
        }/>
        <Route path="/invoice" element={
        <InvoiceForm/>
        } />
        
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

