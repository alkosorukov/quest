import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './rootSaga'




export default function configureStore(initialState = { }) {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware]
  const enhancers = [
    applyMiddleware(...middlewares),
    // other store enhancers if any
  ]
  const composeEnhancers = composeWithDevTools(
    {
      // other compose enhancers if any
      // Specify here other options if needed
    }
  )
  const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers))
  sagaMiddleware.run(rootSaga)

  return store
}
