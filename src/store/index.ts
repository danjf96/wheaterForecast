
import { applyMiddleware, combineReducers, createStore } from 'redux'
import ReduxThunk from 'redux-thunk';

const reducers = {

}

const combinedReducers =  combineReducers(reducers)

const store = createStore(combinedReducers, {}, applyMiddleware(ReduxThunk));

// We can use RootState type in every file in project
declare global {
    type RootState = ReturnType<typeof store.getState>
}

// Thanks to that you will have ability to use useSelector hook with state value
declare module 'react-redux' {
    interface DefaultRootState extends RootState { }
}

export default store

