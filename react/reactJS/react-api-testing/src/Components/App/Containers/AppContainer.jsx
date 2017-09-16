import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPhostosAction, setPhotosAction } from '../Actions/AppActions';
import AppComponent from '../Components/AppComponent';

/**
 * The app component's container.
 * 
 * @class AppContainer
 * @extends {React.Component}
 */
class AppContainer extends React.Component {
  constructor() {
    super();
    this.onGetPics = this.onGetPics.bind(this);
  }

  componentWillMount() {
    this.setState({});
  }

  /**
   * Called when get button is clicked.
   * 
   * @memberof AppContainer
   */
  onGetPics() {
    this.props.getPhostosAction();
  }

  render() {
    return (
      <AppComponent onGetPics={this.onGetPics} photos={this.props.photos} />
    );
  }
}

AppContainer.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    albumId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    thumbnailUrl: PropTypes.string,
  })).isRequired,
  getPhostosAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getPhostosAction: () => { dispatch(getPhostosAction()); },
  setPhotosAction: (photos) => { dispatch(setPhotosAction(photos)); },
});

const mapStateToProps = state => ({
  photos: state.AppReducer.photos,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
