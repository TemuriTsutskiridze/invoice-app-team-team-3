type InputFieldProps = {
  children: string;
  type: string;
  value?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  step?: string;
};

const InputField: React.FC<InputFieldProps> = ({ children, type }) => (
  <div>
    <label className="labelStyle mt-6">{children}</label>
    <input type={type} className="inputStyle inputText mt-[9px]" />
  </div>
);

export default InputField;
