import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [
            { id: 0, name: "Fernando", number: "459-12-56" },
            { id: 1, name: "Penelopa", number: "740-98-32" },
            { id: 2, name: "Regina", number: "314-22-09" },
        ]
    },
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload)
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addContact, deleteContact } = slice.actions
export default slice.reducer