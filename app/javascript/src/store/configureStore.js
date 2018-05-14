import { createStore, applyMiddleware, compose } from 'redux'
import AppReducer from './AppReducer'
import DevTools from '../dev/dev_tools'

const enhancer = compose(
  DevTools.instrument()
)

export default function configureStore(initialState = {}) {
  const store = createStore(AppReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('./reducer', () =>
      store.replaceReducer(require('./reducer'))
    )
  }

  return store
}
