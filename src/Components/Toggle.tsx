import "../Styles/Toggle.css"
import { ZoomInOutlined } from "@ant-design/icons";

interface ToggleProps {
  handleChange: () => void;
  isChecked: boolean;
}


export const Toggle: React.FC<ToggleProps> = (Props) => {
  const { handleChange, isChecked } = Props;
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className="slider"></span>
      <ZoomInOutlined className="z-10"/>
    </label>
  )
};
