import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
  } from "../types";

// crear un nuevo producto - Funcion Principal
export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch(nuevoProducto())
    }
}

export const nuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
})