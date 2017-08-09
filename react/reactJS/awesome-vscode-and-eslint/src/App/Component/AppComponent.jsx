import React from 'react';
import PropTypes from 'prop-types';

/**
 * The presentational react component.
 * 
 * @export
 * @param {any} props 
 * @returns 
 */
export default function AppComponent(props) {
  return (<div>{ props.message }
    <button onClick={props.onChangeClick}>Change message</button>
  </div>);
}

/* Defining the property types */
AppComponent.propTypes = {
  message: PropTypes.string.isRequired,
  onChangeClick: PropTypes.func.isRequired,
};
