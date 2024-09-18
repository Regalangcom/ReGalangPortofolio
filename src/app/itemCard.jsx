/* eslint-disable react/prop-types */

const ItemCard = ({ item, type }) => {
    return (
        <div className="bg-white shadow-md rounded p-4 mb-6 overflow-hidden">
            <p>
                {type === "provinsi" && `Provinsi Info: ${item.provinceName}`}
                {type === "City" && `City Info: ${item.City}`}
                {type === "Kec" && `Kec Info: ${item.Kec}`}
                {type === "Desa" && `Desa Info: ${item.Desa}`}
            </p>
            <p className="mb-3">Nama: {item.first_name}</p>
            <p>Terakhir Diperbarui: {item.last_update}</p>
        </div>
    );
};

export default ItemCard;
