export interface Match {
  id: number;
  stage: string;
  group: string | null;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  stadium: string;
  city: string;
  status: string;
  result: {
    homeScore: number;
    awayScore: number;
  } | null;
}