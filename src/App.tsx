import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/login/Login'
import Cart from './pages/cart/Cart'
import Products from './pages/products/Products'
import { createContext, useState } from 'react'

import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

export const ShopContext = createContext();

function App() {
  const [total, setTotal] = useState(0);
  const client = new QueryClient({defaultOptions:{
    queries:{
      refetchOnWindowFocus: false
    }
  }})

  return (
    <>
    <QueryClientProvider client={client}>
      <ShopContext.Provider value={{total, setTotal}}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Products/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Router>
      </ShopContext.Provider>
    </QueryClientProvider>
    </>
  )
}

export default App
