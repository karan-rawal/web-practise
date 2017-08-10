import React from 'react';
import PropTypes from 'prop-types';
import { COMPONENT } from '../Constants';

export default function AppComponent(props) {
  return (
    <div>
      Your message is : {props.message}
      <button onClick={props.onChangeClick}>Change Message</button>
    </div>
  );
}

AppComponent.propTypes = {
  message: PropTypes.string,
  onChangeClick: PropTypes.func.isRequired,
};

AppComponent.defaultProps = {
  message: COMPONENT.DEFAULT_MESSAGE,
};
