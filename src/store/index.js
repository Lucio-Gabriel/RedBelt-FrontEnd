import { configureStore } from "@reduxjs/toolkit"; 
import mensagensReducer from "../features/mensagensReducer";

const store  = configureStore({
    reducer: {
        mensagens: mensagensReducer,
    },
});

export default store;
