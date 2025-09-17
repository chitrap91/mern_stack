function Header({ cartCount, openCartModal }) {

    return (
        <div>
            <nav className="bg-blue-500 text-white flex justify-between item-center w-7xl mx-auto " >
                <h1 className="font-bold text-2xl p-4">CP STORE</h1>
                <button className="relative" onClick={openCartModal}>
                    <span className="text-2xl px-4 ">🛒</span>
                    {cartCount > 0 && (
                        <span className="absolute top-6 px-2 right-7 bg-red-500 text-white text-xs rounded-full ">{cartCount}</span>


                    )}

                </button>

            </nav>
        </div>
    )



}

export default Header; 