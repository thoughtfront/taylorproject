import React from "react"
import PropTypes from "prop-types"
import Pages from "./pages"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      page: props.page,
      data: props.data,
    }
  }

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
      <div>
        <Page {...this.state.data}></Page>
      </div>
    )
  }
}

App.propTypes = {
  page: PropTypes.string,
  data: PropTypes.object,
}


export default App
