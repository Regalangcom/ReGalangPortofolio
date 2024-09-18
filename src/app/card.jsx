import { DataDummy } from "@eli/assets/dataDummy.js";
const Card = () => {
    console.log(JSON.stringify(DataDummy));

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="grid w-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {/* <div> */}
                    {DataDummy.map((item) => (
                        <div
                            key={item.id}
                            className=" bg-gray-200 shadow-lg rounded-lg overflow-hidden lg:max-w-xs mx-auto"
                        >
                            <div className="p-4">
                                <p className="text-gray-600 text-lg mb-4 font-bold">
                                    {item.header}
                                </p>
                                <p className="text-gray-600">
                                    {item.first_name}
                                </p>
                                <p className="text-gray-600 mt-4">
                                    {item.last_update}
                                </p>
                            </div>
                        </div>
                    ))}
                    {/* </div> */}
                </div>
            </div>
        </section>
    );
};

export default Card;
