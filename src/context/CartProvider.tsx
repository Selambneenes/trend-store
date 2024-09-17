import { createContext } from "react"
import CartContextType from "../ts/context/CartContext";

export const CartContext = createContext<CartContextType | undefined>(undefined);
type CartProviderProps = {
    children: React.ReactNode;
}
const CartProvider: React.FC<CartProviderProps> = ({children}) => {
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: () => {},
        removeItem: () => {},
        clearItem: () => {},

    }
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartProvider