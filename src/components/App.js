import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import "./App.css";

class App extends Component {
  static propTypes = {
    deals: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="App">
        {this.props.deals.map(deal => <div key={deal.key}>{deal.title}</div>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deals: state.deals
});

export default connect(mapStateToProps, {})(App);
