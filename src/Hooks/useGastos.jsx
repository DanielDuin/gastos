import { useContext } from "react";
import gastoContext from "../contexts/GastosContext";

export function useGastos() {
  const {
    gastos,
    agregarGasto,
    modificarGasto,
    sortGastos,
    ultimoIdGasto,
    setUltimoIdGasto,
  } = useContext(gastoContext);

  return {
    gastos,
    agregarGasto,
    modificarGasto,
    sortGastos,
    modificarGasto,
    ultimoIdGasto,
    setUltimoIdGasto,
  };
}
