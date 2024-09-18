import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

const resInput = () => {
    return (
        <section className="p-4">
            <header className="flex flex-row items-center justify-between w-full max-w-screen-lg mx-auto mb-6">
                <p className="text-2xl font-bold">Frontend.</p>
                <span className="text-gray-600">Next Layout</span>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                {/* Kolom Pertama */}
                {/* berhasil saat menambahkan sytyle di bawah ini  */}
                <div className="flex flex-row justify-between gap-5 md:col-span-1 md:ml-auto ">
                    <div className="flex flex-row gap-5 w-full  ">
                        <button className="bg-gray-900 text-white start font-bold py-2 px-4 mb-3  rounded flex items-center gap-2 hover:bg-gray-700 transition duration-300 ease-in-out">
                            <GoPlus />
                            <span>Tambah</span>
                        </button>
                    </div>
                    <div className="flex flex-row gap-5">
                        <button className="bg-gray-400 text-black font-bold py-2 px-4 mb-3 w-full md:w-2/3 lg:w-3/4 rounded flex items-center gap-2 hover:bg-gray-700 transition duration-300 ease-in-out">
                            <CiImport />
                            <span>Import</span>
                        </button>
                        <button className="bg-gray-400 text-black font-bold py-2 px-4 mb-3 w-full md:w-2/3 lg:w-3/4 rounded flex items-center gap-2 hover:bg-gray-700 transition duration-300 ease-in-out">
                            <CiExport />
                            <span>Export</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:col-span-2 ">
                    <div className="sm:flex  flex-1 gap-4 sm:w-full ">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border border-gray-300 rounded py-2 px-4 mb-3 w-full md:w-2/3 lg:w-3/4"
                            />
                        </div>

                        {/* Kolom Ketiga */}
                        <div className=" flex-1 ">
                            <select className="border border-gray-300 rounded py-2 px-4 w-full md:w-1/3 ">
                                <option value="">Pilih Tahun</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default resInput;
