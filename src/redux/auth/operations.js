import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instanse = axios.create({
    baseURL:'https://connections-api.goit.global'
})

export const login = createAsyncThunk('auth/login',
    async (formData, thunkApi) => {
    try {
        const { data } = instanse.post('/users/login', formData)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
    })

export const register = createAsyncThunk('auth/register',
    async (formData, thunkApi) => {
        try {
            const { data } = instanse.post('/users/signup', formData)
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    })