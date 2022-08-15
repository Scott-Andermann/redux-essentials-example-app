import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', name: 'Kelsey Andermann'},
    {id: '2', name: 'Scott Andermann'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer;