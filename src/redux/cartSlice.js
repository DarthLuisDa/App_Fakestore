import { createSlice } from "@reduxjs/toolkit";           /*  importando la función createSlice del paquete @reduxjs/toolkit */

const initialState = [];                               /*  define un arreglo vacío initialState como estado inicial para el slice de "cart" */

const cartSlice = createSlice({                      /* crea un slice llamado "cartSlice" utilizando la función createSlice */
    name: 'cart',                                   /*  Le pasa el nombre "cart", */
    initialState,                                   /* el estado inicial initialState */
    reducers: {                                       /* y un objeto que contiene dos funciones reductoras llamadas "addToCart" y "removeFromCart" */
        addToCart: (state, action) => {                   /* La función reductora "addToCart" recibe el estado actual y una acción como parámetros */
            state.push(action.payload);                     /* Agrega el valor de action.payload al final del estado actual utilizando el método push */
        },
        removeFromCart: (state, action) => {                         /* La función reductora "removeFromCart" recibe el estado actual y una acción como parámetros */
            return state.filter(item => item.id !== action.payload)         /* Retorna un nuevo arreglo filtrado del estado actual, removiendo el elemento que tenga el mismo id que action.payload */
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;        /*  exporta las funciones reductoras "addToCart" y "removeFromCart" del slice "cartSlice" */

export default cartSlice.reducer;                       /*  exporta el reductor del slice "cartSlice" como valor por defecto */