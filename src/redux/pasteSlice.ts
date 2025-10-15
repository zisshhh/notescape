import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

export interface PasteState {
    pastes: any[]
}

const initialState: PasteState = {
    pastes: localStorage.getItem("pastes")
        ? JSON.parse(localStorage.getItem("pastes")!)
        : []
}

export const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addToPaste: (state, action) => {
            const paste = action.payload
            state.pastes.push(paste)
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast("Content added successfully!")
        },

        updateToPaste: (state, action) => {
            const paste = action.payload;
            const index = state.pastes.findIndex(item => item._id === paste._id);

            if (index >= 0) {
                state.pastes[index] = paste
                localStorage.setItem("pastes", JSON.stringify(state.pastes))
                toast("Updated successfuly!");
            }
        },

        resetAllPaste: (state) => {
            state.pastes = [];
            localStorage.removeItem("pastes");
        },

        removeFromPaste: (state, action) => {
            const pasteId = action.payload;
            console.log(pasteId);

            const index = state.pastes.findIndex(item => item._id === pasteId)
            if(index >= 0){
                state.pastes.splice(index, 1);
                localStorage.setItem("pastes", JSON.stringify(state.pastes))
                toast("Paste deleted!")
            }
        }
    }
})

export const { addToPaste, updateToPaste, resetAllPaste, removeFromPaste } = pasteSlice.actions;
export default pasteSlice.reducer;