import axios from "axios";

const ACCESS_KEY = "x8ZmiIddmARrjYDpB2xyvirbkvxbql3FOBdr1mVeDDk";

export const requestPicsByQuery = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=20`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );

  return data;
};