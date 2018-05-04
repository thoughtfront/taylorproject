import React from "react"
import PropTypes from "prop-types"
import Pages from "./pages"
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import DevTools from './dev/dev_tools'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      page: props.page,
      data: props.data,
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
    const store = configureStore()
    var Page = this.getPage();
    return (
      <Provider store={store}>
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
