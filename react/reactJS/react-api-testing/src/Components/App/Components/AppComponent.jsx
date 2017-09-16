import React from 'react';
import PropTypes from 'prop-types';

/**
 * Returns an array of photo elements
 * 
 * @param {any} photos 
 */
const renderPhotos = photos => photos.map((value, key) => (<div key={key}>
  {value.id}
</div>));

/**
 * Presentational app component.
 * 
 * @export
 * @param {any} props 
 * @returns 
 */
export default function AppComponent(props) {
  return (<div>
    {renderPhotos(props.photos)}
    <input onClick={props.onGetPics} type="button" value="Get Pics" />
  </div>);
}

AppComponent.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    albumId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    thumbnailUrl: PropTypes.string,
  })).isRequired,
  onGetPics: PropTypes.func.isRequired,
};
