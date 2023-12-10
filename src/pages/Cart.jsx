import { useEffect, useState } from "react";             /* Se importan los hooks useEffect y useState de la biblioteca de React */
import ProductItem from "../components/ProductItem";         /* Se importa el componente ProductItem desde una ubicación relativa  */
import { useSelector } from "react-redux";                /*  Se importa el hook useSelector de la biblioteca react-redux */

const Cart = () => {                                  /*  Se define el componente Cart como una función */
    const cart = useSelector(state => state.cart)           /* Se utiliza el hook useSelector para obtener el estado cart desde el almacén de Redux */
    const [total, setTotal] = useState(0);                    /* Se utiliza el hook useState para crear una variable de estado inicializada en 0 llamada total */
    

    useEffect(()=>{                                     /* Se utiliza el hook useEffect para calcular y actualizar el valor de total cada vez que cambie el estado cart */
        setTotal(
            cart.reduce((acc, product) => acc + product.price, 0).toFixed(2)             /* Esto se logra utilizando el método reduce en el array cart para sumar todos los precios de los productos */ 
        )                                                                                /* y luego se utiliza el método toFixed(2) para redondear el resultado a dos decimales */
    }, [cart])                                                                          /* El componente Cart devuelve un fragmento de código HTML que representa el carrito de compras */

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-black">Carrito</h1>                      {/* Dentro del fragmento de código HTML, se muestra el texto "Carrito" */}
            <ul className="flex flex-col gap-2">
                {cart.map((product) => (                                                   /* Se utiliza un bucle map para iterar sobre cada producto en el estado cart. */
                    <ProductItem product={product} key={product.id}/>                        /* dentro del bucle no se realiza ninguna acción específica */
                )) }
            </ul>
            <span className="text-black"> Total de la compra: ${total}</span>            {/* Después del bucle, se muestra el texto "Total de la compra:" seguido del valor de la variable total */}
        </div>
    )
}



export default Cart;                          /* Se exporta el componente Cart para que pueda ser utilizado en otros archivos */