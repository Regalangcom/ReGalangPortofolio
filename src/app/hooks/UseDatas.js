import { useQuery } from "react-query";
import { dProvincies, dCity } from "../lib/Api.js";

export const keyProv = "provincies";
export const keyCity = "City";

const useProvinces = (opts = {}) => {
  const { data: provincies = [], ...rest } = useQuery({
    queryKey: [keyProv],
    queryFn: dProvincies,
    ...opts,
  });

  return { provincies, ...rest };
};

const useCity = (id_City, opts = {}) => {
  const { data: City = [], ...rest } = useQuery({
    queryKey: [keyCity, id_City],
    queryFn: () => dCity(id_City),
    ...opts,
  });

  return { City, ...rest };
};
export { useProvinces, useCity };
