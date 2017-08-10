import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React from 'react';
import AppComponent from '../Components/App.Component';
import { ChangeMessageAction } from '../Actions/App.Action';


/**
 * The container for the AppComponent
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
    this.onChangeClick = this.onChangeClick.bind(this);
  }

  /**
   * The change button click handler for the AppComponent.
   * 
   * 
   * @memberOf AppContainer
   */
  onChangeClick() {
    const someMessage = 'new message';
    this.props.changeMessageAction(someMessage);
  }

  render() {
    return <AppComponent message={this.props.message} onChangeClick={this.onChangeClick} />;
  }
}

AppContainer.propTypes = {
  changeMessageAction: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  message: state.AppReducer.message,
});

const mapDispatchToProps = dispatch => ({
  changeMessageAction: (message) => { dispatch(ChangeMessageAction(message)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
