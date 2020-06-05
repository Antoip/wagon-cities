import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectCity } from '../actions';

class ActiveCity extends Component {
  componentWillMount() {
    this.props.selectCity(this.props.activeCity);
  }

  render() {
    return (
      <div>{this.props.activeCity.name}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCity);
