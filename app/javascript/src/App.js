import React from "react"
import PropTypes from "prop-types"
import Pages from "./pages"
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import DevTools from './dev/dev_tools'

class App extends React.Component {

  constructor(props) {
    super(props)
    const store = configureStore(window.App.initial_state)
    window.store = store
    this.state = {
      page: props.page,
      data: props.data,
      store: store,
    }
  }

  // Get the react component from the page object
  getPage() {
    var ns = this.state.page.split('.')
    var comp = Pages
    ns.forEach( n => {
      comp = comp[n];
    });

    return comp;
  }

  render() {
    var Page = this.getPage();
    return (
      <Provider store={this.state.store}>
        <div>
          <Page {...this.state.data}></Page>
          <DevTools />
        </div>
      </Provider>
    )
  }
}

App.propTypes = {
  page: PropTypes.string.isRequired,
  data: PropTypes.object,
}

App.defaultProps = {
  data: {},
}


export default App
