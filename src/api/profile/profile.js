import { instance } from "../axios";

export const getMyCreatePin = async () => {
  const response = await instance.get(`/mypage`);
  return response.data;
};

export const getMySavePin = async () => {
  const response = await instance.get(`/mypage/save`);
  return response.data;
};
