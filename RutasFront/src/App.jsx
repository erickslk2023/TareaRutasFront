
import { Contacto } from './componentes/Contacto'
import { Default } from './componentes/Default'
import { QuienesSomos } from './componentes/QuienesSomos'
import { Inicio } from './componentes/Inicio'
import { Routes, Route } from 'react-router-dom'
import { Menu } from './componentes/Menu'
import { Producto } from './componentes/Productos'
import { Footer } from './componentes/Footer'

function App() {
  
  return (
    <>  
        <Menu />
        <Routes>
          <Route path='/inicio' element={ <Inicio />}  ></Route>
          <Route path='/producto' element={ <Producto />}  ></Route>
          <Route path='/quienesSomos' element={ <QuienesSomos />}  ></Route>
          <Route path='/contacto' element={ <Contacto />}  ></Route>
          <Route path='*' element={ <Default />}  ></Route>
        </Routes>

        <Footer></Footer>
      
    </>
  )
}

export default App
