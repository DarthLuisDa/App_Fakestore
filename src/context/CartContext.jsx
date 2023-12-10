import {createContext, useContext, useReducer, useEffect } from "react";   /* importa las funciones y componentes necesarios de la librería React */

const CartContext = createContext();          /* crea un contexto llamado CartContext utilizando la función createContext de React */

export const useCartContext = () => useContext(CartContext);   /*  exporta una función llamada useCartContext que hace uso de useContext para acceder al contexto CartContext */

const cartReducer = (state, action) => {   /* función llamada cartReducer que recibe un estado y una acción y retorna un nuevo estado basado en el tipo de acción */
    switch(action.type) {                    /* definen los posibles casos para el switch de cartReducer, */
        case "ADD_TO_CART":                      /* añadiendo un producto al carrito */
            return {...state, cart: [...state.cart, action.payload]};
        case "REMOVE_FROM_CART":                      /* y eliminando un producto del carrito  */
            return {...state, cart: state.cart.filter(product => product.id !== action.payload)}
        default:
            return state;
    }
}

setCartCount(cartCount + 1);

const initialValue= {                /*  initialValue define el valor inicial del estado del carrito,  */
    cart: JSON.parse(localStorage.getItem("cart") ?? "[]")  /* obteniendo los datos almacenados en el localStorage o creando un arreglo vacío si no hay datos */
}


export const CartProvider = ({children}) => {             /* CartProvider es un componente que recibe una prop children */
    const [state, dispatch] = useReducer(cartReducer, initialValue)       /* y utiliza useReducer para manejar el estado del carrito */

    useEffect(() => {            /* useEffect se utiliza para */
        localStorage.setItem("cart", JSON.stringify(state.cart))         /* guardar los cambios del carrito en el localStorage */
    }, [state.cart])                 /*  cada vez que cambia el estado del carrito
 */
    return (                   /* El componente CartProvider retorna los children sin ninguna modificación */
        <CartContext.Provider value={{state, dispatch}}>
        {children}
        </CartContext.Provider>
    )
}
