import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isModalOpen:false
};

const modalSlice = createSlice({
    name:"modal",
    initialState,
    reducers: {
        openCloseModal: (state)=> {
            state.isModalOpen = !state.isModalOpen
        }
    }
})

export const {openCloseModal} = modalSlice.actions;
export default modalSlice.reducer