import { useQuery } from "react-query";
import { dProvincies, dCity, dKecamatan, dDesa } from "@eli/app/lib/Api.js";

export const keyProv = "provinces";
export const keyCity = "cities";
export const keyKecamatan = "kecamatans";
export const keyDesa = "desa";

const useProvinces = (opts = {}) => {
  const { data: provinces = [], ...rest } = useQuery({
    queryKey: [keyProv],
    queryFn: dProvincies,
    ...opts,
  });

  return { provinces, ...rest };
};

const useCity = (id_City, opts = {}) => {
  const { data: cities = [], ...rest } = useQuery({
    queryKey: [keyCity, id_City],
    queryFn: () => dCity(id_City),
    enabled: !!id_City,
    ...opts,
  });

  return { cities, ...rest };
};

const useKecamatan = (id_Kec, opts = {}) => {
  const { data: kecamatan = [], ...rest } = useQuery({
    queryKey: [keyKecamatan],
    queryFn: () => dKecamatan(id_Kec),
    enabled: !!id_Kec,
    ...opts,
  });
  return { kecamatan, ...rest };
};

const useDesa = (id_Desa, opts = {}) => {
  const { data: desa = [], ...rest } = useQuery({
    queryKey: [keyDesa, id_Desa],
    queryFn: () => dDesa(id_Desa),
    enabled: !!id_Desa,
    ...opts,
  });

  return { desa, ...rest };
};

export { useProvinces, useCity, useKecamatan, useDesa };
