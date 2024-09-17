type CartContextType = {
    items: any[];
    totalAmount: number;
    addItem: (item: any) => void;
    removeItem: (id:number) => void;
    clearItem: () => void;
}

export default CartContextType;