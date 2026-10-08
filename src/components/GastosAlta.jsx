import { useGastos } from "../Hooks/useGastos";
import GastosForm from "./GastosForm";
import { toastMensaje } from "./toast";

export default function GastosAlta() {
  const { agregarGasto, setUltimoIdGasto } = useGastos();

  function fncEnviarPadre(gasto) {
    // doy el alta
    const gastosConId = agregarGasto(gasto);

    setUltimoIdGasto(gastosConId.id);

    toastMensaje("Ingresado.", "ok");

    return "reset";
  }

  return <GastosForm fncEnviarPadre={fncEnviarPadre} editar={true} />;
}
