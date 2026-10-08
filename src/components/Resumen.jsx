import { useGastos } from "../Hooks/useGastos";

export default function Resumen() {
  const { sortGastos } = useGastos();
  const gastosOrdenados = sortGastos("rubro", "ASC");

  let gastosRubro = [];
  let gastosTotales = [];
  let importeTotalGrupo = 0;
  let importeTotal = 0;

  // total General para calcular el porcentaje de cada rubro en el total.
  importeTotal = gastosOrdenados.reduce((importe, gasto) => {
    return parseFloat(importe) + parseFloat(gasto.importe);
  }, 0);

  const rubrosTemp = gastosOrdenados.map((gasto) => gasto.rubro);
  // rubrosTemp: creo un arreglo tomando de cada objeto de gastosOrdenados solo el elemnto rubro.
  const rubros = [...new Set(rubrosTemp)];
  // rubros: arreglo con un elemento por rubro, como si hiciera un DISTINCT, ver Set(array).

  // Recorro rubros una iteracion por Rubro.
  for (let i = 0; i < rubros.length; i++) {
    // filtro los gastos de gastosOrdenados correspondiente a rubros[i]. Ej: me quedo
    // en gastosRubro solo con los objetos con el rubro ALM.
    gastosRubro = gastosOrdenados.filter((gasto) => gasto.rubro === rubros[i]);

    // acumulo el importe de los gastos filtrado para el rubro rubros[i]
    importeTotalGrupo = gastosRubro.reduce((importeRubro, gasto) => {
      return parseFloat(importeRubro) + parseFloat(gasto.importe);
    }, 0);

    // gastosTotales: agrego un objeto para cada rubro con el total acumulado en el paso anterior.
    gastosTotales = [
      ...gastosTotales,
      {
        rubro: rubros[i],
        importe: importeTotalGrupo,
        porcentaje: ((importeTotalGrupo / importeTotal) * 100).toFixed(2),
      },
    ];
  }

  const formatCurrency = (number, currency, locale) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(number);
  };

  return (
    <div className="row mt-4 d-flex justify-content-center">
      <div className="col-12 col-md-8">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="col-6">Rubro</th>
              <th className="col-3">
                <span className="float-end">Total</span>
              </th>
              <th className="col-3">
                <span className="float-end">%</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {gastosTotales.map((r, index) => (
              <tr key={index}>
                <td>{r.rubro}</td>
                <td>
                  <span className="float-end">
                    {formatCurrency(r.importe, "ARS", "es-AR")}
                  </span>
                </td>
                <td>
                  <span className="float-end">{r.porcentaje}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
