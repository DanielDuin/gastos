import { Link } from "react-router-dom";

export default function NavegacionItem(componente, navSel, nav, fncClick) {
  const navTo = "/" + componente;
  console.log("titulo", nav.titulo);
  return (
    <li className="nav-item active">
      <Link to={navTo} className="nav-link" onClick={() => fncClick(fncClick)}>
        {nav.titulo}
        <span className="sr-only">{navSel === nav.nombre && "(Actual)"}</span>
      </Link>
    </li>
  );
}
