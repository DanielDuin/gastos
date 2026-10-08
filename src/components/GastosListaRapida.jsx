import { useGastos } from "../Hooks/useGastos";
import { SquarePen, Trash2, ZoomIn } from "lucide-react";
export default function GastosListaRapida() {
  const { sortGastos, ultimoIdGasto } = useGastos();

  const gastosOrdenados = sortGastos("id", "DESC");

  const formatCurrency = (number, currency, locale) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(number);
  };

  return (
    <div className="row mt-4">
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th className="col-1">id</th>
              <th className="col-4">Gasto</th>
              <th className="col-3">Importe</th>
              <th className="col-3">Rubro</th>
              <th className="col-1"></th>
            </tr>
          </thead>
          <tbody>
            {gastosOrdenados.map((gasto, index) => (
              <tr key={index}>
                <td
                  className={ultimoIdGasto === gasto.id ? "bg-info-subtle" : ""}
                >
                  {gasto.id}
                </td>
                <td
                  className={ultimoIdGasto === gasto.id ? "bg-info-subtle" : ""}
                >
                  {gasto.descripcion}
                </td>
                <td
                  className={
                    ultimoIdGasto === gasto.id
                      ? "bg-info-subtle "
                      : " float-end"
                  }
                >
                  <span className="float-end">
                    {formatCurrency(gasto.importe, "ARS", "es-AR")}
                  </span>
                </td>
                <td
                  className={ultimoIdGasto === gasto.id ? "bg-info-subtle" : ""}
                >
                  {gasto.rubro}
                </td>
                <td
                  className={ultimoIdGasto === gasto.id ? "bg-info-subtle" : ""}
                >
                  <a href={`/GastosModif/${gasto.id}`}>
                    <SquarePen />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
