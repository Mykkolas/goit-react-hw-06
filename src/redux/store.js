import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage
import contactSlice from "./contactsSlice";
import filtersSlice from "./filtersSlice";

// Configure persistence for contacts slice (only `items`)
const contactsPersistConfig = {
    key: "contacts",
    storage, // means LocalStorage
    whitelist: ["items"], // Persist only the `items` field
};

// Wrap contacts reducer with persistReducer
const persistedContactsReducer = persistReducer(contactsPersistConfig, contactSlice);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer, // Use the persisted reducer for contacts
        filters: filtersSlice, // Normal reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializable check to avoid warnings
        }),
});

export const persistor = persistStore(store); // activation
