import axios from "axios";

const API =
"/api/events/mints";

export async function getLatestMints() {
  const { data } = await axios.get(API);

  return data;
}