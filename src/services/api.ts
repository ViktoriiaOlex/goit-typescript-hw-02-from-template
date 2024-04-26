import axios, { AxiosResponse } from "axios";
import { PicsResponse } from "../../src/App";

const ACCESS_KEY = "x8ZmiIddmARrjYDpB2xyvirbkvxbql3FOBdr1mVeDDk";

export const requestPicsByQuery = async (
  query: string,
  page: number
): Promise<PicsResponse> => {
  const response: AxiosResponse<PicsResponse> = await axios.get(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=20`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );

  return response.data;
};
