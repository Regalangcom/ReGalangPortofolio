import { useState } from "react";
import {
    useCity,
    useKecamatan,
    useProvinces,
    useDesa,
} from "@eli/app/hooks/UseDatas.js";
import { Quiz, City, Kec, Desa } from "@eli/assets/dataDummy.js";
import ItemCard from "@eli/app/itemCard.jsx";

const Quiz3 = () => {
    const [Data] = useState(Quiz);
    const { provinces, isPending, isError } = useProvinces();
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedKec, setSelectedKec] = useState("");
    const [selectedDesa, setSelectedDesa] = useState("");

    const [combined, setCombinedData] = useState([]);
    const [lastProvinsi, setLastCity] = useState([]);
    const [KecDData, setLastKec] = useState([]);
    const [lastDesa, setLastDesa] = useState([]);
    const combineList = [...combined];

    const {
        cities,
        isLoading: isLoadingCities,
        isError: isErrorCities,
    } = useCity(selectedProvince);
    const {
        kecamatan,
        isLoading: isLoadingKecamatan,
        isError: isErrorKecamatan,
    } = useKecamatan(selectedCity);

    const {
        desa,
        isLoading: isLoadingDesa,
        isError: isErrorDesa,
    } = useDesa(selectedKec);

    if (isPending) return <p>Fetching Data...</p>;
    if (isError) return <p>Error fetching data</p>;

    const handleProvinsi = (e) => {
        const selectId = +e.target.value;
        setSelectedProvince(selectId);
        const provinceFind = provinces.find(
            (province) => province.id === selectId
        );
        const provinsiName = provinceFind ? provinceFind.name : "no info";

        const update = Data.map((item) => ({
            ...item,
            provinceName: provinsiName,
        }));
        setCombinedData(update);
        setSelectedCity("");
    };

    const handleCity = (e) => {
        const selectId = +e.target.value;
        setSelectedCity(selectId);

        const CityId = cities.find((city) => city.id === selectId);
        const CityName = CityId ? CityId.name : "no info";

        const update = City.map((item) => ({
            ...item,
            City: CityName,
        }));

        setLastCity(update);
    };

    const handeKec = (e) => {
        const selectId = +e.target.value;
        setSelectedKec(selectId);

        const KecId = kecamatan.find((kec) => kec.id === selectId);
        const KecName = KecId ? KecId.name : "no info";

        const update = Kec.map((item) => ({
            ...item,
            Kec: KecName,
        }));
        setLastKec(update);
    };

    const handleDesa = (e) => {
        const selectId = +e.target.value;
        setSelectedDesa(selectId);

        const DesaId = desa.find((desa) => desa.id === selectId);
        const DesaName = DesaId ? DesaId.name : "no info";

        const update = Desa.map((item) => ({
            ...item,
            Desa: DesaName,
        }));
        setLastDesa(update);
    };

    return (
        <section className="p-4">
            <header className="flex flex-row items-center justify-between w-full max-w-screen-lg mx-auto mb-6">
                <p className="text-2xl font-bold">Frontend.</p>
                <span className="text-gray-600">Next Layout</span>
            </header>

            <div className="flex gap-4 justify-center">
                {/*  */}
                <div className=" m-3 max-w-64 bg-gray-200 shadow-md p-4 rounded">
                    <h2 className="text-lg font-semibold mb-4">Filter</h2>
                    <div className="ml-8 justify-center items-center">
                        <label>Provinsi</label>
                        <div className="mb-4 ">
                            <select
                                className=" bg-white border border-gray-300 rounded py-2 px-4 w-3/4"
                                value={selectedProvince}
                                onChange={handleProvinsi}
                            >
                                <option value="">Provinsi</option>
                                {provinces.map((provinces) => (
                                    <option
                                        key={provinces.id}
                                        value={provinces.id}
                                    >
                                        {provinces.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <label>Kabupaten</label>
                        <div className="mb-4">
                            <select
                                className="bg-white border border-gray-300 rounded py-2 px-4 w-3/4"
                                value={selectedCity}
                                onChange={handleCity}
                                disabled={!selectedProvince}
                            >
                                <option value="">Kabupaten</option>
                                {isLoadingCities ? (
                                    <option>Loading...</option>
                                ) : isErrorCities ? (
                                    <option>Error loading cities</option>
                                ) : (
                                    cities.map((city) => (
                                        <option key={city.id} value={city.id}>
                                            {city.name}
                                        </option>
                                    ))
                                )}
                            </select>
                        </div>
                        <label>Kecamatan</label>
                        <div className="mb-4">
                            <select
                                className="bg-white border border-gray-300 rounded py-2 px-4 w-3/4"
                                disabled={!selectedCity}
                                value={selectedKec}
                                onChange={handeKec}
                            >
                                <option value="">Kecamatan</option>
                                {isLoadingKecamatan ? (
                                    <option>Loading...</option>
                                ) : isErrorKecamatan ? (
                                    <option>Error loading cities</option>
                                ) : (
                                    kecamatan.map((kec) => (
                                        <option key={kec.id} value={kec.id}>
                                            {kec.name}
                                        </option>
                                    ))
                                )}
                            </select>
                        </div>
                        <label>Desa</label>
                        <div className="mb-4">
                            <select
                                className="bg-white border border-gray-300 rounded py-2 px-4 w-3/4"
                                disabled={!selectedKec}
                                onChange={handleDesa}
                            >
                                <option value="">Desa</option>
                                {isLoadingDesa ? (
                                    <option>Loading...</option>
                                ) : isErrorDesa ? (
                                    <option>Error loading cities</option>
                                ) : (
                                    desa.map((desa) => (
                                        <option key={desa.id} value={desa.id}>
                                            {desa.name}
                                        </option>
                                    ))
                                )}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="w-3/4 flex flex-col  h-72 p-4 rounded">
                    <h2 className="text-lg font-semibold mb-4">
                        Data dari API
                    </h2>

                    <div className="space-y-4">
                        {combineList.map((item) => (
                            <ItemCard
                                key={item.id}
                                item={item}
                                type={selectedProvince ? "provinsi" : ""}
                            />
                        ))}
                    </div>
                    <div className="space-y-4">
                        {lastProvinsi.map((item) => (
                            <ItemCard
                                key={item.id}
                                item={item}
                                type={selectedCity ? "City" : ""}
                            />
                        ))}
                    </div>
                    <div className="space-y-4">
                        {KecDData.map((item) => (
                            <ItemCard
                                key={item.id}
                                item={item}
                                type={selectedKec ? "Kec" : ""}
                            />
                        ))}
                    </div>
                    <div className="space-y-4">
                        {lastDesa.map((item) => (
                            <ItemCard
                                key={item.id}
                                item={item}
                                type={selectedDesa ? "Desa" : ""}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quiz3;
