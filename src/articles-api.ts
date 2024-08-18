import axios from "axios";
import { Image } from "./types/image"; 

axios.defaults.baseURL = "https://api.unsplash.com";
// axios.defaults.params = {};
axios.defaults.params = { "client_id": "7xYOQqa5WzyDFtciUEbwAKFYwPQECnEzvaUeo0uhxLo" };

// interface Image {
//   id: string;
//   urls: {
//     small: string;
//     regular: string;
//   };
//   alt_description: string;
//   description?: string;
//   user: {
//     name: string;
//   };
//   likes: number;
// }

interface fetchArticlesRespose {
  results: Image[];
  }

export const fetchArticles = async (topic: string, page: number = 1): Promise<fetchArticlesRespose> => {
  try {
    const response = await axios.get<fetchArticlesRespose>("/search/photos", {
      params: { query: topic, page, per_page: 12 },
    });
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};


