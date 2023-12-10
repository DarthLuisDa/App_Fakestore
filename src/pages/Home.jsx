import { useEffect } from "react";                              /*  Importa la función useEffect desde la librería "react" */
import { useFakestoreApi } from "../hooks/useFakestoreApi";     /* Importa la función useFakestoreApi desde el archivo "../hooks/useFakestoreApi" */
import ProductItem from "../components/ProductItem";             /* Importa el componente ProductItem desde el archivo "../components/ProductItem" */
import { Link } from "react-router-dom";                        /* Importa el componente Link desde la librería "react-router-dom" */

const Home = () => {                                                               /* Declara un componente llamado "Home" */
  const { data: products, loading, error, getProducts } = useFakestoreApi();           /* Desestructura la variable "data" del objeto retornado por la función useFakestoreApi y la asigna a una variable llamada "products" */ 
                                                                                     /*  También se desestructuran las variables "loading", "error" y "getProducts */
  useEffect(() => {                                                                 /*  Utiliza el hook useEffect para ejecutar una función asíncrona cuando el componente se monta */
    const get = async () => {                                                      /* Dentro de la función, se llama a la función getProducts de useFakestoreApi, */
      const unsubscribe = await getProducts();                                      /* y se almacena el valor retornado en la variable "unsubscribe". */
      return () => {                                                                /* Luego se retorna una función que se ejecutará cuando el componente se desmonte, */
        if (typeof unsubscribe === "function") {                                     /* La cual verifica si "unsubscribe" es una función y la llama si es así. */
          unsubscribe();
        }
      };
    };
    get();
  }, []);

  return (
    <>
      <div className="text-black">                                      {/*  Renderiza el texto "Home" */}
        <h1>Home</h1>
        {loading ? <span>Cargando...</span> : null}                                {/* Renderiza el texto "Cargando..." si la variable "loading" es verdadera */}
        {error ? <span>Hubo un error</span> : null}                                 {/* Renderiza el texto "Hubo un error" si la variable "error" es verdadera */}
        {products ? (
          <ul className="grid grid-cols-5 gap-4 ">                                      {/* Renderiza el componente ProductItem para cada elemento en la variable "products" */}
            {products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </ul>
        ) : null}
      </div>
      {/* Fixed floating button */}
      <Link
        to="/new-product"
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        +
      </Link>
    </>
  );
};

export default Home;        /* Exporta el componente Home por defecto */
