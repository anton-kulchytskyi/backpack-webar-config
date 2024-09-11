/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';

const Button = ({
  text,
  backgroundColor,
  color,
  icon,
  circle,
  width,
  height,
  onClick,
}) => {
  const borderRadius = circle ? '50%' : '1.25rem';
  return (
    <button
      type="button"
      style={{
        backgroundColor,
        color,
        borderRadius,
        width,
        height,
      }}
      onClick={onClick}
    >
      {icon} {text}
    </button>
  );
};

// Button.propTypes = {
//   text: PropTypes.string,
//   backgroundColor: PropTypes.number,
//   color: PropTypes.object,
//   icon: PropTypes.array,
//   circle
//   width
//   height
//   onClick
// };

export default Button;
