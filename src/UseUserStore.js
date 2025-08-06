import { create } from "zustand";
import { persist } from "zustand/middleware";

const Store = create(
    persist(
        (set) => ({
            totalQuantity: 0,
            totalPrice: 0,
            num: 0,
            setnum: (newNum) => set({ num: newNum }),
            price: 0,
            setPrice: (newPrice) => set({ price: newPrice }),
            arryy: [],
            setarryy: (newArr) => set({ arryy: newArr }),
            laparryy: [],
            setlaparryy: (newArr) => set({ laparryy: newArr }),
            id: [],
            setId: (newId) => set({ id: newId }),
            addtocartlist: [],
            clearId: () => set({ id: [] }),
            setaddtocartlist: (newItem) =>
                set((state) => {
                    const existingItem = state.addtocartlist.find(
                        (item) => item._id === newItem._id
                    );
                    if (existingItem) {
                        const updatedList = state.addtocartlist.map((item) =>
                            item._id === newItem._id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        );
                        return {
                            addtocartlist: updatedList,
                            totalQuantity: updatedList.reduce((acc, item) => acc + item.quantity, 0),
                            totalPrice: updatedList.reduce((acc, item) => acc + item.price * item.quantity, 0),
                        };
                    } else {
                        const updatedList = [...state.addtocartlist, { ...newItem, quantity: 1 }];
                        return {
                            addtocartlist: updatedList,
                            totalQuantity: updatedList.reduce((acc, item) => acc + item.quantity, 0),
                            totalPrice: updatedList.reduce((acc, item) => acc + item.price * item.quantity, 0),
                        };
                    }
                }),
            removeItem: (id) =>
                set((state) => {
                    const updatedList = state.addtocartlist.filter((item) => item._id !== id);
                    return {
                        addtocartlist: updatedList,
                        totalQuantity: updatedList.reduce((acc, item) => acc + item.quantity, 0),
                        totalPrice: updatedList.reduce((acc, item) => acc + item.price * item.quantity, 0),
                    };
                }),
            increaseQuantity: (id) =>
                set((state) => {
                    const updatedList = state.addtocartlist.map((item) =>
                        item._id === id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                    return {
                        addtocartlist: updatedList,
                        totalQuantity: updatedList.reduce((acc, item) => acc + item.quantity, 0),
                        totalPrice: updatedList.reduce((acc, item) => acc + item.price * item.quantity, 0),
                    };
                }),
            decreaseQuantity: (id) =>
                set((state) => {
                    const updatedList = state.addtocartlist.map((item) =>
                        item._id === id
                            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity }
                            : item
                    );
                    return {
                        addtocartlist: updatedList,
                        totalQuantity: updatedList.reduce((acc, item) => acc + item.quantity, 0),
                        totalPrice: updatedList.reduce((acc, item) => acc + item.price * item.quantity, 0),
                    };
                }),
            resetCart: () => set({
                addtocartlist: [],
                totalQuantity: 0,
                totalPrice: 0
            })
        }),
        {
            name: "cart-storage", // unique name for the storage
            getStorage: () => localStorage, // use local storage
        }
    )
);

export default Store;
