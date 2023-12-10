import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";     /*  importa varios elementos y funciones del modulo "firebase/firestore" */
import { useState } from "react";    /*  importa varios elementos y funciones del modulo "react" */
import { db } from "../main";         /*  importa la referencia a la base de datos de Firebase desde un archivo llamado "main.js" */

export const useFakestoreApi = () => {        /* exporta una función llamada "useFakestoreApi" como un custom hook */
  const [data, setData] = useState(null);       /* Este hook crea varios estados locales usando el hook useState de React:  */
  const [error, setError] = useState(null);           /*  "data", "error" y "loading. */
  const [loading, setLoading] = useState(false);       /* Estos estados se inicializan como null, null y false respectivamente */ 

  const getProducts = async () => {           /* La función "getProducts" es una función asíncrona que realiza una consulta a la colección "products" en la base de datos */
    try {
      const res = await query(collection(db, "products"));   

      return onSnapshot(res, (querySnapshot) => {      /*  Si la consulta es exitosa, se establece el estado "data" con los datos obtenidos de la consulta */
        setData(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } catch (error) {
      setError("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  };

  const storeNewProduct = async (product) => {       /* La función "storeNewProduct" también es una función asíncrona que guarda un nuevo producto en la colección "products" */
    try {
      setLoading(true);                            /* Si la operación de guardado es exitosa, se retorna el resultado de la operación */
      const res = await addDoc(collection(db, "products"), product);
      return res;
    } catch (error) {                                     /* En caso de error, se establece el estado "error" con un mensaje de error */
      setError("Error al guardar producto");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, getProducts, storeNewProduct };         /* Finalmente, la función retorna un objeto que contiene los estados locales y */
                                                                         /*   las dos funciones mencionadas anteriormente: "getProducts" y "storeNewProduct". */
};
