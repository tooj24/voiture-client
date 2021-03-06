import React from "react";

interface Props {
  name: string;
  label: string;
  value: string|number;
  placeholder?: string;
  type: string;
  error: string;
  onChange: (e: any) => void;
}

const Field = ({ name, label, value, onChange, type, placeholder, error }: Props) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder || label}
      name={name}
      id={name}
      className={"form-control " + (error && " is-invalid")}
    />
    {error && <p className="invalid-feedback">{error}</p>}
  </div>
);

export { Field };
