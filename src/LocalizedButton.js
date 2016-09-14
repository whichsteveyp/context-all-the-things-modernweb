import React from 'react';
import './LocalizedButton.css';

const LocalizedButton = (props, context) => {
  const { message, values, onClick } = props;

  return <button className='divSoup' onClick={onClick}>
    {context.localize(message, values)}
  </button>;
};

// opting in to context here
LocalizedButton.contextTypes = {
  localize: React.PropTypes.func
};

// Other things you might see on the component
// LocalizedButton.propTypes = {
//   message: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
//   values: PropTypes.array
// };

// LocalizedButton.defaultProps = {
//   onClick() {},
//   values: []
// };

export default LocalizedButton;
