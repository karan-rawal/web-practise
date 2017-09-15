import React from 'react';
import PropTypes from 'prop-types';

/**
 * Presentational app component.
 * 
 * @export
 * @param {any} props 
 * @returns 
 */
export default function AppComponent(props) {
  return (<div>
        Testing App Component {props.message}
  </div>);
}

AppComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
