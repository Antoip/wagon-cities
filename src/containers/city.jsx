import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectCity } from '../actions';


class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    let cityClasses = "cities";
    if (this.props.city === this.props.activeCity) {
      cityClasses += "active-city";
    }

    return (
      <div className={cityClasses} onClick={this.handleClick}>
        {this.props.city.name}
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

export default connect(mapStateToProps, mapDispatchToProps)(City);
