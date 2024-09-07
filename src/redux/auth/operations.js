import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk('auth/register', async (_, thunkApi) => {try {
    
} catch (error) {
    thunkApi.rejectWithValue(error)
}

})