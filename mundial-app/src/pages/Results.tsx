import { useEffect, useState } from "react";
import { getMatches } from "../services/matchService";
import MatchCard from "../components/MatchCard";
import type { Match } from "../types/Match";

export default function Results() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    getMatches().then((data) => {
      setMatches(data);
    });
  }, []);

  return (
    <div>
      <h1>Resultados Mundial</h1>

      {matches.map((match) => (
        <MatchCard
          key={match.id}
          match={match}
        />
      ))}
    </div>
  );
}