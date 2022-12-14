import React from "react";

const ProductCard = (producto) => {
    const { id, name, image_uri, price } = producto;

    const addCar = () => {
        const data = JSON.parse(localStorage.getItem("carrito")) || [];
        const productExist = data.findIndex((p) => p.id === id);

        if (productExist === -1) {
            data.push({ ...producto, cantidad: 1 });
        } else {
            const cantidad = +data[productExist].cantidad + 1;
            data[productExist] = { ...producto, cantidad };
        }
        localStorage.setItem("carrito", JSON.stringify(data));
        location.href = route("carrito");
    };

    return (
        <>
            <img
                className="p-8 rounded-t-lg"
                width="75%"
                height="75%"
                src={image_uri}
                alt={`producto-${id}`}
            />
            <div className="md:container md:mx-auto">
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="text-xl text-red-400">Precio:&nbsp;${price}</p>

                <button 
                onClick={addCar}
                type="button"
                className="mx-1 px-4 py-2 text-sm text-white bg-yellow-500  hover:bg-yellow-700 rounded"                                       
                >
                    Añadir al carrito
                </button>
            </div>
      
        </>
    );
};

export default ProductCard;