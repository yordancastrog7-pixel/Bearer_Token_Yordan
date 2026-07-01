import { Link } from "react-router-dom";

export default function Dashboard() {

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
      <h1>⚽ Mundial App</h1>

      <h2>Usuario autenticado</h2>

      <hr />

      <nav>
        <ul>
          <li>
            <Link to="/results">Resultados</Link>
          </li>

          <li>
            <Link to="/upcoming">Próximos partidos</Link>
          </li>

          <li>
            <Link to="/teams">Equipos</Link>
          </li>

          <li>
            <button onClick={cerrarSesion}>
              Cerrar sesión
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}