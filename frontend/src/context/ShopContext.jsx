import { createContext, useState } from "react";
import all_products from '../assets/all_products';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const getDefaultCart = () => {
        let cart = {};
        for (let index = 0; index < all_products.length + 1; index++) {
            cart[index] = 0;
        }
        return cart;
    }
    const [cartItems, setcartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        
        console.log(cartItems);
    }
    const removeFromCart = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            
        }
        return totalAmount;
    }
    const getTotalItemsInCart = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            totalItems += cartItems[item];
        }
        return totalItems;
    }
    const contextValue = { all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalItemsInCart };
    console.log(cartItems);
    // console.log(getTotalItemsInCart);
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
