import { configureStore } from "@reduxjs/toolkit";
import sliceTodos from './reducer'

const store=configureStore({
    reducer:sliceTodos
})

export default store