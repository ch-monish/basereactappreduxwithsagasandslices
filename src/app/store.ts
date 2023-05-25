import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { createLogger } from "redux-logger";
import {rootSaga} from './saga'
import counterReducer from '../features/Counter/countersclice'
import quoteReducer from '../features/Quotes/quoteslice'

// export function useReduxStore() {
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const enhancers = applyMiddleware(logger, sagaMiddleware);
// }

const rootreducer = {
  counter: counterReducer,
  quote: quoteReducer,
}
export const store = configureStore({
  reducer: rootreducer,
    middleware: [sagaMiddleware]
  })
  sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// function createLogger() {
//   throw new Error('Function not implemented.');
// }
