import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66d78b9f37b1cadd8051cb1b.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/contacts')
        return data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const { data } = await axios.post('/contacts', contact)
        return data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/contacts/${contactId}`)
        return data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})
