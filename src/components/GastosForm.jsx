import { useState } from "react";
import { rubros } from "../mocks/rubros";
import { z } from "zod";
import { NumericFormat } from "react-number-format";

const defaultGasto = {
  id: "",
  descripcion: "",
  importe: "",
  rubro: "",
};

// validaciones ZOD
//const validaSelect = z.string();

const gastosSchema = z.object({
  descripcion: z.string().min(3, "Descripcion: Ingrese al menos 3 caracteres."),
  importe: z.coerce.number().positive("Importe: Ingrese una valor mayor a 0."),
  rubro: z.refine((rubro) => rubro !== "", "Seleccione un rubro."),
});

export default function GastosForm({
  gastoRecibido = defaultGasto,
  fncEnviarPadre,
  editar = false,
  eliminar = false,
}) {
  const [gasto, setGasto] = useState(gastoRecibido);
  const [summary, setSummary] = useState([]);

  
  function fncChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setGasto({ ...gasto, [name]: value });
  }

  function fncEnviar(e) {
    e.preventDefault();
    //const { descripcion, importe, rubro } = e.target;
    // validaciones ZOD
    try {
      const result = gastosSchema.parse(gasto);
    } catch (e) {
      if (e instanceof z.ZodError) {
        setSummary(e.issues);

        return;
      }
    }
    setSummary([]);

    const respuesta = fncEnviarPadre(gasto);
    respuesta === "reset" &&
      setGasto({
        id: "",
        descripcion: "",
        importe: "",
        rubro: "",
      });
  }

  return (
    <>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-12 col-md-8">
          <form onSubmit={fncEnviar}>
            <div className="row mt-1">
              <div className="col">
                <input
                  id="descripcion"
                  name="descripcion"
                  type="text"
                  className="form-control form-sm"
                  placeholder="Gasto"
                  autoComplete="off"
                  maxLength="20"
                  onChange={fncChange}
                  value={gasto.descripcion}
                ></input>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col">
                <NumericFormat
                  name="importe"
                  className="form-control"
                  value={gasto.importe}
                  onValueChange={(values, sourceInfo) => {
                    setGasto({
                      ...gasto,
                      importe: values.floatValue || "",
                    });
                    console.log(values, sourceInfo);
                  }}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  prefix="$ "
                  decimalScale={2}
                  fixedDecimalScale={false}
                  allowNegative={false}
                  placeholder="$ 0,00"
                ></NumericFormat>
              </div>
            </div>

            <div className="row mt-1">
              <div className="col">
                <select
                  id="rubro"
                  name="rubro"
                  className="form-select"
                  onChange={fncChange}
                  value={gasto.rubro}
                >
                  <option value="">Seleccione</option>
                  {rubros.map((rubro, index) => (
                    <option value={rubro.value} key={index}>
                      {rubro.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={summary.length === 0 ? "d-none" : "row mt-4"}>
              <div className="col">
                <div className="alert alert-danger">
                  <ul>
                    {summary.map((e, index) => (
                      <li key={index}>{e.message}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col">
                <button className="btn btn-primary btn-ancho1 btn-sm float-end btn-ancho1">
                  Enviar
                </button>
                {eliminar && (
                  <button className="btn btn-danger btn-ancho1 btn-sm float-end btn-ancho1">
                    Eliminar
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
