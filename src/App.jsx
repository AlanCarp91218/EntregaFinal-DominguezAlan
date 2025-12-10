import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Footer } from "./components/Footer/Footer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'
import './App.css'
import { MainLayouts } from './layouts/MainLayouts'
import { AdminLayouts } from './layouts/AdminLayouts'
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida'
import { Login } from './components/Login/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className="app-content">
            <Routes>
              <Route element={<MainLayouts />}>
                <Route path='/' element={<ItemListContainer titulo={"Bienvenidos al catálogo de productos"} />}/>   
                <Route path='/category/:category' element={<ItemListContainer titulo={"Productos por categoría: "} />}/>         
                <Route path='/detail/:id' element={<ItemDetailContainer />} />
                <Route path='/carrito' element={<Cart/>} />
              </Route>
              
              <Route path='/admin' element={<AdminLayouts/>}>
                <Route index element={<Login />} />
                <Route 
                  path='alta-productos'
                  element={
                    <RutaProtegida>
                      <ProductFormContainer/>
                    </RutaProtegida>
                  }/>
              </Route>
            </Routes>
          </div>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
