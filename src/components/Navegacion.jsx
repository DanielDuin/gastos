import { useState } from "react";
import { Link } from "react-router-dom";
//import NavegacionItem from "./NavegacionItem";

export default function Navegacion() {
  const [navSel, setNavSel] = useState("gastos");
  function fncClick(arg) {
    setNavSel(arg);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
        <a className="navbar-brand" href="/">
          GASTOS PERSONALES
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link
                to="/Gastos"
                className="nav-link"
                onClick={() => fncClick("gastos")}
              >
                Gastos
                <span className="sr-only">
                  {navSel === "gastos" && "(Actual)"}
                </span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                to="/Resumen"
                className="nav-link"
                onClick={() => fncClick("resumen")}
              >
                Resumen
                <span className="sr-only">
                  {navSel === "resumen" && "(Actual)"}
                </span>
              </Link>
            </li>
          </ul>
          {/* <ul className="navbar-nav">
            <NavegacionItem
              componente={"Gastos"}
              navSel={navSel}
              nav={ nombre: "gastos", titulo: "Gastos" }
              fncClick={fncClick}
            />
            <NavegacionItem
              componente={"Resumen"}
              navSel={navSel}
              NavNombre={"resumen"}
              titulo={"Resumen"}
              fncClick={fncClick}
            />
          </ul> */}
        </div>
      </nav>
    </>
  );
}
