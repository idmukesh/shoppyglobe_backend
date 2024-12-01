import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find((item) => item.id == action.payload.id)
            if (existingItem) {
                existingItem.quantity += action.payload.quantity || 1
            }
            else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
            console.log(state.items[1]?.quantity);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id)
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find((item)=>item.id == action.payload.id)

            if(item.quantity>1){
                item.quantity -= 1
            }
            else if(item.quantity<=1){
                state.items = state.items.filter((item) => item.id !== action.payload.id)
            }

        },
        encreaseQuantity: (state, action) => {
            const item = state.items.find((item)=>item.id == action.payload.id)
            item.quantity +=1
        }
    }
})

export const { addItem, removeItem , decreaseQuantity, encreaseQuantity} = cartSlice.actions
export default cartSlice.reducer