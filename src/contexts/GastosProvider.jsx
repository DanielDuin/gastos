import GastosContext from "./GastosContext";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useState } from "react";

export function GastosContextProvider(props) {
  const [gastos, setContextDataGastos] = useLocalStorage("gastos", []);
  const [ultimoIdGasto, setUltimoIdGasto] = useState(0);

  const getMaxId = () => {
    return (
      gastos.reduce((max, gastos) => {
        return gastos.id > max ? gastos.id : max;
      }, 0) + 1
    );
  };

  const agregarGasto = (gastoSinId) => {
    const gastoConId = {
      ...gastoSinId,
      id: getMaxId(),
    };
    setContextDataGastos([...gastos, gastoConId]);
    return gastoConId;
  };

  const modificarGasto = (gastoModificado) => {
    setContextDataGastos(
      gastos.map((gasto) =>
        gasto.id === gastoModificado.id ? { ...gastoModificado } : { ...gasto }
      )
    );
    return;
  };

  const eliminarGasto = (id) => {
    setContextDataGastos((gastos) => gastos.filter(!gastos.id === id));
    return;
  };

  function sortGastos(campo, order) {
    const gastosOrdenados = [...gastos].sort((a, b) => {
      if (order === "ASC") {
        return a[campo] > b[campo] ? 1 : -1;
      } else {
        return a[campo] < b[campo] ? 1 : -1;
      }
    });
    return gastosOrdenados;
  }

  return (
    <GastosContext.Provider
      value={{
        gastos,
        setContextDataGastos,
        agregarGasto,
        sortGastos,
        modificarGasto,
        ultimoIdGasto,
        setUltimoIdGasto,
      }}
    >
      {props.children}
    </GastosContext.Provider>
  );
}
