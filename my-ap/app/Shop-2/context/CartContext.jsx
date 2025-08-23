"use client"
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");

    const AddToCart = (product) => {
        const exist = cart.find(item => item.id == product.id)
        if (exist) {
            setCart(prev => prev.map(item => item.id == product.id ? {...item, qty: item.qty + 1} : item))
        }else{
            setCart([...cart, {...product, qty : 1}])
        }
    }

    const handleDelete = (id) => {
        setCart(prev => prev.filter(item => item.id !== id))
    }

    const upQty = (id) => {
        setCart(prev => prev.map(item => item.id == id ? {...item, qty: item.qty + 1} : item))
    }

    const dnQty = (id) => {
        setCart(prev => prev.map(item => item.id == id && item.qty > 1 ? {...item, qty: item.qty - 1} : item))
    }

    return (
        <CartContext.Provider value = {{cart, search, setSearch, AddToCart, handleDelete, upQty, dnQty}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);