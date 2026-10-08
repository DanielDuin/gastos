import { useState } from "react";
import GastosAlta from "./GastosAlta";
import GastosListaRapida from "./GastosListaRapida";

export default function Gastos() {
  const [ultimoGasto, setUltimoGasto] = useState(0);
  return (
    <>
      <GastosAlta setUltimoGasto={setUltimoGasto} />
      <GastosListaRapida ultimoGasto={ultimoGasto} />
    </>
  );
}
