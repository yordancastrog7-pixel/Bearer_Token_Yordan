import { useEffect, useState } from "react";
import { getUpcoming } from "../services/matchService";
import MatchCard from "../components/MatchCard";
import type { Match } from "../types/Match";

export default function Upcoming() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    cargarPartidos();
  }, []);

  const cargarPartidos = async () => {
    try {
      const data = await getUpcoming();
      setMatches(data.matches);
    } catch (error) {
      console.error("Error al obtener los próximos partidos:", error);
    }
  };

  return (
    <div>
      <h1>Próximos Partidos</h1>

      {matches.length === 0 ? (
        <p>No hay próximos partidos.</p>
      ) : (
        matches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
          />
        ))
      )}
    </div>
  );
}