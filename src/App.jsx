import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navegacion from "./components/Navegacion";
import { ToastContainer } from "react-toastify";
import Gastos from "./components/Gastos";
import Resumen from "./components/Resumen";
import GastosModif from "./components/GastosModif";
import "./css/App.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-8">
            <BrowserRouter>
              <Navegacion />
              <Routes>
                <Route path="Gastos" element={<Gastos />} />
                <Route path="Resumen" element={<Resumen />} />
                <Route path="GastosModif/:id" element={<GastosModif />} />
                <Route path="/:id" element={<Gastos />} />
                <Route path="/" element={<Gastos />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
