import axios from "axios";

const BASE = "https://localhost:7102/api";

export const api = axios.create({
  baseURL: BASE,
  headers: { "Content-Type": "application/json" },
});
