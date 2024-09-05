import { configureStore } from "@reduxjs/toolkit"

import { filtersReducer } from "./filtersSlice"
import { contactsReducer } from "./contacts/slice"

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		filters: filtersReducer,
	},
})
