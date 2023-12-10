/* Este código es un hook personalizado de React que se encarga de manejar la lógica relacionada con el inicio de sesión de usuario utilizando Firebase Auth */


import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";   /* importa las funciones onAuthStateChanged, signInWithEmailAndPassword y signOut del módulo "firebase/auth" */
import { auth } from "../main";        /* importa la instancia de autenticación (auth) desde el archivo "../main" */
import { useEffect, useState } from "react";      /* importa las funciones useEffect y useState de React */

export const useLogin = () => {               /*  La función useLogin es un hook personalizado que devuelve un objeto con varias propiedades y funciones para interactuar con el inicio de sesión de usuario */
    const [user, setUser] = useState(null);      /*  El hook utiliza el estado local de React con useState para crear las siguientes variables de estado: */
    const [loadingSession, setLoadingSession] = useState(true);   /*  user: guarda la información del usuario autenticado actualmente */
    const [loadingSignIn, setLoadingSignIn] = useState(false);    /* loadingSession: indica si la sesión de usuario se está cargando o no */
                                                                    /*  loadingSignIn: indica si se está realizando un inicio de sesión o no */


    useEffect(() => {                           /* La función useEffect se utiliza para suscribirse a los cambios en el estado de autenticación de Firebase */
        const unsubscribe = onAuthStateChanged(auth, (user) => {      /*  Almacenamos el resultado de la suscripción en la variable unsubscribe para poder cancelar la suscripción más tarde */
            setUser(user);                             
            setLoadingSession(false);                 /* Cuando el estado de autenticación cambia, la función onAuthStateChanged se ejecuta y actualiza el estado local de user con el usuario autenticado actual */
        });

        return () => unsubscribe();
    }, [])                                 /* También se establece loadingSession en false para indicar que la sesión se ha cargado correctamente */


    const login = async (email, password) => {                      /* Dentro de la función login: Se recibe un correo electrónico y una contraseña como parámetros*/
        try {                                                           /* Se utiliza el método signInWithEmailAndPassword de Firebase Auth para iniciar sesión con el correo electrónico y la contraseña proporcionados */
            const res = await signInWithEmailAndPassword(auth, email, password)
            return {
                email: res.user.email
            }
        } catch (err) {                                            /* Si el inicio de sesión es exitoso, se devuelve un objeto con la propiedad email que contiene el correo electrónico del usuario */
            if(err.code === "auth/invalid-login-credentials") {
                throw new Error("Credenciales inválidas");
            }
            else {
                throw new Error("Error desconocido al iniciar sesión");
            }                                                                /* Si hay algún error, se comprueba el código de error y se lanza una excepción correspondiente */
        }
    }

    const logout = async () => {            /*  La función logout se encarga simplemente de llamar al método signOut de Firebase Auth para cerrar la sesión del usuario actual */
        await signOut(auth);
    }

    return {                             /* se devuelve un objeto que contiene las funciones login y logout, así como las variables user, loadingSession y loadingSignIn.  */
        login,                             /* Estas propiedades y funciones pueden ser utilizadas en componentes de React para interactuar con la funcionalidad de inicio de sesión de usuario */
        logout,
        user,
        loadingSession,
        loadingSignIn
    }
}