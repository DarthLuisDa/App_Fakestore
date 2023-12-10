/* Login/Inicio de Sesion/Logearte */

import { useState } from "react";    /* Importa la función useState del módulo "react". useState es un hook que permite al componente tener un estado interno. */
import { Navigate, useNavigate } from "react-router-dom";    /* Importa los componentes Navigate y useNavigate del módulo "react-router-dom". Navigate se utiliza para redireccionar al usuario a otra página, mientras que useNavigate se utiliza para obtener una función que permite la navegación entre páginas */
import { useLogin } from "../hooks/useLogin";        /* Importa el hook personalizado useLogin del archivo "../hooks/useLogin". Este hook proporciona funciones y datos para manejar el inicio de sesión de un usuario */

const Login = () => {                          /* Declara un componente de función llamado Login */
    const [form, setForm] = useState({            /* Declara una variable de estado llamada form y su función de actualización setForm */
        email: "",                                /* El estado inicial de form es un objeto con las propiedades email y password inicializadas con una cadena vacía */
        password: ""
    });
    const [error, setError] = useState("");         /* Declara una variable de estado llamada error y su función de actualización setError. El estado inicial de error es una cadena vacía */
    const navigate = useNavigate();               /* Obtiene la función para navegar entre páginas utilizando el hook useNavigate. La función se guarda en la constante navigate */
    const { login, user, loadingSession } = useLogin();     /* Obtiene las funciones y datos proporcionados por el hook useLogin y los guarda en las constantes login, user y loadingSession */

    if(loadingSession) return (<h1>Cargando...</h1>)         /* Si la variable loadingSession es true, se devuelve el texto "Cargando...". Esta línea se utiliza para mostrar un mensaje de carga mientras se espera la respuesta del inicio de sesión */

    if(!loadingSession && user) {                          /* Si la variable loadingSession es false y la variable user es verdadera (existe un usuario logueado), el componente finaliza su ejecución */
        return <Navigate to="/" replace={true} />           /* Esto se hace para evitar que un usuario ya logueado pueda acceder a la página de inicio de sesión nuevamente */
    }

    const handleChange = (e) => {                  /*  Declara una función llamada handleChange que se ejecuta cuando cambia el valor de un campo de entrada */
        setForm({                                   /* Esta función actualiza el estado form agregando el nuevo valor al campo correspondiente y también limpia el estado error */
            ...form,
            [e.target.name]: e.target.value
        })
        setError("")
    }

    const handleSubmit = async (e) => {            /* Declara una función llamada handleSubmit que se ejecuta cuando se envía el formulario de inicio de sesión */
        e.preventDefault();                          /* Esta función evita que el formulario se envíe de forma predeterminada, luego intenta iniciar sesión con las credenciales proporcionadas */
        try {
            const res = await login(form.email, form.password)
            navigate("/");                              /* Si el inicio de sesión es exitoso, se redirige al usuario a la página de inicio ("/") utilizando la función navigate */
        }
        catch (err) {
            setError(err.message)                    /* Si hay un error, el mensaje de error se guarda en el estado error */
        }
    }

   /*  Devuelve el JSX (JavaScript XML) que representa la interfaz del componente. En este caso, 
    se devuelve un formulario de inicio de sesión que contiene dos campos de entrada para el correo electrónico y la contraseña, 
    y un botón para enviar el formulario. También se muestra un mensaje de error si existe algún error */

    return (
        <div className="flex flex-col w-full h-full items-center">
            <div className="flex flex-col items-center justify-center w-fit h-fit bg-slate-200 rounded-md p-8">
                <h1 className="text-2xl font-bold text-slate-900">Iniciar sesión</h1>
                <form className="flex flex-col w-full mt-4 text-slate-900" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-500" 
                        name="email"
                        onChange={handleChange}
                        />
                    <input 
                        type="password" 
                        placeholder="Contraseña" 
                        className="w-full p-2 mt-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-500" 
                        name="password"
                        onChange={handleChange}
                        />
                    <button type="submit" className="w-full p-2 mt-4 bg-slate-500 text-white rounded-md hover:bg-slate-600">Iniciar sesión</button>
                    {error ? <span className="text-red-500 mt-2">{error}</span> : null}
                </form>
            </div>
        </div>
    )
}

export default Login;