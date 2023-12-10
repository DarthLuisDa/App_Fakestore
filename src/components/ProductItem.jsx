import { useDispatch } from "react-redux";     /* importamos la función useDispatch del módulo "react-redux" */
import { addToCart } from "../redux/cartSlice";    /* importamos la acción addToCart del archivo "cartSlice.js" ubicado en la carpeta "redux" */

const ProductItem = ({product}) => {    /* definimos el componente funcional ProductItem que acepta un objeto product como argumento */
    const dispatch = useDispatch();      /* obtenemos una referencia a la función dispatch llamando a la función useDispatch()*/
   
    const handleAddToCart = () => {        /* definimos la función handleAddToCart que se ejecutará cuando se haga clic en el botón de añadir al carrito */
        dispatch(addToCart(product));        /* llamamos a la función dispatch pasando la acción addToCart y el objeto product como argumentos */
        alert("Producto añadido al carrito" )           /* mostramos una alerta indicando que el producto ha sido añadido al carrito  */
    }
    

    return (<li className="flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow">         {/* retornamos el JSX que representará a cada elemento del producto */}
        <img src={product.image} className="w-20" />
        <span className="text-center font-bold">{product.title}</span>            {/* mostramos el título del producto */}
        <span className="text-center font-bold text-sm">${product.price}</span>          {/* mostramos el precio del producto */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddToCart}  
            
            >Añadir al Carrito </button>             {/* mostramos el botón "Añadir al Carrito" */}
      </li>)
}


export default ProductItem;   /* exportamos el componente ProductItem */