import { API } from "../config/ApiClient.js";

export const dProvincies = async () => {
  const response = await API.get("/provincies");
  return response.data;
};

export const dCity = async (id_City) => {
  const response = await API.get(`/regencies_of/${id_City}`);
  return response.data;
};

export const dKecamatan = async (id_Kec) => {
  const response = await API.get(`/districts_of/${id_Kec}`);
  return response.data;
};

export const dDesa = async (id_Desa) => {
  const response = await API.get(`/villages_of/${id_Desa}`);
  return response.data;
};
