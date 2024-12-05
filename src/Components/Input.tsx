import { InputProps } from '../webData/Webdata';

const Input: React.FC<InputProps> = ({ placeholder, className, type , name, onChange,onClick }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      name={name}
      onChange={onChange} // Ensure it's passed as a function
      onClick={onClick}
    />
  );
};

export default Input;
