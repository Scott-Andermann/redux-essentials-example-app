import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/client";

// const initialState = [
//     {id: '1', name: 'Kelsey Andermann'},
//     {id: '2', name: 'Scott Andermann'}
// ]

const initialState = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await client.get('/fakeApi/users');
    return response.data;
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export default usersSlice.reducer;