import { useParams } from "react-router-dom";
import { useGastos } from "../Hooks/useGastos";
import { useNavigate } from "react-router-dom";

import GastosForm from "./GastosForm";
import { toastMensaje } from "./toast";
import { SkipBack } from "lucide-react";

export default function GastosModif() {
  const { gastos, modificarGasto, setUltimoIdGasto } = useGastos();
  const { id } = useParams();
  const navigate = useNavigate();

  const gastoModif = gastos.find((g) => g.id == id);

  if (!gastoModif) {
    // retornar Componente Error.
    return <div>Id invalido.</div>;
  }

  function fncEnviarPadre(gastoMofificado) {
    modificarGasto(gastoMofificado);
    setUltimoIdGasto(gastoMofificado.id);

    toastMensaje("Modificado.", "ok");
  }

  function fncVolver() {
    console.log("click");
    navigate(`/${gastoModif.id}`);
    //navigate("/");
    //return <Gastos />;
  }

  return (
    <>
      <div className="row align-items-center mt-4">
        <div className="col-1">
          <button className="btn btn-sm" onClick={fncVolver}>
            <SkipBack />
          </button>
        </div>
        <div className="col-8 h4 mt-2">Modificar datos {gastoModif.id}</div>
        <div className="col-3"></div>
      </div>

      <GastosForm
        gastoRecibido={gastoModif}
        fncEnviarPadre={fncEnviarPadre}
        editar={true}
        eliminar={true}
      />
    </>
  );
}
