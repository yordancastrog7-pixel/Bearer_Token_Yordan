import api from "../api/axios";

export const getResults = async () => {
  const response = await api.get("/matches/results");
  return response.data;
};

export const getUpcoming = async () => {
  const response = await api.get("/matches/upcoming");
  return response.data;
};