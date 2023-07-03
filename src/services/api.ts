import axios from "axios";
import { ApiInfo } from "../models";

export const getApis = async () => {
  try {
    const response = await axios.get("https://api.apis.guru/v2/providers.json");
    return response.data.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getApi = async (name: string) => {
  try {
    const response = await axios.get(`https://api.apis.guru/v2/${name}.json`);
    for (const [key, value] of Object.entries(response.data.apis)) {
      return { key: key, value: value as ApiInfo };
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
