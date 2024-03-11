import {combineReducers, createStore} from "redux";
import reducers from "@/store/reducers";




const rootReducer = combineReducers({
        data : reducers
})
export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>;