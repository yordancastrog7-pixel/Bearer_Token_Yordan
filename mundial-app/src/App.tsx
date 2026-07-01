import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";
import Upcoming from "./pages/Upcoming";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Resultados */}
        <Route
          path="/results"
          element={
            <ProtectedRoute>
              <Results />
            </ProtectedRoute>
          }
        />

        {/* Próximos partidos */}
        <Route
          path="/upcoming"
          element={
            <ProtectedRoute>
              <Upcoming />
            </ProtectedRoute>
          }
        />

        {/* Ruta inicial */}
        <Route path="*" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}