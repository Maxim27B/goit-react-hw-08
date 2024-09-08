import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instanse = axios.create({
    baseURL:'https://connections-api.goit.global'
})

const setAuthHeaders = (token) => {
    instanse.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const register = createAsyncThunk('auth/register',
    async (formData, thunkApi) => {
        try {
            const { data } = await instanse.post('/users/signup', formData)
            setAuthHeaders(data.token);
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    })

export const login = createAsyncThunk('auth/login',
    async (formData, thunkApi) => {
    try {
        const { data } = await instanse.post('/users/login', formData)
        setAuthHeaders(data.token);
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
    })
