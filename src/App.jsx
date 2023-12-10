import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";     /* se importan las siguientes funciones y componentes desde la biblioteca 'react-router-dom': BrowserRouter, Routes, Route y Outlet */
import Navbar from "./components/Navbar";   /* se importa el componente Navbar desde el archivo "./components/Navbar" */
import Home from "./pages/Home";          /* se importa el componente Home desde el archivo "./pages/Home" */
import { Provider } from "react-redux";     /* se importa el componente Provider desde la biblioteca "react-redux" */
import { store } from "./redux/store";      /* se importa el objeto store desde el archivo "./redux/store" */
import Cart from "./pages/Cart";           /*  se importa el componente Cart desde el archivo "./pages/Cart" */
import Login from "./pages/Login";           /* se importa el componente Login desde el archivo "./pages/Login" */
import Auth from "./hoc/Auth";                            /* se importa el componente Auth desde el archivo "./hoc/Auth" */
import Restricted from "./pages/auth/Restricted";          /* se importa el componente Restricted desde el archivo "./pages/auth/Restricted" */
import NewProduct from "./pages/auth/NewProduct";           /* se importa el componente NewProduct desde el archivo "./pages/auth/NewProduct" */

function App() {                       /*  Se define la función App que no recibe ningún parámetro */
  return (                                /* Dentro de la función App se retorna el contenido del componente*/
    <Provider store={store}> 
      <BrowserRouter>
        <main className="min-h-screen min-w-screen bg-gray-100 flex flex-col">
          <Navbar />
          <div className="w-full h-full flex justify-center">
            <div className="container flex text-white p-4">       
              <Routes>                                    
                <Route path="/" element={<Home />} />           {/* Cada ruta se define con el componente Route */}  
                <Route path="/cart" element={<Cart />} />      {/* Las rutas tienen dos propiedades: path, que define la URL de la ruta, y element, que define el componente a renderizar cuando se accede a esa ruta */}
                <Route path="/login" element={<Login />} />    {/* Hay tres rutas definidas: una para el componente Home, una para el componente Cart y una para el componente Login */}

                <Route
                  element={
                    <Auth>                     {/* Después de las rutas, se encuentra un componente Auth que envuelve varias rutas */}
                      <Outlet />
                    </Auth>
                  }
                >
                  <Route path="/restricted" element={<Restricted />} />    {/* Dentro del componente Auth, se encuentran las rutas para Restricted y NewProduct */}
                  <Route path="/new-product" element={<NewProduct />} />
                </Route>
              </Routes>
            </div>
          </div>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;     /*  se exporta la función App como el componente por defecto del archivo */
