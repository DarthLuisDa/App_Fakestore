import { Navigate } from "react-router-dom";  /* importando el componente "Navigate" de la librería "react-router-dom" */
import { useLogin } from "../hooks/useLogin";   /* y el hook "useLogin" desde el archivo */ "../hooks/useLogin"

const Auth = ({ children }) => {      /* Una función de componente llamada "Auth" que recibe un objeto llamado "children" como parámetro. Se utiliza la sintaxis de flecha para definir la función */
    const { user, loadingSession } = useLogin();     /* se utiliza el hook "useLogin" para obtener las variables "user" y "loadingSession" */

    if(loadingSession) return (<h1>Cargando...</h1>)    /* Condición que verifica si "loadingSession" es verdadero. Si es verdadero, 
    se devuelve el texto "Cargando..." como resultado de la función */

    if(!loadingSession && !user) {    /*  hay otra condición que verifica si "loadingSession" es falso y si "user" es falso */
        return <Navigate to="/login" replace={true} />     /*  Si ambas condiciones son verdaderas, no se devuelve nada como resultado de la función */
    }

    return children;   /* si ninguna de las condiciones anteriores se cumple, se devuelve el valor de la variable "children" como resultado de la función */
}

export default Auth;    /* se exporta el componente "Auth" para que pueda ser utilizado en otros archivos */