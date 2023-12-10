import {configureStore} from '@reduxjs/toolkit';     /* se importa la función configureStore del paquete @reduxjs/toolkit */
import cartSlice from './cartSlice';                /*  se importa el slice cartSlice del archivo cartSlice.js */

export const store = configureStore({       /* se crea una constante store que almacena el resultado de llamar a la función configureStore con un objeto de configuración */
    reducer: {                               /* El objeto de configuración tiene una propiedad reducer */
        cart: cartSlice                      /* que contiene un objeto con una propiedad cart que apunta al cartSlice */
    }
})