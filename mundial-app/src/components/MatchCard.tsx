import type { Match } from "../types/Match";

interface Props {
  match: Match;
}

export default function MatchCard({ match }: Props) {
  return (
     <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "10px",
      }}
    >
      <h2>
        {match.homeTeam} vs {match.awayTeam}
      </h2>

      <p>
        <strong>Estado:</strong> {match.status}
      </p>

      <p>
        <strong>Fecha:</strong> {match.date}
      </p>

      <p>
        <strong>Hora:</strong> {match.time}
      </p>

      {match.result && (
        <p>
          <strong>Resultado:</strong>{" "}
          {match.result.homeScore} - {match.result.awayScore}
        </p>
      )}
    </div>
  );
}