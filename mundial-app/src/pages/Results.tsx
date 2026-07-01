import { useEffect, useState } from "react";
import { getResults } from "../services/matchService";
import MatchCard from "../components/MatchCard";
import type { Match } from "../types/Match";

export default function Results() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    cargarResultados();
  }, []);

  const cargarResultados = async () => {
    try {
      const data = await getResults();
      setMatches(data.matches);
    } catch (error) {
      console.error("Error al obtener resultados:", error);
    }
  };

  return (
    <div>
      <h1>Resultados del Mundial</h1>

      {matches.length === 0 ? (
        <p>No hay resultados para mostrar.</p>
      ) : (
        matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))
      )}
    </div>
  );
}