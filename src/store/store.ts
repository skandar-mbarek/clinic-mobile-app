import {applyMiddleware, combineReducers, createStore} from "redux";
import reducers from "@/store/reducers";
import {thunk} from "redux-thunk";


const rootReducer = combineReducers({
    data: reducers
})
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>;