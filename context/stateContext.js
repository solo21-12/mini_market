import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast, Toast } from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItem, setcartItem] = useState([])
  const [totalPrice, settotalPrice] = useState(0)
  const [totalQuanitity, settotalQuanitity] = useState(0)
  const [qty, setQty] = useState(1)

  let foundProduct;
  let index;
  const handleDecressQty = () => {
    if (qty <= 1) {
      setQty(1)
    }
    else {
      setQty(qty - 1)

    }
  }
  const handleIncressQty = () => {
    setQty(preQ => { return preQ + 1 })
  }
  const onAdd = (product, quantity) => {
    const checkItemOnCart = cartItem.find(item => item._id === product._id)
    settotalPrice((previousePrice) => previousePrice + (quantity * product.price))
    settotalQuanitity((preveviosQuantity) => preveviosQuantity + quantity)
    if (checkItemOnCart) {
      const updatedCart = cartItem.map((cartProduct) => {
        if (cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })
      setcartItem(updatedCart)
    }
    else {
      product.quantity = quantity;
      setcartItem([...cartItem, { ...product }])
    }
    toast.success(`${qty} ${product.title} added to the cart`)
  }

  const onRemove = (product) => {
    foundProduct = cartItem.find((item) => item._id === product._id);
    const newCartItems = cartItem.filter((item) => item._id !== product._id);

    settotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    settotalQuanitity(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setcartItem(newCartItems);
  }

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItem.find((item) => item._id === id)
    index = cartItem.findIndex((product) => product._id === id);
    const newCartItems = cartItem.filter((item) => item._id !== id)

    if(value === 'inc') {
      setcartItem([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      settotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      settotalQuanitity(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setcartItem([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        settotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        settotalQuanitity(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }

  return (
    <Context.Provider
      value={{
        showCart,
        cartItem,
        totalPrice,
        totalQuanitity,
        qty,
        handleDecressQty,
        handleIncressQty,
        onAdd,
        setShowCart,
        toggleCartItemQuanitity,
        onRemove
      }}>
      {children}
    </Context.Provider>
  )


}

export const useStateContext = () => useContext(Context)