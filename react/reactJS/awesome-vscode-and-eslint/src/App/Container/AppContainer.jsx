import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonClickAction from '../Action/AppAction';
import AppComponent from '../Component/AppComponent';

/**
 * The container class for the AppComponent
 * 
 * @class AppContainer
 * @extends {React.Component}
 */
class AppContainer extends React.Component {
  /**
   * Creates an instance of AppContainer.
   * @param {any} props 
   * 
   * @memberOf AppContainer
   */
  constructor(props) {
    super(props);
    this.state = {}; // to avoid eslint errors
    this.onChangeClick = this.onChangeClick.bind(this);
  }

  /**
   * Function to execute when app component's button is clicked.
   * 
   * 
   * @memberOf AppContainer
   */
  onChangeClick() {
    this.props.buttonClickAction();
  }

  render() {
    return <AppComponent onChangeClick={this.onChangeClick} message={this.props.message} />;
  }
}

/* Define the proptypes */
AppContainer.propTypes = {
  message: PropTypes.string.isRequired,
  buttonClickAction: PropTypes.func.isRequired,
};

/* Map redux's state to react's properties */
const mapStateToProps = state => ({
  message: state.AppReducer.message,
});

/* Map redux's dispatch to properties */
const mapDispatchToProps = dispatch => ({
  buttonClickAction: () => dispatch(ButtonClickAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
