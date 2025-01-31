import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    activeItem: null,
};

const activeItemSlice = createSlice({
    // slice for setting active button in sidebar
    name: 'activeItem',
    initialState,
    reducers: {
        setActiveItem: (state, action) => {
            state.activeItem = action.payload;
        },
    },
});

export const {setActiveItem} = activeItemSlice.actions;

export default activeItemSlice.reducer;