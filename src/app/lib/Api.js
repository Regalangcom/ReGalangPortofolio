import { API } from "@eli/app/config/ApiClient.js";
export const dProvincies = async () => {
  const response = await API.get("provinces", { withCredentials: false });
  return response.data;
};

export const dCity = async (Id_provinsi) => {
  const response = await API.get(`/regencies_of/${Id_provinsi}`, {
    withCredentials: false,
  });
  return response.data;
};

export const dKecamatan = async (id_Kec) => {
  const response = await API.get(`/districts_of/${id_Kec}`, {
    withCredentials: false,
  });
  return response.data;
};

export const dDesa = async (id_Desa) => {
  const response = await API.get(`/villages_of/${id_Desa}`, {
    withCredentials: false,
  });
  return response.data;
};
