/* eslint-disable react/prop-types */
import { textile, bodyColors, metalColors } from '../../utils/data';

export const Button = ({
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
      {icon}
      {text}
    </button>
  );
};

export const Buttons = ({
  setSelectedMaterial,
  setselectedBodyColor,
  setselectedMetallColor,
}) => {
  return (
    <div className="buttons">
      <div className="buttons-container">
        <h2>body colors</h2>
        <hr />
        <div className="color-button">
          {bodyColors.map((color, index) => (
            <div key={index}>
              <Button
                backgroundColor={color.hex}
                circle
                width={'40px'}
                height={'40px'}
                onClick={() => setselectedBodyColor(index)}
              />
              <p>{color.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="buttons-container">
        <h2>metal colors</h2>
        <hr />
        <div className="color-button">
          {metalColors.map((color, index) => (
            <div key={index}>
              <Button
                backgroundColor={color.hex}
                circle
                width={'40px'}
                height={'40px'}
                onClick={() => setselectedMetallColor(index)}
              />
              <p>{color.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="buttons-container">
        <h2>material</h2>
        <hr />
        <div className="color-button">
          {textile.map((material, index) => (
            <Button
              key={index}
              text={material}
              backgroundColor={'transparent'}
              onClick={() => setSelectedMaterial(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
