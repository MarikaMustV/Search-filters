type Props = {
  label: string;
  disabled: boolean;
  onChange: () => void;
  isChecked: boolean;
};

export default function Checkbox({ label, disabled, onChange, isChecked }: Props) {
  return (
    <label className={`checkbox-wrapper ${disabled ? "disabled" : ""}`}>
      <input
        type="checkbox"
        className="original-checkbox"
        onChange={onChange}
        checked={isChecked}
        disabled={disabled}
      />
      <div className="custom-checkbox" />
      <div className="filter-name">{label}</div>
    </label>
  );
}
