import React from 'react';
import { connect } from 'react-redux';
import { getPhostosAction, setPhotosAction } from '../Actions/AppActions';
import AppComponent from '../Components/AppComponent';

/**
 * The app component's container.
 * 
 * @class AppContainer
 * @extends {React.Component}
 */
class AppContainer extends React.Component {
  componentWillMount() {
    this.setState({
      message: 'Some message',
    });
  }

  render() {
    return (
      <AppComponent message={this.state.message} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPhostosAction: (photos) => { dispatch(getPhostosAction(photos)); },
  setPhotosAction: (photos) => { dispatch(setPhotosAction(photos)); },
});

const mapStateToProps = state => ({
  appReducer: state.AppReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
