import { use, useEffect, useState } from 'react'

import './App.css'
import Header from './Header';
import ProductCard from './ProductCard';
import CartModal from './CartModal';



function App() {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  async function getProducts() {
    const productsData = await fetch("https://fakestoreapi.com/products");
    const productsResult = await productsData.json();
    setProducts(productsResult);
  }

  useEffect(() => {
    getProducts();
  }, []);


  function handleAddToCart(product) {
    const item = product
    item.quantity = 1
    item.disableAddItemButton = false;
    item.disableRemoveItemButton = true;
    const copyCart = [...cartItem, item]
    setCartItem(copyCart);
    calculateCartQuantity(copyCart);
  }

  function handleRemoveItem(item) {
    const index = cartItem.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      const newCart = [...cartItem];
      newCart.splice(index, 1);
      setCartItem(newCart);
      calculateCartQuantity(newCart);
    }
  }

  function changeQuantity(item, operation) {
    const copyCart = cartItem;
    const index = copyCart.findIndex((i) => i.id === item.id);
    if (index != -1) {
      if (operation == "addItem" && item.quantity < 5) {
        copyCart[index].quantity = copyCart[index].quantity + 1;
        if (item.quantity === 5) {
          item.disableAddItemButton = true;
          item.disableRemoveItemButton = false;
        }
      } else if (operation == "reduceItem" && item.quantity > 1) {
        copyCart[index].quantity = copyCart[index].quantity - 1;
        if (item.quantity === 1) {
          item.disableAddItemButton = false;
          item.disableRemoveItemButton = true;
        }
      }
      calculateCartQuantity(copyCart);
      setCartItem(copyCart)
    }
  }

  function calculateCartQuantity(allItemsInCart = []) {
    const totalItems = allItemsInCart.reduce((total, item) => {
      return total + item.quantity
    }, 0);
    const totalPrice = allItemsInCart.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0);
    setCartCount(totalItems);
    setTotal(totalPrice);
  }



  const openCartModal = () => setIsModalOpen(true);
  const closeCartModal = () => setIsModalOpen(false);

  return (
    <>
      <div className='min-h-screen bg-gray-100 w-full '>
        <Header cartCount={cartCount} openCartModal={openCartModal} />
        <div className='px-4'>
          <div className='mx-auto w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {products.map((product) => {
              const isInCart = cartItem.some((item) => item.id === product.id);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                  isInCart={isInCart}
                />
              );
            })}
          </div>
        </div>
        {IsModalOpen && (
          <CartModal cartItems={cartItem} handleRemoveItem={handleRemoveItem} changeQuantity={changeQuantity} total={total} isOpen={IsModalOpen} closeCartModal={closeCartModal} />
        )}
      </div>
    </>
  );
}

export default App
