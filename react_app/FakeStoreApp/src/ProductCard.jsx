function ProductCard({ product, handleAddToCart, isInCart }) {

    return (
        <div className="border p-4 rounded-lg shadow-lg bg-white flex flex-col h-full  ">

            <img style={{ width: '100px', height: '100px' }} className="w-full h-50 object-contain mb-4" src={product.image} alt="" />
            <h3 className="text-lg font-semibold text-black flex-grow">{product.title}</h3>

            <p className="text-gray-700">${product.price}</p>
            <button onClick={() => handleAddToCart(product)}

                disabled={isInCart}
                className={`mt-4 w-full py-2 ${isInCart ? "bg-gray-400" : "bg-blue-500"} text-white rounded`}>
                {isInCart ? "Added to Cart" : "Add to Cart"}
            </button>
        </div>

    )

}

export default ProductCard;