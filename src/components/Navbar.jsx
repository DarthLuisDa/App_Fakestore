import { Link, useNavigate } from "react-router-dom";   /* importa los componentes Link y useNavigate de la biblioteca "react-router-dom" */
import { useLogin } from "../hooks/useLogin";     /* importa el hook useLogin desde el archivo  "../hooks/useLogin" */

const Navbar = () => {    /* Se define un componente llamado Navbar */
  const { user, logout } = useLogin();   /* Dentro del componente Navbar se utiliza el hook useLogin para obtener el usuario y la función logout */
  const navigate = useNavigate();     /* Se utiliza el hook useNavigate para obtener la función navigate */
  const [cartCount, setCartCount] = useState(0);   /* Se utiliza el hook useState para crear una variable de estado llamada cartCount, con un valor inicial de 0 */

  const handleLogout = async () => {    /* Se define una función llamada handleLogout que se ejecuta cuando se hace clic en el botón de cerrar sesión */
    await logout();     /*  Dentro de handleLogout se llama a la función logout */   
    navigate("/login");     /* y luego se redirige al usuario a la página de inicio de sesión */
  };

  return (                  /* El componente Navbar retorna un fragmento de código que representa la barra de navegación */
    <nav className="bg-black p-4 w-full flex justify-center">
      <div className="container flex justify-between items-center text-white px-4">
        <h1 className="text-xl">FakeStore</h1>                 {/* El título "FakeStore" se muestra en la barra de navegación */}

        <Link to="/cart">
          Carrito <span className="bg-red-500 text-white rounded-md px-2">{cartCount}</span>
          
        </Link>     {/* Se muestra el texto "Carrito" seguido de la variable de estado cartCount */}

        {!user ? (           /* Dependiendo de si hay un usuario autenticado o no, */
          <Link to="/login">Iniciar sesión</Link>         /*  se muestra el texto "Iniciar sesión" */
        ) : (
          <div className="flex gap-2 items-center">
            <span>{user.email}</span>     {/* o el correo electrónico del usuario */}
            <button
              className="text-red-500 underline p-2 rounded-md hover:text-red-600"
              onClick={handleLogout}
            >
              Cerrar sesión             {/* seguido del texto "Cerrar sesión" */}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};


/* export default Home; */


/* import React, { useEffect, useState } from "react";
import { useFakestoreApi } from "../hooks/useFakestoreApi";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";
import { FormControl } from "react-bootstrap";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: products, loading, error, getProducts } = useFakestoreApi();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const get = async () => {
      const unsubscribe = await getProducts();

      return () => {
        if (typeof unsubscribe === "function") {
          unsubscribe();
        }
      };
    };

    get();
  }, []);

  return (
    <>
      <Navbar>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Navbar>

      <h1>Home</h1>

      {loading ? "Cargando..." : null}
      {error ? "Hubo un error" : null}
      {products ? (
        products
          .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductItem product={product} />
            </Link>
          ))
      ) : null}
    </>
  );
};

export default Navbar; */

/* export default Home; */




