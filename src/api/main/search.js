import { instance } from "../axios";

export const getSearchPins = async (payload) => {
  try {
    console.log("payload:", payload);
    const response = await instance.get(`/search`, {
      params: {
        search: payload,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
